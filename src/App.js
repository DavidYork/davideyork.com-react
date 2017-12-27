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

  h1 {
    font-weight: bold;
    font-size: 42px;
    font-family: "Roboto Slab", "Titillium Web", sans-serif;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  * {
    font-family: 'Proxima Nova','Helvetica Neue','Helvetica',sans-serif;
  }
  .content {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
    height: 360px;
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
