import React from 'react'
import { getRouteProps } from 'react-static'
import BigBanner from './BigBanner'
import PostCardFlow from './PostCardFlow'

export default getRouteProps(( props ) => {
    return (
      <div>
        <BigBanner
          title={ props.tag.title }
          description={ props.tag.description }
          image={ props.tag.image }
        />
        <div className='massive-container'>
          <PostCardFlow posts={ props.posts }/>
        </div>
      </div>
    )
  }
)