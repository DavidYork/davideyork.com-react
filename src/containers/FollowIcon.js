import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-static'

const FollowIconStyles = styled.span`
  i {
    padding-left: 20px;
    color: #000;
  }
  i:hover {
    color: #4183c4; // TODO: Get from semantic-ui-react
  }
`
export default function (props) {
  return (
    <FollowIconStyles>
      <Link to={ props.to }>
        <Icon name={ props.name } size='large' />
      </Link>
    </FollowIconStyles>
  )
}