import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout'

const RedTitle = styled.div`
  color: red;
  font-size: 20px;
`;

const IndexPage = () => (
  <Layout>
    <RedTitle>Hi people</RedTitle>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
