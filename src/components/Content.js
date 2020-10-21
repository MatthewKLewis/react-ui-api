import React from 'react';
import './Content.css';

//Import Components


function Content({content}) {
  return (
    <div className="Content">
      <p>{content}</p>
    </div>
  );
}

export default Content;
