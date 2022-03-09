import Big from 'big.js';
import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return shibgreenFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}