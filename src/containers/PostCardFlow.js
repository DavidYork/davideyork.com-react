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
  render() {
    console.log(this.props);
    const meta = this.props.posts[14];
    return (
      <PostCardFlowStyles>
        <div className='flow-content'>
          <Grid stackable columns={ 3 }>
            <Grid.Column>
              <PostCard
                className='post-card-stylin'
                href={ '/' + this.props.posts[14].route }
                image={ this.props.posts[14].image }
                header={ this.props.posts[14].title }
                description={ this.props.posts[14].oneLiner }
              />
            </Grid.Column>
            <Grid.Column>
              <PostCard
                href={ '/' + this.props.posts[13].route }
                image={ this.props.posts[13].image }
                header={ this.props.posts[13].title }
                description={ this.props.posts[13].oneLiner }
              />
            </Grid.Column>
            <Grid.Column>
              <PostCard
                href={ '/' + this.props.posts[12].route }
                image={ this.props.posts[12].image }
                header={ this.props.posts[12].title }
                description={ this.props.posts[12].oneLiner }
              />
            </Grid.Column>
          </Grid>
          <Grid stackable columns={ 3 }>
            <Grid.Column>
              <PostCard
                href={ '/' + this.props.posts[11].route }
                image={ this.props.posts[11].image }
                header={ this.props.posts[11].title }
                description={ this.props.posts[11].oneLiner }
              />
            </Grid.Column>
            <Grid.Column>
              <PostCard
                href={ '/' + this.props.posts[10].route }
                image={ this.props.posts[10].image }
                header={ this.props.posts[10].title }
                description={ this.props.posts[10].oneLiner }
              />
            </Grid.Column>
            <Grid.Column>
              <PostCard
                href={ '/' + this.props.posts[9].route }
                image={ this.props.posts[9].image }
                header={ this.props.posts[9].title }
                description={ this.props.posts[9].oneLiner }
              />
            </Grid.Column>
          </Grid>
        </div>
      </PostCardFlowStyles>
    )
  }
}