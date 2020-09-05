import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAs } from '../../actions/authActions';

class TestLogin extends Component {
  render() {
    const { history, loginAs } = this.props;
    return (
      <div className='d-flex flex-column justify-content-around align-items-center h-100 bg-light'>
        <h4 className='display-5 text-center pt-3'>Log In As:</h4>
        <div
          className='btn btn-danger'
          onClick={() => loginAs('admin', history)}
        >
          Admin
        </div>
        <div className='btn btn-primary' onClick={() => loginAs('pm', history)}>
          Project Manager
        </div>
        <div className='btn btn-info' onClick={() => loginAs('dev', history)}>
          Developer
        </div>
      </div>
    );
  }
}

export default connect(null, { loginAs })(TestLogin);
