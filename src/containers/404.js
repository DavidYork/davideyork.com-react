import React from 'react'
import BigBanner from './BigBanner'

export default () => (
  <div>
    <BigBanner
      hideFace
      image='/content/images/404.jpg'
      title='Page not found'
      description="404 - Oh no's! We couldn't find that page :("
      link='/'
      linkText='Visit homepage'
    />
  </div>
)
