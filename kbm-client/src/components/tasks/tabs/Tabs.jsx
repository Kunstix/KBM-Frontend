import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import TabContent from './TabContent';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[1].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    const { children } = this.props;
    return (
      <div className='tabs h-100'>
        <ol className='tab-list'>
          {children.map(child => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={tab => this.onClickTabItem(tab)}
              />
            );
          })}
        </ol>
        <TabContent children={children} activeTab={activeTab} />
      </div>
    );
  }
}

export default Tabs;
