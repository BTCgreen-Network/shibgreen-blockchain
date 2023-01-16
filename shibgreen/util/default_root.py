from __future__ import annotations

import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("SHIBGREEN_ROOT", "~/.shibgreen/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("SHIBGREEN_KEYS_ROOT", "~/.shibgreen_keys"))).resolve()
