import React from 'react';
import PropTypes from 'prop-types';



function Joke(props){
  console.log(props);
  return(
    <div style={{color: 'white'}}>
    <h3>Type of Juke: {props.passJuke.juke.type}</h3>
    <h2>guess the juke!?</h2>
    Setup: {props.passJuke.juke.setup}
      <br />
      Punchline: {props.passJuke.juke.punchline}
    </div>
  )
}

Joke.propTypes = {
  passJuke: PropTypes.object
}

export default Joke;
