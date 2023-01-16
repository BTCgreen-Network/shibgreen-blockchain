import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import shibgreenFormatter from './shibgreenFormatter';

export default function mojoToCATLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return shibgreenFormatter(mojo, Unit.MOJO).to(Unit.CAT).toLocaleString(locale);
}
