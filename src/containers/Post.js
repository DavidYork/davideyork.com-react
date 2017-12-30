import React from 'react'
import { getRouteProps } from 'react-static'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import Banner from './Banner'
import TagList from './TagList'
import ShareList from './ShareList'
import NextPrev from './NextPrev'

const PostStyles = styled.div`
  .img-group {
    width:100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`

export default getRouteProps(( props ) => {
  return (
    <PostStyles>
      <Banner image={ props.metadata.image }/>
      <Container >
        <div className='content'>
          <h1>{ props.metadata.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
          <TagList tags={ props.metadata.tags } />
          <ShareList />
        </div>
        <NextPrev
          prev={ props.prev }
          next={ props.next }
        />
      </Container>
    </PostStyles>
  )
})