import React from 'react';
import './Content.css';

//Import Components


function Content({content, link}) {
  return (
    <div className="Content">
      <p>{content}</p>
      <p>{link}</p>
    </div>
  );
}

export default Content;
