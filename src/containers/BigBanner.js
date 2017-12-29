import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Image } from 'semantic-ui-react'
import { Link } from 'react-static'

const BannerStyles = styled.div`
  .banner {
    color: #fff;
    font-size: 25px;
    line-height: 1.4em;
    text-align: center;
    text-shadow: 1px 2px 5px rgba(0,0,0,.95);
  }
  .banner-title {
    font-family: "Roboto Slab", "Titillium Web", "Source Sans Pro", sans-serif;
    font-weight: 700;
    font-size: 40px;
    text-transform: capitalize;
  }
  .banner-button {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  .banner-description {
    line-height: 2em;
  }
  .cover-image {
    min-height: 400px;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
  }
  .my-face {
    background-color: #fff;
    margin-bottom: 55px;
    margin-top: 25px;
    padding: 5px;
  }
  .shadow {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .85));
    min-height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .invisible {
    visibility: hidden;
  }
`

export default class BigBanner extends Component {

  static defaultProps = {
    title: 'David York',
    description: 'Personal blog of David York, software engineer and indie game developer.',
    image: 'http://davideyork.com/content/images/2016/10/map-decorated-big-1-5.png',
    hideFace: false,
    link: undefined,
    linkText: ''
  };

  getFace = (hide) => {
    const className = (hide) ? 'my-face invisible' : 'my-face';
    const size = (hide) ? 'tiny' : 'small';
    return (
      <Link to="/about">
        <Image className={ className } size={ size } circular centered src="http://www.gravatar.com/avatar/a746e76a4d3ec064b817b41b8d29d889?s=250&amp;d=mm&amp;r=x" />
      </Link>
    );
  }

  getLink = (link, linkText) => {
    return(
      <Link to={ link }>
        <Button className='banner-button'>{ linkText }</Button>
      </Link>
    )
  }

  render() {
    const coverImageStyle = {
      backgroundImage: 'url(' + this.props.image + ')',
    }

    return (
      <BannerStyles>
        <div className="cover-image" style={ coverImageStyle } >
          <div className="shadow">
            { this.getFace( this.props.hideFace ) }
            <div className="banner">
              <div className="banner-title">{ this.props.title }</div>
              <div className="banner-description">{ this.props.description }</div>
              {
                (this.props.link)
                  ? this.getLink(this.props.link, this.props.linkText)
                  : ''
              }
            </div>
          </div>
        </div>
      </BannerStyles>
    )
  }
}
