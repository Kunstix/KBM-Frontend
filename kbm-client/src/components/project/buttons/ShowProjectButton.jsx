import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowProjectButton extends Component {
  render() {
    return (
      <Link
        className='action far fa-eye pr-1'
        to={`/board/${this.props.projectID}`}
      ></Link>
    );
  }
}

export default ShowProjectButton;
