import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-static'

const PostCardStyles = styled.div`
  .button-styling {
    margin-top: 1rem;
  }
`

export default class PostCard extends Component {
  render() {
    const { href, image, header, description } = this.props;
    return (
      <PostCardStyles>
        <Link to={ href }>
          <Card fluid link >
            <Image src={ image } />
            <Card.Content>
              <Card.Header>
                { header }
              </Card.Header>
              <Card.Description>
                { description }
              </Card.Description>
                <Button
                  className='button-styling'
                  color='grey'
                  fluid
                >Read article</Button>
            </Card.Content>
          </Card>
        </Link>
      </PostCardStyles>
    )
  }
}