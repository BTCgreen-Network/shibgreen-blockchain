import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToSHIBgreenLocaleString, CardSimple } from '@shibgreen/core';
import { useGetFarmedAmountQuery } from '@shibgreen/api-react';

export default function FarmCardBlockRewards() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmerRewardAmount = data?.farmerRewardAmount;
  const poolRewardAmount = data?.poolRewardAmount;

  const blockRewards = useMemo(() => {
    if (farmerRewardAmount !== undefined && poolRewardAmount !== undefined) {
      const val =
        BigInt(farmerRewardAmount.toString()) +
        BigInt(poolRewardAmount.toString());
      return (
        <>
          {mojoToSHIBgreenLocaleString(val)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmerRewardAmount, poolRewardAmount]);

  return (
    <CardSimple
      title={<Trans>Block Rewards</Trans>}
      description={<Trans>Without fees</Trans>}
      value={blockRewards}
      loading={isLoading}
      error={error}
    />
  );
}
