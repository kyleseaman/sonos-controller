import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';
import { Button, Grommet, Heading } from 'grommet';

import Layout from '../components/layout';
import { isLoggedIn } from '../utils/auth';
import AppTheme from '../utils/theme';

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
        <Layout>
          <div style={{ marginTop: 50, textDecorationLine: 'none' }}>
            {this.state.loggedIn ? (
              <div>
                <Button
                  onClick={() => navigate('/sonos/')}
                  label="Sonos Control"
                  size="large"
                />
                <Button
                  onClick={() => navigate('/demo/')}
                  label="AudioClip Demo"
                  size="large"
                />
              </div>
            ) : (
              <a href="/.netlify/functions/auth">
                <Heading color="dark-2">Login</Heading>
              </a>
            )}
          </div>
        </Layout>
      </Grommet>
    );
  }
}

export default IndexPage;
