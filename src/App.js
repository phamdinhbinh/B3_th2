import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';
import styles from "./styles.module.css"; 
import styled from 'styled-components';
function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };

  const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;

  const StyledText = styled.h2`
  color: ${(props) => {
    if (props.numClicked % 2 === 0) {
      return "blue";
    }
    return "red";
  }};
`;
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      {/* css module */}
      <h3> css module</h3>
      <h2 className={textStyle}>You clicked {numClicked} times</h2>

      {/* css module */}
      <h3> css inline</h3>
      <h2 
        style={{
        color:  (numClicked % 2 === 0) ? 'blue' : 'red'
          }}
          >You clicked {numClicked} times
      </h2>
      
      {/* style components */}
      <h3> css components</h3>
      <StyledText numClicked={numClicked}>
        You clicked {numClicked} times
      </StyledText>

    </div>
  );
}

export default App;
