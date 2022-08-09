import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function catToMojo(cat: string | number | BigNumber): BigNumber {
  return shibgreenFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toBigNumber();
}