import React, { Component } from 'react';

export default class PersonalStatisticsViewHead extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className='d-flex justify-content-between align-items-center pr-3'>
        <h3 className='text-primary font-weight-bold'>
          Dashboard of {username}
        </h3>
      </div>
    );
  }
}
