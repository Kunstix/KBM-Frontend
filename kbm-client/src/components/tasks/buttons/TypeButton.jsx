import React, { Component } from 'react';

class TypeButton extends Component {
  render() {
    return this.props.type === 'BUG' ? (
      <i className='fas fa-bug'></i>
    ) : (
      <i className='fas fa-lightbulb'></i>
    );
  }
}

export default TypeButton;
