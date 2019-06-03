import React from 'react';
import queryString from 'query-string';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" />
    <p>{console.log(props)}</p>
    <p>{Buffer.from(queryString.parse(props.location.search).data, 'base64').toString('ascii')}</p>
    <p>{JSON.stringify(queryString.parse(props.location.search))}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
