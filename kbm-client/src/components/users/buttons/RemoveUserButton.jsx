import React, { Component } from 'react';
import { Role } from '../../../utils/auth/role';
import { connect } from 'react-redux';

class RemoveUserButton extends Component {
  render() {
    const { isManage, onRemove, roles } = this.props;
    const showButton = roles.indexOf(Role.PM) !== -1;
    return (
      !isManage &&
      showButton && (
        <td>
          <div
            className='pl-2 fas fa-minus-circle table-action '
            onClick={() => onRemove()}
          />
        </td>
      )
    );
  }
}

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, null)(RemoveUserButton);
