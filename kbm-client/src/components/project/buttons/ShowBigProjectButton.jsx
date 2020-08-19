import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowBigProjectButton extends Component {
  render() {
    return (
      <Link
        className='btn btn-light pr-1 mr-3'
        to={`/project/${this.props.projectID}`}
      >
        <i className='fa far fa-eye pr-1' />
        To Project
      </Link>
    );
  }
}

export default ShowBigProjectButton;
