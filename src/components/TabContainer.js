import React from 'react';
import './TabContainer.css';

//Import Components
import Tab from './Tab'

function TabContainer() {
  return (
    <div className="TabContainer">
      <Tab />
      <Tab />
      <Tab />
      <Tab />
    </div>
  );
}

export default TabContainer;
