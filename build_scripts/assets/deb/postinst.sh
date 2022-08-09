#!/usr/bin/env bash
# Post install script for the UI .deb to place symlinks in places to allow the CLI to work similarly in both versions

set -e

ln -s /usr/lib/shibgreen-blockchain/resources/app.asar.unpacked/daemon/shibgreen /usr/bin/shibgreen || true
ln -s /usr/lib/shibgreen-blockchain/resources/app.asar.unpacked/daemon /opt/shibgreen || true
