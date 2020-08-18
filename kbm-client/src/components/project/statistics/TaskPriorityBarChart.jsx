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
    const COLORS = ['#00C49F', '#0088FE', '#FF8042'];
    return (
      <div className='card h-100 p-2 pr-4 pt-4'>
        <ResponsiveContainer>
          <BarChart data={tasksByPrio}>
            <XAxis dataKey='name' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='count'>
              {tasksByPrio.map((entry, index) => {
                let color;
                switch (entry.name) {
                  case 'LOW':
                    color = COLORS[0];
                    break;
                  case 'MEDIUM':
                    color = COLORS[1];
                    break;
                  case 'HIGH':
                    color = COLORS[2];
                    break;
                  default:
                    color = COLORS[3];
                }
                return <Cell fill={color} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
