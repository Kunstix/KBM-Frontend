import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import UserSuggestionInput from '../popup/UserSuggestionInput';
import UserSuggestionPopup from './UserSuggestionPopup';

class AssignTaskButton extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { projectID, sequence } = this.props;
    return (
      <div>
        <div
          className='icon-action fas fa-user-edit pl-1'
          onClick={event => this.togglePopup(event)}
        ></div>
        {this.state.showPopup ? (
          <UserSuggestionPopup
            projectID={projectID}
            sequence={sequence}
            closePopup={event => this.togglePopup(event)}
          />
        ) : null}
      </div>
    );
  }
}

export default AssignTaskButton;
