import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsersByProject } from '../../../actions/userActions';
import { assignUser } from '../../../actions/backlogActions';
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
    if (this.props.projectID) {
      this.props.getUsersByProject(this.props.projectID);
    }
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.users)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSubmit = () => {
    const { projectID, sequence } = this.props;
    this.props.assignUser(
      projectID,
      sequence,
      this.props.users.find(user => user.username === this.state.value),
      this.props.closePopup
    );
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
  getUsersByProject: PropTypes.func.isRequired,
  assignUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps, { getUsersByProject, assignUser })(
  UserSuggestionInput
);
