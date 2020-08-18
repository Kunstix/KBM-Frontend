import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewTaskButton extends Component {
  render() {
    return (
      <Link
        className='far fa-eye pr-1'
        to={`/${this.props.projectID}/${this.props.sequence}`}
      ></Link>
    );
  }
}

export default ViewTaskButton;
