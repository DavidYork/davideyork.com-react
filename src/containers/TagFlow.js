import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'
import BigBanner from './BigBanner'
import PostCardFlow from './PostCardFlow'

const TagFlowStyles = styled.div`
`

// export default class TagFlow extends Component {
export default getRouteProps(( props ) => {
  // render(props) {
    console.log(props);
    return (
      <TagFlowStyles>
        <BigBanner
          title={ props.tag.title }
          description={ props.tag.description }
          image={ props.tag.image }
        />
        <div className='massive-container'>
          <PostCardFlow posts={ props.posts }/>
        </div>
      </TagFlowStyles>
    )
  }
)