import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowProjectButton extends Component {
  render() {
    const { text } = this.props;
    return (
      <Link
        className='icon-action far fa-eye pr-1'
        to={`/project/${this.props.projectID}`}
      >
        {text && text}
      </Link>
    );
  }
}

export default ShowProjectButton;
