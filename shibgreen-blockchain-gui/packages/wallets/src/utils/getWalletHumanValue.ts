import type { Wallet } from '@shibgreen/api';
import { WalletType } from '@shibgreen/api';
import { mojoToCATLocaleString, mojoToSHIBgreenLocaleString } from '@shibgreen/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToSHIBgreenLocaleString(value);
}
