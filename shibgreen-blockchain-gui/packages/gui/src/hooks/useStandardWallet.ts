import { useMemo } from 'react';
import type { Wallet } from '@shibgreen/api';
import { WalletType } from '@shibgreen/api';
import { useGetWalletsQuery, useGetWalletBalanceQuery } from '@shibgreen/api-react';

export default function useStandardWallet(): {
  loading: boolean;
  wallet?: Wallet;
  balance?: number;
} {
  const { data: wallets, isLoading: isLoadingGetWallets } =
    useGetWalletsQuery();
  const { data: balance, isLoading: isLoadingWalletBalance } =
    useGetWalletBalanceQuery({
      walletId: 1,
    });

  const isLoading = isLoadingGetWallets || isLoadingWalletBalance;

  const wallet = useMemo(() => {
    return wallets?.find((item) => item?.type === WalletType.STANDARD_WALLET);
  }, [wallets]);

  return {
    loading: isLoading,
    wallet,
    balance: balance?.confirmedWalletBalance,
  };
}
