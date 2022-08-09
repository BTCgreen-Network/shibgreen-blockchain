import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function shibgreenToMojo(shibgreen: string | number | BigNumber): BigNumber {
  return shibgreenFormatter(shibgreen, Unit.SHIBGREEN)
    .to(Unit.MOJO)
    .toBigNumber();
}