import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowBigBoardButton extends Component {
  render() {
    return (
      <Link
        className='btn btn-light pr-1 mr-1'
        to={`/board/${this.props.projectID}`}
      >
        <i className='fa fa-flag-checkered pr-1' /> To Board
      </Link>
    );
  }
}

export default ShowBigBoardButton;
