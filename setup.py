from __future__ import annotations

import os

from setuptools import setup

dependencies = [
    "aiofiles==22.1.0",  # Async IO for files
    "blspy==1.0.16",  # Signature library
    "chiavdf==1.0.8",  # timelord and vdf verification
    "chiabip158==1.1",  # bip158-style wallet filters
    "chiapos==1.0.11",  # proof of space
    "clvm==0.9.7",
    "clvm_tools==0.4.6",  # Currying, Program.to, other conveniences
    "chia_rs==0.1.14",
    "clvm-tools-rs==0.1.25",  # Rust implementation of clvm_tools' compiler
    "aiohttp==3.8.3",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.9",  # Binary data management library
    "colorama==0.4.5",  # Colorizes terminal output
    "colorlog==6.7.0",  # Adds color to logs
    "concurrent-log-handler==0.9.20",  # Concurrently log and rotate logs
    "cryptography==38.0.3",  # Python cryptography library for TLS - keyring conflict
    "filelock==3.8.0",  # For reading and writing config multiprocess and multithread safely  (non-reentrant locks)
    "keyring==23.9.3",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  "keyrings.cryptfile==1.3.8",  # Secure storage for keys on Linux (Will be replaced)
    #  See https://github.com/frispete/keyrings.cryptfile/issues/15
    "PyYAML==6.0",  # Used for config file format
    "setproctitle==1.2.3",  # Gives the shibgreen processes readable names
    "sortedcontainers==2.4.0",  # For maintaining sorted mempools
    "click==8.1.3",  # For the CLI
    "dnspython==2.2.1",  # Query DNS seeds
    "watchdog==2.1.9",  # Filesystem event watching - watches keyring.yaml
    "dnslib==0.9.23",  # dns lib
    "typing-extensions==4.4.0",  # typing backports like Protocol and TypedDict
    "zstd==1.5.2.6",
    "packaging==21.3",
    "psutil==5.9.1",
]

upnp_dependencies = [
    "miniupnpc==2.2.2",  # Allows users to open ports on their router
]

dev_dependencies = [
    "build",
    "coverage",
    "diff-cover",
    "pre-commit",
    "py3createtorrent",
    "pylint",
    "pytest",
    "pytest-asyncio>=0.18.1",  # require attribute 'fixture'
    "pytest-cov",
    "pytest-monitor; sys_platform == 'linux'",
    "pytest-xdist",
    "twine",
    "isort",
    "flake8",
    "mypy",
    "black==22.10.0",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
    "pyinstaller==5.3",
    "types-aiofiles",
    "types-cryptography",
    "types-pkg_resources",
    "types-pyyaml",
    "types-setuptools",
]

kwargs = dict(
    name="shibgreen-blockchain",
    author="Mariano Sorgente",
    author_email="mariano@shib.green",
    description="SHIBgreen blockchain full node, farmer, timelord, and wallet.",
    url="https://shib.green/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="shibgreen blockchain node",
    install_requires=dependencies,
    extras_require=dict(
        dev=dev_dependencies,
        upnp=upnp_dependencies,
    ),
    packages=[
        "build_scripts",
        "shibgreen",
        "shibgreen.cmds",
        "shibgreen.clvm",
        "shibgreen.consensus",
        "shibgreen.daemon",
        "shibgreen.data_layer",
        "shibgreen.full_node",
        "shibgreen.timelord",
        "shibgreen.farmer",
        "shibgreen.harvester",
        "shibgreen.introducer",
        "shibgreen.plot_sync",
        "shibgreen.plotters",
        "shibgreen.plotting",
        "shibgreen.pools",
        "shibgreen.protocols",
        "shibgreen.rpc",
        "shibgreen.seeder",
        "shibgreen.server",
        "shibgreen.simulator",
        "shibgreen.types.blockchain_format",
        "shibgreen.types",
        "shibgreen.util",
        "shibgreen.wallet",
        "shibgreen.wallet.db_wallet",
        "shibgreen.wallet.puzzles",
        "shibgreen.wallet.cat_wallet",
        "shibgreen.wallet.did_wallet",
        "shibgreen.wallet.nft_wallet",
        "shibgreen.wallet.settings",
        "shibgreen.wallet.trading",
        "shibgreen.wallet.util",
        "shibgreen.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "shibgreen = shibgreen.cmds.shibgreen:main",
            "shibgreen_daemon = shibgreen.daemon.server:main",
            "shibgreen_wallet = shibgreen.server.start_wallet:main",
            "shibgreen_full_node = shibgreen.server.start_full_node:main",
            "shibgreen_harvester = shibgreen.server.start_harvester:main",
            "shibgreen_farmer = shibgreen.server.start_farmer:main",
            "shibgreen_introducer = shibgreen.server.start_introducer:main",
            "shibgreen_crawler = shibgreen.seeder.start_crawler:main",
            "shibgreen_seeder = shibgreen.seeder.dns_server:main",
            "shibgreen_timelord = shibgreen.server.start_timelord:main",
            "shibgreen_timelord_launcher = shibgreen.timelord.timelord_launcher:main",
            "shibgreen_full_node_simulator = shibgreen.simulator.start_simulator:main",
            "shibgreen_data_layer = shibgreen.server.start_data_layer:main",
            "shibgreen_data_layer_http = shibgreen.data_layer.data_layer_server:main",
        ]
    },
    package_data={
        "shibgreen": ["pyinstaller.spec"],
        "": ["*.clvm", "*.clvm.hex", "*.clib", "*.clinc", "*.clsp", "py.typed"],
        "shibgreen.util": ["initial-*.yaml", "english.txt"],
        "shibgreen.ssl": ["shibgreen_ca.crt", "shibgreen_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["cacert.pem"],
    },
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
    project_urls={
        "Source": "https://github.com/SHIBgreen-Network/shibgreen-blockchain/",
        "Changelog": "https://github.com/SHIBgreen-Network/shibgreen-blockchain/blob/main/CHANGELOG.md",
    },
)


if len(os.environ.get("SHIBGREEN_SKIP_SETUP", "")) < 1:
    setup(**kwargs)  # type: ignore
