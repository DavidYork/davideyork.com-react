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

  .outer {
    background-color: #fff;
  }
`

export default getRouteProps(( props ) => {
  return (
    <PostStyles>
      <div className='outer'>
        <Banner image={ props.metadata.image }/>
        <Container>
          <div className='content'>
            <h1>{ props.metadata.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
            <TagList tags={ props.metadata.tags } />
            <ShareList />
            <NextPrev
              prev={ props.prev }
              next={ props.next }
            />
          </div>
        </Container>
      </div>
    </PostStyles>
  )
})
