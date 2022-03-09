import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'SHIBgreen Proof of Space',
  options: optionsForPlotter(PlotterName.SHIBGREENPOS),
  defaults: defaultsForPlotter(PlotterName.SHIBGREENPOS),
  installInfo: { installed: true },
};
