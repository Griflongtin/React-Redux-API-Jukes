import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import Joke from './Joke';
import { connect } from 'react-redux';
import { fetchJuke } from '../actions/jukeActions.js';
import PropTypes from 'prop-types';

function ToggleJokeNumber() {
  alert('click')
}

let jokeNumber = 'ten';
let jokeNumberText = 'Jokes';

class App extends Component {

  componentWillMount(){
    this.props.dispatch(fetchJuke());
  }
  runJokeAPL() {
    
  }
  render() {
    return (
      <div className="App">
        <h2>Want a joke Or Maybe Two?</h2>
        <div className="toggle-div">
          <h3 className="toggle-h3">Toggle between Two Numbers Of Jokes</h3>
          <h4 className="toggle-h4">One Or ten</h4>
          <button className="toggle-button" onClick={ToggleJokeNumber}>{jokeNumber}</button>
        </div>
        <button onClick={this.runJokeAPL}>Click Me for {jokeNumberText}</button>
        <div className={"Loading-" + (this.props.loadingAPL ? 'show' : 'hide')}>
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="Loading-text">Loading ...</h4>
        </div>
        <div>
          <Joke passJuke={this.props.juke} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  juke: PropTypes.object
}

const mapStateToProps = state => {
  return {
    juke: state.juke
  };
};

export default connect(mapStateToProps)(App);
