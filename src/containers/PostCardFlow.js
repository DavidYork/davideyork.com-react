import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import PostCard from './PostCard'

const PostCardFlowStyles = styled.div`
  .flow-content {
    padding: 1rem;
    background-color: #fff;
  }
  .post-card-stylin {
    background-color: #999;
  }
`

export default class PostCardFlow extends Component {

  getCard(post) {
    return (
      <Grid.Column key={ post.route } >
        <PostCard
          className='post-card-stylin'
          href={ '/' + post.route }
          image={ post.image }
          header={ post.title }
          description={ post.oneLiner }
        />
      </Grid.Column>
    );
  }

  getRow(posts) {
    return (
      <Grid stackable columns={ 3 }>
        { posts.map( (post) => this.getCard(post) ) }
      </Grid>
    );
  }

  render() {
    return (
      <PostCardFlowStyles>
        <div className='flow-content'>
          { this.getRow(this.props.posts.slice(10, 13).reverse()) }
          { this.getRow(this.props.posts.slice(9, 12).reverse()) }
          { this.getRow(this.props.posts.slice(6, 9).reverse()) }
          { this.getRow(this.props.posts.slice(3, 6).reverse()) }
          { this.getRow(this.props.posts.slice(0, 1).reverse()) }
        </div>
      </PostCardFlowStyles>
    )
  }
}