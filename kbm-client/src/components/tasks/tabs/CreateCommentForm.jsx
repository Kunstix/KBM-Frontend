import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../../../actions/commentActions';
import { dontShowForWatcher } from '../../../utils/auth/role';

class CreateCommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newComment = {
      content: this.state.content
    };
    this.props.createComment(
      this.props.sequence,
      newComment,
      this.props.history
    );
  }

  render() {
    const { errors } = this.state;
    const showButton = dontShowForWatcher(this.props.roles);
    return showButton ? (
      <form
        className='d-flex justify-content-center'
        onSubmit={event => this.onSubmit(event)}
      >
        <input
          type='text'
          className={classNames('form-control form-control-md', {
            'is-invalid': errors.content
          })}
          name='content'
          placeholder='Comment...'
          value={this.state.content || ''}
          onChange={event => this.onChange(event)}
        />
        {errors.content && (
          <div className='invalid-feedback'>{errors.content}</div>
        )}
        <button type='submit' className='btn btn-success'>
          Comment
        </button>
      </form>
    ) : null;
  }
}

CreateCommentForm.propTypes = {
  createComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  roles: state.auth.user.roles,
  errors: state.errors.errors
});

export default connect(mapStateToProps, {
  createComment
})(CreateCommentForm);
