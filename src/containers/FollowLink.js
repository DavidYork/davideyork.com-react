import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-static'

const FollowLinkStyles = styled.div`
  p {
    line-height: 2em;
    padding-bottom:10px;
  }
  a {
    color: #666;
  }
  a:hover {
    color: #4183c4; // TODO: Get from semantic-ui-react
  }
  .link-text {
    font-size: 20px;
    padding-left: 30px;
  }
`

export default class FollowLink extends Component {
  render() {
    return (
      <FollowLinkStyles>
        <p>
          <Link to={ this.props.to } type={ this.props.type } >
            <Icon link name={ this.props.name } size='huge' />
            <span className='link-text'>{ this.props.text }</span>
          </Link>
        </p>
      </FollowLinkStyles>
    )
  }
}