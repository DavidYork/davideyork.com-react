import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-static'

export default class PostCard extends Component {
  render() {
    const { href, image, header, description } = this.props;
    return (
      <Link to={ href }>
        <Card
          image={ image }
          link
          header={ header }
          description={ description }
        >
        </Card>
      </Link>
    )
  }
}