import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowBoardButton extends Component {
  render() {
    const { text } = this.props;

    return (
      <Link
        className='icon-action fa fa-flag-checkered pr-1'
        to={`/board/${this.props.projectID}`}
      >
        {text && text}
      </Link>
    );
  }
}

export default ShowBoardButton;
