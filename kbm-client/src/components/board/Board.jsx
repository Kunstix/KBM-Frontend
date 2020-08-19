import React, { Component } from 'react';
import Backlog from './Backlog';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBacklog } from '../../actions/backlogActions';
import BoardHead from './BoardHead';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  componentDidMount() {
    const { projectID } = this.props.match.params;
    this.props.getBacklog(projectID);
  }

  renderBacklog() {
    const { tasks } = this.props.backlog;
    const { errors } = this.state;

    if (tasks.length < 1) {
      if (errors.projectNotFound) {
        return (
          <div className='alert alert-danger text-center' role='alert'>
            {errors.projectNotFound}
          </div>
        );
      } else {
        return (
          <div className='alert alert-info text-center' role='alert'>
            No project Tasks on this board
          </div>
        );
      }
    } else {
      return <Backlog tasks={tasks} />;
    }
  }

  render() {
    const { projectID } = this.props.match.params;

    return (
      <div className='container-fluid'>
        <BoardHead projectID={projectID} />
        <hr />
        {this.renderBacklog()}
      </div>
    );
  }
}

Board.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog,
  errors: state.errors
});

export default connect(mapStateToProps, { getBacklog })(Board);
