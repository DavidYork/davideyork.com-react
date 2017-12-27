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
    margin-top: 50px;
    margin-bottom: 30px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Slab", "Titillium Web", sans-serif;
  }
  h3 {
    font-size: 20px;
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
    margin-bottom: 3.5rem;
  }
  .content {
    max-width:800px;
    margin: auto;
  }
  li {
    line-height: 2em;
  }
  p {
    line-height: 1.8em;
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
  }
  .img-inline-left {
      max-width: 50%;
      padding-right: 5px;
  }
  .img-inline-right {
      max-width: 50%;
      padding-left: 5px;
  }
  .img-inline-1-3 {
      max-width: 33%;
      padding-right: 4px;
  }
  .img-inline-2-3 {
      max-width: 33%;
      padding-left: 2px;
      padding-right: 2px;
  }
  .img-inline-3-3 {
      max-width: 33%;
      padding-left: 4px;
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
