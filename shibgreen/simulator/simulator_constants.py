if __name__ == "__main__":
    from shibgreen.util.default_root import DEFAULT_ROOT_PATH
    from shibgreen.simulator.block_tools import create_block_tools, test_constants
    from shibgreen.simulator.keyring import TempKeyring

    with TempKeyring() as keychain:
        # TODO: mariano: fix this with new consensus
        bt = create_block_tools(root_path=DEFAULT_ROOT_PATH, keychain=keychain)
        new_genesis_block = bt.create_genesis_block(test_constants, b"0")

        print(bytes(new_genesis_block))
