import React from 'react';
import { Box } from 'grommet';

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="background-back"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="none"
    {...props}
  />
);

export default AppBar;
