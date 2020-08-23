import React, { Component } from 'react';
import Tabs from './Tabs';
import AttachementTab from './AttachementTab';
import CommentsTab from './CommentsTab';
import HistoryTab from './HistoryTab';

export default class TaskTabs extends Component {
  render() {
    const { histories, comments, sequence } = this.props;
    return (
      <div className='p-4 h-100'>
        <Tabs>
          <div label='Attachements'>
            <AttachementTab />
          </div>
          <div label='Comments'>
            <CommentsTab comments={comments} sequence={sequence} />
          </div>
          <div label='History'>
            <HistoryTab histories={histories} />
          </div>
        </Tabs>
      </div>
    );
  }
}
