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
    const tasksByStatus = _.chain(tasks)
      .groupBy('status')
      .map(function (tasks, key) {
        return {
          name: key.replace('IN_', ''),
          count: tasks.length
        };
      })
      .value();
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
      <div className='card h-100 p-2 pr-4 pt-4'>
        <ResponsiveContainer>
          <BarChart data={tasksByStatus}>
            <XAxis dataKey='name' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='count'>
              {tasksByStatus.map((entry, index) => {
                let color;
                switch (entry.name) {
                  case 'TODO':
                    color = COLORS[0];
                    break;
                  case 'DESIGN':
                    color = COLORS[1];
                    break;
                  case 'PROGRESS':
                    color = COLORS[2];
                    break;
                  case 'REVIEW':
                    color = COLORS[1];
                    break;
                  case 'TEST':
                    color = COLORS[0];
                    break;
                  case 'DONE':
                    color = COLORS[3];
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
