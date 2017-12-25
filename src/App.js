import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//
import Routes from 'react-static-routes'
import Footer from './containers/Footer'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`

export default () => (
  <Router>
    <AppStyles>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tag/indie">Indie</Link>
        <Link to="/tag/procedural-generation">Procedural Generation</Link>
        <Link to="/tag/work">Work</Link>
        <Link to="/tag/gamedev">Gamedev</Link>
        <Link to="/about">Who am I?</Link>
        <Link to="/test-blog">Test Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </AppStyles>
  </Router>
)
