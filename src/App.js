import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'

import Routes from 'react-static-routes'
import Footer from './containers/Footer'
import TopNav from './containers/TopNav'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
    padding: 0;
    color: #262626;
  }
`

export default () => (
  <Router>
    <div>
      <TopNav />
      <Routes />
      <Footer />
    </div>
  </Router>
)
