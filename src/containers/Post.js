import React from 'react'
import { getRouteProps } from 'react-static'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import Banner from './Banner'
import TagList from './TagList'
import ShareList from './ShareList'

const PostStyles = styled.div`
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
    padding: 1rem;
  }
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
    height: 360px;
  }
`

export default getRouteProps(( props ) => (
  <PostStyles>
    <Banner />
    <Container content>
      <div className='content'>
        <h1>{ props.metadata.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
        <TagList tags={ props.metadata.tags } />
        <ShareList />
      </div>
    </Container>
  </PostStyles>
))