import React, { Component } from 'react';

export default class TabContent extends Component {
  render() {
    const { children, activeTab } = this.props;
    return (
      <div className='tab-content h-100'>
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    );
  }
}
