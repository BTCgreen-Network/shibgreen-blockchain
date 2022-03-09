import Big from 'big.js';
import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function shibgreenToMojo(shibgreen: string | number | Big): number {
  return shibgreenFormatter(shibgreen, Unit.SHIBGREEN)
    .to(Unit.MOJO)
    .toNumber();
}