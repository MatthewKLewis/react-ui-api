import React from 'react';
import './TabContainer.css';

//Import Components
import Tab from './Tab'
import Content from './Content'

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentString: ''
    };
  }

  updateContent = (e) => {
    e.preventDefault();
    if (e.target.innerText === 'Director') {
      this.setState({contentString: this.props.film.director})
    } 
    if (e.target.innerText === 'Description') {
      this.setState({contentString: this.props.film.description})  

    }  
    if (e.target.innerText === 'Release Date') {
      this.setState({contentString: this.props.film.release_date})
    } 
    if (e.target.innerText === 'Producer') {
      this.setState({contentString: this.props.film.producer})
    } 
  }
  
  render() {
    return (
      <React.Fragment>
        <h1 className='frameHeader'>{this.props.film.title}</h1>
        <div className="TabContainer">
          <Tab action={this.updateContent} label={'Director'} />
          <Tab action={this.updateContent} label={'Description'} />
          <Tab action={this.updateContent} label={'Release Date'} />
          <Tab action={this.updateContent} label={'Producer'} />
        </div>
        <Content content={this.state.contentString}/>
      </React.Fragment>
    );
  }
}

export default TabContainer;
