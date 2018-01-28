import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-static'
import style from '../lib/style'

const FollowIconStyles = styled.span`
  i {
    padding-left: 20px;
    color: #000;
  }
  i:hover {
    color: ${style.hoverColor};
  }
  span {
    float:right;
  }
`
export default function (props) {
  return (
    <FollowIconStyles>
      <Link to={ props.to } type={ props.type } >
        <Icon name={ props.name } size='large' />
      </Link>
    </FollowIconStyles>
  )
}