import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { Button, Container, Header } from 'semantic-ui-react'
//
import Routes from 'react-static-routes'
import Footer from './containers/Footer'
import TopNav from './containers/TopNav'

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
      <TopNav />
      <div className="content">
        <Routes />
      </div>
      <Footer />

      {/* Testing Semantic-UI */}
      <Container>
        <Header as='h1'>Hello world!</Header>

        <Button
          content='Discover docs'
          href='https://react.semantic-ui.com'
          icon='github'
          labelPosition='left'
        />
      </Container>
    </AppStyles>
  </Router>
)
