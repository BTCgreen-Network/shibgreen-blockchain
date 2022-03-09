import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToSHIBgreenLocaleString, CardSimple } from '@shibgreen/core';
import { useGetFarmedAmountQuery } from '@shibgreen/api-react';

export default function FarmCardTotalSHIBgreenFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalSHIBgreenFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToSHIBgreenLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total SHIBgreen Farmed</Trans>}
      value={totalSHIBgreenFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
