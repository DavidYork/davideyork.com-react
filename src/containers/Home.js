import React from 'react'
import { getSiteProps } from 'react-static'

import logoImg from '../logo.png'
import BigBanner from './BigBanner'

export default getSiteProps(() => (
  <div>
    <BigBanner />
  </div>
))
