import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer
} from 'recharts';
import _ from 'lodash';
import { getColorForStatus } from '../../../utils/task/colors';

export default class TaskStatusBarChart extends Component {
  render() {
    const { tasks } = this.props;
    const tasksByStatus = _.chain(tasks)
      .groupBy('status')
      .map(function (tasks, key) {
        return {
          name: key.replace('IN_', ''),
          count: tasks.length
        };
      })
      .value();
    return (
      <div className='h-50 p-2 pr-4 pt-4 border-bottom'>
        <ResponsiveContainer>
          <BarChart data={tasksByStatus}>
            <XAxis dataKey='name' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='count'>
              {tasksByStatus.map((entry, index) => {
                return <Cell fill={getColorForStatus(entry.name)} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
