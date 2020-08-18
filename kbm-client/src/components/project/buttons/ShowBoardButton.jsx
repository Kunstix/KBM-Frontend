import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowBoardButton extends Component {
  render() {
    return (
      <Link
        className='action fa fa-flag-checkered pr-1'
        to={`/project/${this.props.projectID}`}
      ></Link>
    );
  }
}

export default ShowBoardButton;
