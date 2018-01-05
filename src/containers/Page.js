import React from 'react'
import { Container } from 'semantic-ui-react'
import { getRouteProps } from 'react-static'
import Banner from './Banner'

const contentStyles={
  maxWidth: '800px',
  textAlign: 'justified',
}

export default getRouteProps(( props ) => (
  <div>
    <Banner image={ props.metadata.image }/>
    <Container>
      <div className='content' style={contentStyles}>
        <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
      </div>
    </Container>
  </div>
))