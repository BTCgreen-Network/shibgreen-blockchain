import { useGetFarmedAmountQuery } from '@shibgreen/api-react';
import { useCurrencyCode, mojoToSHIBgreenLocaleString, CardSimple, useLocale } from '@shibgreen/core';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export default function FarmCardTotalSHIBgreenFarmed() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalSHIBgreenFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToSHIBgreenLocaleString(farmedAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount, locale, currencyCode]);

  return (
    <CardSimple title={<Trans>Total SHIBgreen Farmed</Trans>} value={totalSHIBgreenFarmed} loading={isLoading} error={error} />
  );
}
