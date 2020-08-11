import React from 'react';
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import theme from "./theme";
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
