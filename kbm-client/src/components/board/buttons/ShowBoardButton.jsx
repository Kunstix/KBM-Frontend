import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowBoardButton extends Component {
  render() {
    const { projectID } = this.props;
    return (
      <Link to={`/board/${projectID}`} className='btn btn-light'>
        To Project Board
      </Link>
    );
  }
}
