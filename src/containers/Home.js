import React from 'react'
import { getSiteProps } from 'react-static'

import logoImg from '../logo.png'
import BigBanner from './BigBanner'
import PostCard from './PostCard'

export default getSiteProps((props) => (
  <div>
    <BigBanner
      title='David York'
      description='Personal blog of David York, software engineer and indie game developer.'
    />
    <PostCard metadata={ props.metadata[0] } />
  </div>
))
