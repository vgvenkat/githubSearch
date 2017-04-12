import React from 'react';

const BackButton =(props) => {
  const goBack = (event) => {
   const history = props.history;
   history.goBack();
  }
  return (<button onClick={goBack}> Back  </button>)
}

export default BackButton;