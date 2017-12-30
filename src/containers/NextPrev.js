import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Button, Icon, Image, Grid, Column } from 'semantic-ui-react'
import { Link } from 'react-static'

const NextPrevStyles = styled.div`
  .grid-margin {
    margin-bottom: 1rem;
    margin-top: 0rem;
  }
`

export default class NextPrev extends Component {
  showCard(meta) {
    return (
      <Link to={ meta.route }>
        <Card link>
          <Image src={ meta.image } />
          <Card.Content>
            <Card.Header>
              { meta.title }
            </Card.Header>
            <Card.Description>
              { meta.oneLiner }
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>
    )
  }

  render() {
    return (
      <NextPrevStyles>
        <Grid className='grid-margin' columns={ 3 }>
          <Grid.Column floated='left' >
            { this.showCard(this.props.prev) }
          </Grid.Column>
          <Grid.Column floated='right' >
            { this.showCard(this.props.next)}
          </Grid.Column>
        </Grid>
      </NextPrevStyles>
    )
  }
}
