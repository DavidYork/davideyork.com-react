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
  static numColumns = 3;

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
      <Grid stackable columns={ PostCardFlow.numColumns } key={ 'col-' + posts[0].route }>
        { posts.map( (post) => this.getCard(post) ) }
      </Grid>
    );
  }

  render() {
    const posts = this.props.posts;
    var postSets = [];
    for (var i = 0; i < posts.length; i+=PostCardFlow.numColumns) {
      postSets.push(posts.slice(i, i+3));
    }

    return (
      <PostCardFlowStyles>
        <div className='flow-content'>
          { postSets.map(x => this.getRow(x)) }
        </div>
      </PostCardFlowStyles>
    )
  }
}