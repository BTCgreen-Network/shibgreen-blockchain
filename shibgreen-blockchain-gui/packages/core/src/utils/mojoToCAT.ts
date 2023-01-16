import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function mojoToCAT(mojo: string | number | BigNumber): BigNumber {
  return shibgreenFormatter(mojo, Unit.MOJO).to(Unit.CAT).toBigNumber();
}
