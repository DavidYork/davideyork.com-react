import React from 'react'
import { Container } from 'semantic-ui-react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'
import Banner from './Banner'

const PageStyles = styled.div`
`

const contentStyles={
  maxWidth: '800px',
  textAlign: 'justified',
}

export default getRouteProps(( props ) => (
  <PageStyles>
    <Banner />
    <Container>
      <div className='content' style={contentStyles}>
        <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
      </div>
    </Container>
  </PageStyles>
))