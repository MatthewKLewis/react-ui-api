import React from 'react';
import './App.css';

//Import Components
import Header from './components/Header'
import TabContainer from './components/TabContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      url: 'https://ghibliapi.herokuapp.com/films',
      films: []
    };
  }

  //built in methods:
  componentDidMount() {
    fetch(this.state.url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {       //must be arrow functions!
        return response.json();
      })
      .then(obj => {            //must be arrow functions!
        this.setState({ films: obj });
        console.log(obj)
      });
  }

  render() {

    let arrayOfContainers = this.state.films.map(item => <TabContainer key={Math.floor(Math.random() * 10000)} film={item}/>)

    return (
      <div className="App">
        <Header />
        {arrayOfContainers}
      </div>
    );
  }
}

export default App;
