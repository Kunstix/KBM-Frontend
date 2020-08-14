import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import classNames from 'classnames';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
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
    const login = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(login, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-5 text-center'>Log In</h1>
              <form onSubmit={event => this.onSubmit(event)}>
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
                <input
                  type='submit'
                  className='btn btn-success btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { login })(Login);
