import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

export default class PostCard extends Component {
  render() {
    const metadata = this.props.metadata;
    return (
      <Card
        image={ metadata.cardImage }
        header={ metadata.title }
        description={ metadata.oneLiner }
      />
    )
  }
}