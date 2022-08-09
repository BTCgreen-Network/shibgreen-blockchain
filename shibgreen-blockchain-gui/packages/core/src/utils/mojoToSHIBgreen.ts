import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function mojoToSHIBgreen(mojo: string | number | BigNumber): BigNumber {
  return shibgreenFormatter(mojo, Unit.MOJO)
    .to(Unit.SHIBGREEN)
    .toBigNumber();
}