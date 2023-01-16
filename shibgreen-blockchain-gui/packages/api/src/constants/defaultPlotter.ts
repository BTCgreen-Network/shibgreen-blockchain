import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';
import PlotterName from './PlotterName';

export default {
  displayName: 'SHIBgreen Proof of Space',
  options: optionsForPlotter(PlotterName.SHIBGREENPOS),
  defaults: defaultsForPlotter(PlotterName.SHIBGREENPOS),
  installInfo: { installed: true },
};
