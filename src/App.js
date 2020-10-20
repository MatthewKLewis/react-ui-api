import React from 'react';
import './App.css';

//Import Components
import Header from './components/Header'
import TabContainer from './components/TabContainer';
import Content from './components/Content'

function App() {

  //Header, tabContainer, Content

  return (
    <div className="App">
      <Header />
      <TabContainer />
      <Content />
    </div>
  );
}

export default App;
