import React from 'react';
import './Tab.css';

function Tab({info, label, action}) {
  return (
  <button onClick={action} className="Tab">{label}</button>
  );
}

export default Tab;
