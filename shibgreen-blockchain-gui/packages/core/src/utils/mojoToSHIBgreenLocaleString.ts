import Big from 'big.js';
import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function mojoToSHIBgreenLocaleString(mojo: string | number | Big) {
  return shibgreenFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.SHIBGREEN)
    .toLocaleString();
}