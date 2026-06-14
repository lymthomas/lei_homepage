"""Generate personal homepage QR assets without touching the website source.

Default output:
  assets/figure/lei-homepage-qrcode-plain.png
  assets/figure/lei-homepage-qrcode-portrait.png
  assets/figure/lei-homepage-qrcode-card.png

The base QR image is produced by the `qrcode` npm CLI so this script does not
need to vendor a QR encoder. Run from the repository root:

  python scripts/create_personal_qr.py
"""

from __future__ import annotations

import argparse
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_URL = "https://lei-homepage.netlify.app/"
DEFAULT_DISPLAY_URL = "lei-homepage.netlify.app"
DEFAULT_PORTRAIT = ROOT / "assets" / "figure" / "selfie_formal.jpeg"
DEFAULT_OUTPUT_DIR = ROOT / "assets" / "figure"


def output_paths(output_dir: Path) -> dict[str, Path]:
    return {
        "plain": output_dir / "lei-homepage-qrcode-plain.png",
        "portrait": output_dir / "lei-homepage-qrcode-portrait.png",
        "card": output_dir / "lei-homepage-qrcode-card.png",
    }


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        Path("C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf"),
        Path("C:/Windows/Fonts/bahnschrift.ttf"),
    ]
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size=size)
    return ImageFont.load_default()


def run_qrcode_cli(url: str, plain_path: Path) -> None:
    plain_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "npx.cmd",
            "qrcode",
            "-o",
            str(plain_path),
            "-t",
            "png",
            "-w",
            "1600",
            "-q",
            "4",
            "-e",
            "H",
            url,
        ],
        cwd=ROOT,
        check=True,
    )


def center_crop_square(image: Image.Image) -> Image.Image:
    width, height = image.size
    side = min(width, height)
    left = (width - side) // 2
    top = (height - side) // 2
    return image.crop((left, top, left + side, top + side))


def circular_portrait(portrait_path: Path, size: int) -> Image.Image:
    portrait = ImageOps.exif_transpose(Image.open(portrait_path)).convert("RGB")
    portrait = center_crop_square(portrait).resize((size, size), Image.Resampling.LANCZOS)

    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)

    out = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    out.paste(portrait, (0, 0), mask)
    return out


def make_embedded_qr(plain_path: Path, portrait_path: Path, portrait_output_path: Path) -> Image.Image:
    qr = Image.open(plain_path).convert("RGBA")
    qr_size = qr.size[0]

    logo_size = int(qr_size * 0.17)
    pad = int(qr_size * 0.025)
    badge_size = logo_size + pad * 2
    badge = Image.new("RGBA", (badge_size, badge_size), (255, 255, 255, 0))

    draw = ImageDraw.Draw(badge)
    draw.ellipse((0, 0, badge_size - 1, badge_size - 1), fill=(255, 255, 255, 255))
    draw.ellipse(
        (pad // 2, pad // 2, badge_size - pad // 2 - 1, badge_size - pad // 2 - 1),
        outline=(23, 45, 67, 255),
        width=max(6, qr_size // 120),
    )

    badge.alpha_composite(circular_portrait(portrait_path, logo_size), (pad, pad))
    pos = ((qr_size - badge_size) // 2, (qr_size - badge_size) // 2)
    qr.alpha_composite(badge, pos)
    qr.save(portrait_output_path)
    return qr


def rounded_rect_mask(size: tuple[int, int], radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return mask


def draw_centered_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    y: int,
    image_width: int,
    text_font: ImageFont.FreeTypeFont | ImageFont.ImageFont,
    fill: tuple[int, int, int],
) -> int:
    bbox = draw.textbbox((0, 0), text, font=text_font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    draw.text(((image_width - text_width) // 2, y), text, font=text_font, fill=fill)
    return y + text_height


def make_card(qr: Image.Image, card_path: Path, display_url: str, url: str) -> None:
    width, height = 1800, 2200
    bg = Image.new("RGB", (width, height), "#f7f3ec")
    draw = ImageDraw.Draw(bg)

    margin = 90
    panel = (margin, margin, width - margin, height - margin)
    draw.rounded_rectangle(panel, radius=56, fill="#ffffff", outline="#d7c8b8", width=4)

    y = 178
    y = draw_centered_text(draw, "Thomas YiMing Lei", y, width, font(82, bold=True), (23, 45, 67))
    y += 30
    draw_centered_text(draw, "Homepage QR Code", y, width, font(46), (94, 93, 87))

    qr_display = qr.resize((1260, 1260), Image.Resampling.NEAREST)
    qr_x = (width - qr_display.size[0]) // 2
    qr_y = 470

    shadow = Image.new("RGBA", (qr_display.size[0] + 42, qr_display.size[1] + 42), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle(
        (21, 21, shadow.size[0] - 1, shadow.size[1] - 1),
        radius=34,
        fill=(23, 45, 67, 32),
    )
    bg.paste(shadow, (qr_x - 21, qr_y - 13), shadow)

    qr_panel = Image.new("RGBA", (qr_display.size[0] + 56, qr_display.size[1] + 56), (255, 255, 255, 255))
    qr_panel.putalpha(rounded_rect_mask(qr_panel.size, 34))
    qr_panel.alpha_composite(qr_display, (28, 28))
    bg.paste(qr_panel, (qr_x - 28, qr_y - 28), qr_panel)

    y = qr_y + qr_display.size[1] + 105
    y = draw_centered_text(draw, display_url, y, width, font(58, bold=True), (23, 45, 67))
    y += 34
    draw_centered_text(draw, url, y, width, font(36), (94, 93, 87))

    bg.save(card_path, quality=95)


def build_assets(url: str, display_url: str, portrait_path: Path, output_dir: Path) -> dict[str, Path]:
    if not portrait_path.exists():
        raise FileNotFoundError(f"Portrait image not found: {portrait_path}")
    paths = output_paths(output_dir)
    run_qrcode_cli(url, paths["plain"])
    embedded_qr = make_embedded_qr(paths["plain"], portrait_path, paths["portrait"])
    make_card(embedded_qr, paths["card"], display_url, url)
    return paths


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate homepage QR code images.")
    parser.add_argument("--url", default=DEFAULT_URL)
    parser.add_argument("--display-url", default=DEFAULT_DISPLAY_URL)
    parser.add_argument("--portrait", type=Path, default=DEFAULT_PORTRAIT)
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT_DIR)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    paths = build_assets(args.url, args.display_url, args.portrait.resolve(), args.output_dir.resolve())
    for path in paths.values():
        print(path)


if __name__ == "__main__":
    main()
