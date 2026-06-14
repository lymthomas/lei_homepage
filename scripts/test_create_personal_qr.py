import importlib.util
from pathlib import Path
import unittest


SCRIPT_PATH = Path(__file__).with_name("create_personal_qr.py")


def load_script_module():
    spec = importlib.util.spec_from_file_location("create_personal_qr", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class PersonalQrScriptTest(unittest.TestCase):
    def test_defaults_use_requested_photo_and_stay_outside_homepage(self):
        script = load_script_module()

        self.assertEqual(
            script.DEFAULT_PORTRAIT,
            script.ROOT / "assets" / "figure" / "selfie_formal.jpeg",
        )
        self.assertEqual(script.DEFAULT_OUTPUT_DIR, script.ROOT / "assets" / "figure")

        output_paths = script.output_paths(script.DEFAULT_OUTPUT_DIR)
        self.assertEqual(
            set(output_paths),
            {"plain", "portrait", "card"},
        )
        for output_path in output_paths.values():
            self.assertTrue(output_path.is_relative_to(script.ROOT / "assets" / "figure"))
            self.assertFalse(output_path.is_relative_to(script.ROOT / "homepage"))


if __name__ == "__main__":
    unittest.main()
