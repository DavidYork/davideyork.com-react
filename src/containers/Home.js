import React from 'react'
import { getSiteProps } from 'react-static'

import logoImg from '../logo.png'
import BigBanner from './BigBanner'
import PostCardFlow from './PostCardFlow'

export default getSiteProps((props) => {
  return (
    <div>
      <BigBanner
        title='David York'
        description='Personal blog of David York, software engineer and indie game developer.'
      />
      <PostCardFlow posts={ props.metadata }/>
    </div>
  );
})
