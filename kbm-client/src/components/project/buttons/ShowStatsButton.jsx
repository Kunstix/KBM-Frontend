import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowStatsButton extends Component {
  render() {
    return (
      <Link
        className='icon-action fas fa-chart-line pr-1'
        to={`/dashboard/${this.props.projectID}`}
      ></Link>
    );
  }
}

export default ShowStatsButton;
