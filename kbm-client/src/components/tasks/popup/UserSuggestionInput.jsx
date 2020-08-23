import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../../actions/userActions';
import { assignUserToTask } from '../../../actions/backlogActions';
import {
  assignUserToProject,
  getUsersByProject
} from '../../../actions/projectActions';
import Autosuggest from 'react-autosuggest';
import {
  getSuggestions,
  getSuggestionValue,
  renderSuggestion
} from '../../../utils/suggestion/suggestions';

class UserSuggestionInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  componentDidMount() {
    if (this.props.projectID && this.props.sequence) {
      console.log('1');
      this.props.getUsersByProject(this.props.projectID);
    } else {
      console.log('2');
      this.props.getUsers();
    }
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(
        value,
        this.props.sequence ? this.props.usersByProject : this.props.users
      )
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSubmit = () => {
    const { projectID, sequence } = this.props;
    if (sequence) {
      this.props.assignUserToTask(
        projectID,
        sequence,
        this.props.usersByProject.find(
          user => user.username === this.state.value
        ),
        this.props.closePopup
      );
    } else {
      this.props.assignUserToProject(
        projectID,
        this.props.users.find(user => user.username === this.state.value),
        this.props.closePopup
      );
    }
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type a username',
      value,
      onChange: this.onChange
    };

    return (
      <div className='d-flex flex-column justify-content-center align-items-even pt-3 w-100'>
        <div className='w-100 pb-3'>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            highlightFirstSuggestion={true}
          />
        </div>
        <div className='d-flex justify-content-around'>
          <button className='btn btn-success' onClick={() => this.onSubmit()}>
            Assign
          </button>
          <button className='btn btn-primary' onClick={this.props.closePopup}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

UserSuggestionInput.propTypes = {
  getUsers: PropTypes.func.isRequired,
  getUsersByProject: PropTypes.func.isRequired,
  assignUserToTask: PropTypes.func.isRequired,
  assignUserToProject: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.users,
  usersByProject: state.project.users
});

export default connect(mapStateToProps, {
  getUsersByProject,
  getUsers,
  assignUserToProject,
  assignUserToTask
})(UserSuggestionInput);
