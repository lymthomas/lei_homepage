import importlib.util
from pathlib import Path
import tempfile
import textwrap
import unittest


SCRIPT_PATH = Path(__file__).with_name("generate_pdf_overviews.py")


def load_script_module():
    spec = importlib.util.spec_from_file_location("generate_pdf_overviews", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class GeneratePdfOverviewsTest(unittest.TestCase):
    def test_preview_path_preserves_pdf_resource_structure_as_jpg(self):
        script = load_script_module()

        href = "/resources/pdf/general_exp_1/the_final_paper.pdf"
        expected = Path("homepage/public/resources/pdf-previews/general_exp_1/the_final_paper.jpg")

        self.assertEqual(script.preview_path_for_href(href), script.ROOT / expected)

    def test_collect_pdf_hrefs_finds_unique_public_pdf_links(self):
        script = load_script_module()

        with tempfile.TemporaryDirectory() as temp_dir:
            library_path = Path(temp_dir) / "library.ts"
            library_path.write_text(
                textwrap.dedent(
                    """
                    const pdfRoot = "/resources/pdf";
                    const apostrophe = `${pdfRoot}/general_exp_1/Measurement_of_the_Young's_Modulus_of_Metal.pdf`;
                    const first = `${pdfRoot}/outline/LG公式单.pdf`;
                    const duplicate = `${pdfRoot}/outline/LG公式单.pdf`;
                    const second = `${pdfRoot}/study_notes/强化学习知识整理.pdf`;
                    """
                ),
                encoding="utf-8",
            )

            self.assertEqual(
                script.collect_pdf_hrefs(library_path),
                [
                    "/resources/pdf/general_exp_1/Measurement_of_the_Young's_Modulus_of_Metal.pdf",
                    "/resources/pdf/outline/LG公式单.pdf",
                    "/resources/pdf/study_notes/强化学习知识整理.pdf",
                ],
            )


if __name__ == "__main__":
    unittest.main()
