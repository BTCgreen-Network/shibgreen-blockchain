import { SyncingStatus } from '@shibgreen/api';
import useWalletState from './useWalletState';

export default function useIsWalletSynced(): boolean {
  const { state, isLoading } = useWalletState();
  const isWalletSynced = !isLoading && state === SyncingStatus.SYNCED;

  return isWalletSynced;
}
