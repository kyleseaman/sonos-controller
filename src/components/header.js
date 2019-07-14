import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Heading } from 'grommet';

import AppBar from './appBar';

const Header = () => (
  <AppBar>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <Heading level='3' margin='none'>Sonos API Demo</Heading>
    </Link>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
