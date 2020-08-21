import React, { Component } from 'react';
import { getBootstrapColorForPrio } from '../../../utils/task/colors';

export default class PriorityBadge extends Component {
  render() {
    const { priority } = this.props;
    const priorityClass = getBootstrapColorForPrio(priority);
    return <span className={`badge badge${priorityClass}`}>{priority}</span>;
  }
}
