import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Eventcard from './eventcard.js';


function App() {
  return (
    <div className="App">
      <header className="App-body">


        <Eventcard />

      </header>
    </div>
  );
}

export default App;
