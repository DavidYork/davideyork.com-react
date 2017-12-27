import React from 'react'
import { getRouteProps } from 'react-static'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import Banner from './Banner'
import TagList from './TagList'
import ShareList from './ShareList'

const PostStyles = styled.div`
  h1 {
    // margin-top: 50px;
    // margin-bottom: 30px;
  }
`

export default getRouteProps(( props ) => (
  <PostStyles>
    <Banner />
    <Container >
      <div className='content'>
        <h1>{ props.metadata.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
        <TagList tags={ props.metadata.tags } />
        <ShareList />
      </div>
    </Container>
  </PostStyles>
))