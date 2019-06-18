import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { isLoggedIn } from '../utils/auth';

class IndexPage extends Component {
  state = {
    loggedIn: false,
  }

  async componentDidMount() {
    try {
      const loggedIn = await isLoggedIn();
      console.log('RES', loggedIn);
      this.setState({ loggedIn: false });
    } catch (error) {
      console.log('LOGGED IN ERROR', error);
    }
  }

  render() {
    console.log('state', this.state);
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <Link to="/sonos/">Sonos API</Link><br/>
        <Link to="/page-2/">Go to page 2</Link><br/>
        <a href="/.netlify/functions/auth">LOGIN</a>
      </Layout>
    );
  }
}

export default IndexPage;
