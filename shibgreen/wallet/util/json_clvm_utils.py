from typing import Any

from shibgreen.types.blockchain_format.program import Program


def json_to_shibgreenlisp(json_data: Any) -> Any:
    list_for_shibgreenlisp = []
    if isinstance(json_data, list):
        for value in json_data:
            list_for_shibgreenlisp.append(json_to_shibgreenlisp(value))
    else:
        if isinstance(json_data, dict):
            for key, value in json_data:
                list_for_shibgreenlisp.append((key, json_to_shibgreenlisp(value)))
        else:
            list_for_shibgreenlisp = json_data
    return Program.to(list_for_shibgreenlisp)
