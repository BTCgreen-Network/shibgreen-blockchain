import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SHIBgreenIcon } from './images/shibgreen.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SHIBgreenIcon} viewBox="0 0 150 58" {...props} />;
}
