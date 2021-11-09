from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "shibgreen_harvester shibgreen_timelord_launcher shibgreen_timelord shibgreen_farmer shibgreen_full_node shibgreen_wallet".split(),
    "node": "shibgreen_full_node".split(),
    "harvester": "shibgreen_harvester".split(),
    "farmer": "shibgreen_harvester shibgreen_farmer shibgreen_full_node shibgreen_wallet".split(),
    "farmer-no-wallet": "shibgreen_harvester shibgreen_farmer shibgreen_full_node".split(),
    "farmer-only": "shibgreen_farmer".split(),
    "timelord": "shibgreen_timelord_launcher shibgreen_timelord shibgreen_full_node".split(),
    "timelord-only": "shibgreen_timelord".split(),
    "timelord-launcher-only": "shibgreen_timelord_launcher".split(),
    "wallet": "shibgreen_wallet shibgreen_full_node".split(),
    "wallet-only": "shibgreen_wallet".split(),
    "introducer": "shibgreen_introducer".split(),
    "simulator": "shibgreen_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
