import React, { Component } from 'react'
import styled from 'styled-components'

const BannerStyles = styled.div`
  .cover-image {
    min-height: 240px;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
  }
  .shadow {
    // background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .95));
    min-height: 240px;
  }
`

export default class Banner extends Component {
  render() {
    const coverImageStyle = {
      backgroundImage: 'url(http://davideyork.com/content/images/2016/10/map-decorated-big-1-5.png)',
    }

    return (
      <BannerStyles>
        <div className="cover-image" style={ coverImageStyle }>
          <div className="shadow" />
        </div>
      </BannerStyles>
    )
  }
}