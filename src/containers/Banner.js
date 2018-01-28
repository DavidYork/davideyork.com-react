import React, { Component } from 'react'
import styled from 'styled-components'
import Env from '../../env'

const BannerStyles = styled.div`
  .cover-image {
    min-height: 240px;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
  }
  .shadow {
    min-height: 240px;
  }
`

export default class Banner extends Component {

  static defaultProps = {
    image: Env.siteRoot + '/content/images/map-decorated-big-1-5.png'
  };

  render() {
    const coverImageStyle = {
      backgroundImage: 'url(' + this.props.image + ')'
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