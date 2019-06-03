import React from 'react';
import queryString from 'query-string';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const parseURLToken = (props) => {
  const queryParams = queryString.parse(props.location.search);
  if (queryParams.data) {
    return Buffer.from(queryParams.data, 'base64').toString('ascii');
  }
  return 'no data';
};

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" />
    <p>{console.log(props)}</p>
    {parseURLToken(props)}
    <br/>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
