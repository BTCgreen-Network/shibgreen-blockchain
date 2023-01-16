import type { Wallet } from '@shibgreen/api';

import findCATWalletByAssetId from './findCATWalletByAssetId';

export default function getUnknownCATs(wallets: Wallet[], assetIds: string[]): string[] {
  return assetIds.filter((assetId) => !findCATWalletByAssetId(wallets, assetId));
}
