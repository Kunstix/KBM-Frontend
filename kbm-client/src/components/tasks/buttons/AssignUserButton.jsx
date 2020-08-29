import React, { Component } from 'react';
import UserSuggestionPopup from '../popup/UserSuggestionPopup';
import { showForPm } from '../../../utils/auth/role';
import { connect } from 'react-redux';

class AssignUserButton extends Component {
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
    const { projectID, sequence, roles } = this.props;
    const showButton = showForPm(roles);
    return showButton ? (
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
    ) : null;
  }
}

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, null)(AssignUserButton);
