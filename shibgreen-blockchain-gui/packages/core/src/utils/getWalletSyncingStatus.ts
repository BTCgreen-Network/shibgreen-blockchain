import { SyncingStatus } from '@shibgreen/api';

export default function getWalletSyncingStatus(walletState) {
  const { syncing, synced } = walletState;

  if (syncing) {
    return SyncingStatus.SYNCING;
  }
  if (synced) {
    return SyncingStatus.SYNCED;
  }

  return SyncingStatus.NOT_SYNCED;
}
