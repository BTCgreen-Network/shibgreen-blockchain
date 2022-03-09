import Big from 'big.js';
import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function mojoToSHIBgreen(mojo: string | number | Big): number {
  return shibgreenFormatter(mojo, Unit.MOJO)
    .to(Unit.SHIBGREEN)
    .toNumber();
}