import React, { Component } from 'react';

export default class AssignRoleButton extends Component {
  render() {
    return (
      <input
        type='submit'
        className='btn btn-info btn-block'
        value='Assign Role'
      />
    );
  }
}
