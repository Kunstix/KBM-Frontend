import React, { Component } from 'react';

export default class TricedDetailsRow extends Component {
  render() {
    const {
      firstTitle,
      firstContent,
      secondTitle,
      secondContent,
      thirdTitle,
      thirdContent
    } = this.props;
    return (
      <div className='row border-bottom mb-3'>
        <p className='card-text col-md-2 d-flex flex-column'>
          <strong className='card-title'>{firstTitle}</strong>
          {firstContent}
        </p>
        <p className='card-text col-md-8 d-flex flex-column'>
          <strong className='card-title'>{secondTitle}</strong>
          {secondContent}
        </p>
        <p className='card-text col-md-2 d-flex flex-column'>
          <strong className='card-title'>{thirdTitle}</strong>
          {thirdContent}
        </p>
      </div>
    );
  }
}
