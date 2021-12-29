import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { InputName } from './Components/InputName';

function App() {
  return (
    <div className="App">
      <h1>Hello, world! My first React project</h1>
      <InputName />
    </div>
  );
}



export default App;
