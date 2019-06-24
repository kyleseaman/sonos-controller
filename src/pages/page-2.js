import React from 'react';
import queryString from 'query-string';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { setUser } from '../utils/auth';

const parseURLToken = (props) => {
  const queryParams = queryString.parse(props.location.search);
  if (queryParams.data) {
    return JSON.parse(Buffer.from(queryParams.data, 'base64').toString('ascii'));
  }
  return {};
};

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" />
    {setUser(parseURLToken(props))}
    <br/>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
