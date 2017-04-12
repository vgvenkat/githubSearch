import React from 'react';

const BackButton =(props) => {
  const goBack = (event) => {
   const history = props.history;
   history.goBack();
  }
  return (<button className="button" 
  onClick={goBack}> Back  </button>)
}

export default BackButton;