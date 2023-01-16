import { SHIBgreen } from '@shibgreen/icons';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledSHIBgreen = styled(SHIBgreen)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledSHIBgreen />
    </Box>
  );
}
