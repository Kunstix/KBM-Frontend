import React, { Component } from 'react';
import classNames from 'classnames';

class PriorityButton extends Component {
  render() {
    const { priority } = this.props;
    return (
      <i
        className={classNames('fas fa-circle', {
          'text-success': priority === 'LOW',
          'text-warning': priority === 'MEDIUM',
          'text-danger': priority === 'HIGH'
        })}
      ></i>
    );
  }
}

export default PriorityButton;
