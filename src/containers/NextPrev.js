import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Button, Icon, Image, Grid, Column } from 'semantic-ui-react'
import { Link } from 'react-static'

const NextPrevStyles = styled.div`
  .grid-margin {
    margin-bottom: 1rem;
    margin-top: 3rem;
  }
`

export default class NextPrev extends Component {
  showCard(meta, label) {
    return (
      <Link to={ '/' + meta.route } >
        <Card link fluid >
          <Image src={ meta.image } />
          <Card.Content>
            <Card.Header>
              { meta.title }
            </Card.Header>
            <Card.Description>
              { meta.oneLiner }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              { label }
            </a>
          </Card.Content>
        </Card>
      </Link>
    )
  }

  render() {
    return (
      <NextPrevStyles>
        <Grid className='grid-margin' columns={ 2 } >
          <Grid.Column floated='left' >
            { this.showCard(this.props.prev, 'previous article') }
          </Grid.Column>
          <Grid.Column floated='right' >
            { this.showCard(this.props.next, 'next article')}
          </Grid.Column>
        </Grid>
      </NextPrevStyles>
    )
  }
}
