import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Grommet, Heading } from 'grommet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { isLoggedIn } from '../utils/auth';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class IndexPage extends Component {
  state = {
    loggedIn: false,
  }

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
    console.log('state', this.state);
    return (
      <Layout>
        <Grommet theme={theme}>
          <div style={{marginTop: 50, textDecorationLine: 'none'}}>
            <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
            {this.state.loggedIn ? 
              <div>
                <Link to="/sonos/"><Heading color='dark-2'>Sonos Control</Heading></Link><br/>
                <Link to="/demo/"><Heading color='dark-2'>AudioClip Demo</Heading></Link><br/>
              </div>
              : <a href="/.netlify/functions/auth"><Heading color='dark-2'>Login</Heading></a>
            }
          </div>
        </Grommet>
      </Layout>
    );
  }
}

export default IndexPage;
