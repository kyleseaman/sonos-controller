import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';
import { Button, Grommet, Heading } from 'grommet';

import Layout from '../components/layout';
import { isLoggedIn } from '../utils/auth';
import AppTheme from '../utils/theme';
import SonosAPI from './sonos';

class IndexPage extends Component {
  state = {
    loggedIn: false,
  };

  async componentDidMount() {
    try {
      const loggedIn = await isLoggedIn();
      console.log('RES', loggedIn);
      this.setState({ loggedIn });
    } catch (error) {
      console.log('LOGGED IN ERROR', error);
    }
  }

  render() {
    return (
      <Grommet theme={AppTheme} themeMode="dark" full>
        {this.state.loggedIn ? (
          <SonosAPI />
        ) : (
          <a href="/.netlify/functions/auth">
            <Heading color="dark-2">Login</Heading>
          </a>
        )}
      </Grommet>
    );
  }
}

export default IndexPage;
