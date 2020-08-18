import React, { Component } from 'react';

export default class TaskDetailRow extends Component {
  render() {
    const { leftTitle, rightTitle, leftContent, rightContent } = this.props;
    return (
      <div className='row border-bottom mb-3'>
        <p className='card-text col-md-6 d-flex flex-column'>
          <strong className='card-title'>{leftTitle}</strong>
          {leftContent}
        </p>
        <p className='card-text col-md-6 d-flex flex-column'>
          <strong className='card-title'>{rightTitle}</strong>
          {rightContent}
        </p>
      </div>
    );
  }
}
