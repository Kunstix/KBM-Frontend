import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createNewUser } from '../../actions/authActions';
import classNames from 'classnames';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      fullname: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.validToken) {
      this.props.history.push('/dashboard');
    }
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      fullname: this.state.fullname,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.createNewUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='register'>
        <div className='container mt-5 pb-4 border border-light rounded'>
          <div className='row shadow'>
            <div className='col-md-8 m-auto'>
              <h4 className='display-5 text-center pt-3'>Register</h4>
              <p className='lead text-center'>Create your Account</p>
              <form onSubmit={event => this.onSubmit(event)}>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.fullname
                    })}
                    placeholder='Name'
                    name='fullname'
                    value={this.state.fullname}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.fullname && (
                    <div className='invalid-feedback'>{errors.fullname}</div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.username
                    })}
                    placeholder='Email Address'
                    name='username'
                    value={this.state.username}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.username && (
                    <div className='invalid-feedback'>{errors.username}</div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.password
                    })}
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>{errors.password}</div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.confirmPassword
                    })}
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.confirmPassword && (
                    <div className='invalid-feedback'>
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <input
                  type='submit'
                  className='btn btn-success btn-block mt-4'
                  value='Register'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { createNewUser })(Register);
