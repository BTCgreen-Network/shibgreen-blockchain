import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { byte_to_shibgreen } from '../../../util/shibgreen';
import useCurrencyCode from '../../../hooks/useCurrencyCode';

export default function FarmCardTotalSHIBgreenFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totalSHIBgreenFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return byte_to_shibgreen(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total SHIBgreen Farmed</Trans>}
      value={totalSHIBgreenFarmed}
      loading={loading}
    />
  );
}
