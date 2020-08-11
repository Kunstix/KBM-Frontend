import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Backlog from './Backlog';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBacklog } from '../../actions/backlogActions';

class Board extends Component {
  componentDidMount() {
    const { projectID } = this.props.match.params;
    this.props.getBacklog(projectID);
  }

  render() {
    const { projectID } = this.props.match.params;
    const { tasks } = this.props.backlog;
    return (
      <div className='container-fluid'>
        <Link
          to={`/createTask/${projectID}`}
          href='#'
          className='btn btn-primary mb-3'
        >
          <span className='fas fa-plus-circle' />
          <span> Create Task</span>
        </Link>
        <br />
        <hr />
        <Backlog tasks={tasks} />
      </div>
    );
  }
}

Board.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog
});

export default connect(mapStateToProps, { getBacklog })(Board);
