import React, { Component } from 'react';
import UserSuggestionInput from './UserSuggestionInput';

export default class UserSuggestionPopup extends Component {
  render() {
    const { projectID, sequence, closePopup } = this.props;
    return (
      <div className='popup'>
        <div className='popup_inner d-flex flex-column align-items-start'>
          <h5 className='text-primary border-bottom mb-3'>Assign a user</h5>
          <UserSuggestionInput
            projectID={projectID}
            sequence={sequence}
            closePopup={closePopup}
          />
        </div>
      </div>
    );
  }
}
