import { useMemo } from 'react';
import type { Wallet } from '@shibgreen/api';
import { WalletType } from '@shibgreen/api';
import BigNumber from 'bignumber.js';
import { mojoToCATLocaleString, mojoToSHIBgreenLocaleString, useLocale } from '@shibgreen/core';

export default function useWalletHumanValue(wallet: Wallet, value?: string | number | BigNumber, unit?: string): string {
  const [locale] = useLocale();
  
  return useMemo(() => {
    if (wallet && value !== undefined) {
      const localisedValue = wallet.type === WalletType.CAT
        ? mojoToCATLocaleString(value, locale)
        : mojoToSHIBgreenLocaleString(value, locale);

      return `${localisedValue} ${unit}`;
    }

    return '';
  }, [wallet, value, unit, locale]);
}
