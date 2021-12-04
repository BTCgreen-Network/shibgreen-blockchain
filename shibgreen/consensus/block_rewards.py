from shibgreen.util.ints import uint32, uint64

# 1 SHIBgreen coin = 1,000,000,000,0 = 1 trillion byte.
_byte_per_shibgreen = 1000
_blocks_per_year = 1681920  # 32 * 6 * 24 * 365


def calculate_pool_reward(height: uint32) -> uint64:
    """
    Returns the pool reward at a certain block height. The pool earns 7/8 of the reward in each block. If the farmer
    is solo farming, they act as the pool, and therefore earn the entire block reward.
    These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """

    if height == 0:
        return uint64(int((7 / 8) * 100000000 * _byte_per_shibgreen))
    elif height < 0.1 * _blocks_per_year:
        return uint64(int((7 / 8) * 100000 * _byte_per_shibgreen))
    elif height < 0.5 * _blocks_per_year:
        return uint64(int((7 / 8) * 20000 * _byte_per_shibgreen))
    elif height < 1 * _blocks_per_year:
        return uint64(int((7 / 8) * 7500 * _byte_per_shibgreen))
    elif height < 6 * _blocks_per_year:
        return uint64(int((7 / 8) * 2000 * _byte_per_shibgreen))
    else:
        return uint64(int((7 / 8) * 200 * _byte_per_shibgreen))


def calculate_base_farmer_reward(height: uint32) -> uint64:
    """
    Returns the base farmer reward at a certain block height.
    The base fee reward is 1/8 of total block reward

    Returns the coinbase reward at a certain block height. These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """
    if height == 0:
        return uint64(int((1 / 8) * 100000000 * _byte_per_shibgreen))
    elif height < 0.1 * _blocks_per_year:
        return uint64(int((1 / 8) * 100000 * _byte_per_shibgreen))
    elif height < 0.5 * _blocks_per_year:
        return uint64(int((1 / 8) * 20000 * _byte_per_shibgreen))
    elif height < 1 * _blocks_per_year:
        return uint64(int((1 / 8) * 7500 * _byte_per_shibgreen))
    elif height < 6 * _blocks_per_year:
        return uint64(int((1 / 8) * 2000 * _byte_per_shibgreen))
    else:
        return uint64(int((1 / 8) * 200 * _byte_per_shibgreen))
