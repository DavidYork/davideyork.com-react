import React from 'react'
import { getSiteProps } from 'react-static'

import logoImg from '../logo.png'
import BigBanner from './BigBanner'

export default getSiteProps(() => (
  <div>
    <BigBanner
      title='David York'
      description='Personal blog of David York, software engineer and indie game developer.'
    />
  </div>
))
