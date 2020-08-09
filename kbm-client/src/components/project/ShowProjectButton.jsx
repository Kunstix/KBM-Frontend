import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowProjectButton extends Component {
  render() {
    return (
      <Link to={`/showProject/${this.props.projectID}`}>
        <div className='btn btn-success w-100'>
          <span className='fa fa-flag-checkered pr-1' />
          <span>Project Board</span>
        </div>
      </Link>
    );
  }
}

export default ShowProjectButton;
