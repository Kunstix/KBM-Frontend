import React, { Component } from 'react';
import _ from 'lodash';
import CreateCommentForm from './CreateCommentForm';

export default class CommentsTab extends Component {
  render() {
    const { comments, sequence } = this.props;
    return (
      <div className='h-75'>
        <CreateCommentForm sequence={sequence} />
        <hr />
        <ol className='list-group list-group-striped overflow-auto h-100'>
          {comments &&
            _.sortBy(comments, ['createdAt']).map(comment => (
              <li
                key={comment.id}
                className='list-item d-flex flex-column justify-content-between p-1'
              >
                {comment.content}
                <small className='font-weight-light font-italic align-self-end'>
                  -- by {comment.user.username} at {comment.createdAt}
                </small>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
