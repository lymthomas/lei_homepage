"""Generate stitched overview images for knowledge-library PDFs."""

from __future__ import annotations

import argparse
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


ROOT = Path(__file__).resolve().parents[1]
LIBRARY_PATH = ROOT / "homepage" / "src" / "data" / "library.ts"
PDF_PUBLIC_ROOT = ROOT / "homepage" / "public" / "resources" / "pdf"
PREVIEW_PUBLIC_ROOT = ROOT / "homepage" / "public" / "resources" / "pdf-previews"


def collect_pdf_hrefs(library_path: Path = LIBRARY_PATH) -> list[str]:
    source = library_path.read_text(encoding="utf-8")

    seen: set[str] = set()
    hrefs: list[str] = []
    for match in re.finditer(r"\$\{pdfRoot\}/([^`]+?\.pdf)", source):
        href = f"/resources/pdf/{match.group(1)}"
        if href not in seen:
            seen.add(href)
            hrefs.append(href)
    return hrefs


def preview_path_for_href(href: str) -> Path:
    if not href.startswith("/resources/pdf/") or not href.lower().endswith(".pdf"):
        raise ValueError(f"Unsupported PDF href: {href}")
    relative = Path(href.removeprefix("/resources/pdf/")).with_suffix(".jpg")
    return PREVIEW_PUBLIC_ROOT / relative


def pdf_path_for_href(href: str) -> Path:
    return PDF_PUBLIC_ROOT / Path(href.removeprefix("/resources/pdf/"))


def find_pdftoppm() -> str:
    executable = shutil.which("pdftoppm")
    if executable:
        return executable
    candidate = Path("C:/texlive/2024/bin/windows/pdftoppm.exe")
    if candidate.exists():
        return str(candidate)
    raise FileNotFoundError("pdftoppm was not found on PATH.")


def render_pdf_pages(pdftoppm: str, pdf_path: Path, temp_dir: Path, max_pages: int) -> list[Path]:
    prefix = temp_dir / "page"
    subprocess.run(
        [
            pdftoppm,
            "-png",
            "-r",
            "86",
            "-f",
            "1",
            "-l",
            str(max_pages),
            str(pdf_path),
            str(prefix),
        ],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return sorted(temp_dir.glob("page-*.png"))


def make_overview(page_paths: list[Path], output_path: Path) -> None:
    if not page_paths:
        raise ValueError(f"No rendered pages for {output_path}")

    thumb_width = 520
    gap = 28
    padding = 34
    columns = 2 if len(page_paths) > 1 else 1

    thumbs: list[Image.Image] = []
    for page_path in page_paths:
        image = Image.open(page_path).convert("RGB")
        image.thumbnail((thumb_width, 760), Image.Resampling.LANCZOS)
        thumb = ImageOps.expand(image, border=1, fill="#d8d1c7")
        thumbs.append(thumb)

    rows = (len(thumbs) + columns - 1) // columns
    cell_width = max(thumb.width for thumb in thumbs)
    cell_height = max(thumb.height for thumb in thumbs)
    width = padding * 2 + columns * cell_width + (columns - 1) * gap
    height = padding * 2 + rows * cell_height + (rows - 1) * gap

    canvas = Image.new("RGB", (width, height), "#f7f3ec")
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((0, 0, width - 1, height - 1), radius=28, fill="#f7f3ec")

    for index, thumb in enumerate(thumbs):
        row, column = divmod(index, columns)
        x = padding + column * (cell_width + gap) + (cell_width - thumb.width) // 2
        y = padding + row * (cell_height + gap) + (cell_height - thumb.height) // 2
        shadow_box = (x + 7, y + 9, x + thumb.width + 7, y + thumb.height + 9)
        draw.rounded_rectangle(shadow_box, radius=10, fill="#ded6ca")
        canvas.paste(thumb, (x, y))

    output_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_path, "JPEG", quality=84, optimize=True)


def generate_overview(href: str, pdftoppm: str, max_pages: int, force: bool) -> Path:
    pdf_path = pdf_path_for_href(href)
    output_path = preview_path_for_href(href)
    if output_path.exists() and not force:
        return output_path
    if not pdf_path.exists():
        raise FileNotFoundError(f"PDF not found: {pdf_path}")

    with tempfile.TemporaryDirectory(prefix="pdf-overview-") as temp_name:
        temp_dir = Path(temp_name)
        page_paths = render_pdf_pages(pdftoppm, pdf_path, temp_dir, max_pages)
        make_overview(page_paths, output_path)
    return output_path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate stitched overview images for PDF resources.")
    parser.add_argument("--max-pages", type=int, default=4)
    parser.add_argument("--force", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    pdftoppm = find_pdftoppm()
    for href in collect_pdf_hrefs():
        output_path = generate_overview(href, pdftoppm, args.max_pages, args.force)
        print(output_path)


if __name__ == "__main__":
    main()
