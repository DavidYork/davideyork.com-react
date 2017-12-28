import React from 'react'
import { getSiteProps } from 'react-static'

import logoImg from '../logo.png'
import BigBanner from './BigBanner'
import PostCard from './PostCard'

export default getSiteProps((props) => {
  const meta = props.metadata[14]

  return (
    <div>
      <BigBanner
        title='David York'
        description='Personal blog of David York, software engineer and indie game developer.'
      />
      <PostCard
        href={ '/' + meta.route }
        image={ meta.image }
        header={ meta.title }
        description={ meta.oneLiner }
      />
    </div>
  );
})
