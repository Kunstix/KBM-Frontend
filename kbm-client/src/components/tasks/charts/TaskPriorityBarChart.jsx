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
import { getColorForPrio } from '../../../utils/task/colors';

export default class TaskStatusBarChart extends Component {
  render() {
    const { tasks } = this.props;
    const tasksByPrio = _.chain(tasks)
      .groupBy('priority')
      .map(function (tasks, key) {
        return {
          name: key,
          count: tasks.length
        };
      })
      .value();
    return (
      <div className='h-50 p-2 pr-4 pt-4 border-bottom'>
        <ResponsiveContainer>
          <BarChart data={tasksByPrio}>
            <XAxis dataKey='name' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='count'>
              {tasksByPrio.map((entry, index) => {
                return <Cell fill={getColorForPrio(entry.name)} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
