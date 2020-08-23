import React, { Component } from 'react';
import _ from 'lodash';

export default class HistoryTab extends Component {
  renderMessages = message => {
    if (message) {
      const cleanedMessages = message
        .replace(/User{username=/g, '')
        .replace(/}/g, '')
        .split('\n');
      return cleanedMessages.map((msg, index) => (
        <small key={index}>{msg}</small>
      ));
    } else {
      return null;
    }
  };

  render() {
    const { histories } = this.props;
    return (
      <ol className='list-group list-group-striped overflow-auto h-100'>
        {histories &&
          _.sortBy(histories, ['createdAt']).map(history => (
            <li
              key={history.id}
              className='list-item d-flex flex-column justify-content-between p-1'
            >
              <p className='text-capitalize mb-0'>
                {history.type
                  .replace('TASK_', '')
                  .replace('_', ' ')
                  .toLowerCase()}
              </p>
              {this.renderMessages(history.message)}
              <small className='font-weight-light font-italic align-self-end'>
                -- by {history.username} at {history.createdAt}
              </small>
            </li>
          ))}
      </ol>
    );
  }
}
