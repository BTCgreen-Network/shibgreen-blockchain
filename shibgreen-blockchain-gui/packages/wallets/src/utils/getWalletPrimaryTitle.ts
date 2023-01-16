import { WalletType } from '@shibgreen/api';
import type { Wallet } from '@shibgreen/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'SHIBgreen';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
