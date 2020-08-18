import React, { Component } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  ResponsiveContainer
} from 'recharts';
import _ from 'lodash';

export default class TaskTypePieChart extends Component {
  render() {
    const { tasks } = this.props;
    const COLORS = ['#0088FE', '#FF8042'];
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
      <ResponsiveContainer>
        <PieChart className='card'>
          <Pie
            data={taskTypesCounted}
            labelLine={false}
            outerRadius={80}
            label
            dataKey='value'
          >
            {taskTypesCounted.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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
