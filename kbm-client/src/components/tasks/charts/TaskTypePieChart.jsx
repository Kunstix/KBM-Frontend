import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import _ from 'lodash';
import { getColorForType } from '../../../utils/task/colors';

export default class TaskTypePieChart extends Component {
  render() {
    const { tasks } = this.props;
    const taskTypesCounted = _.chain(tasks)
      .groupBy('type')
      .map(function (tasks, key) {
        return {
          name: key,
          value: tasks.length
        };
      })
      .value();

    return (
      <ResponsiveContainer className='h-50'>
        <PieChart>
          <Pie
            data={taskTypesCounted}
            labelLine={false}
            outerRadius={80}
            label
            dataKey='value'
          >
            {taskTypesCounted.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColorForType(entry.name)} />
            ))}
          </Pie>
          <Legend
            align='right'
            verticalAlign='middle'
            layout='vertical'
            height={36}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
