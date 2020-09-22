import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "./simpleButton";
import theme from "./theme";
import { makeStyles } from '@material-ui/core/styles';
import Eventcard from './eventcard.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Event Finder</h1>
        </header>
        <MuiThemeProvider theme={theme}>
        <Button>Button Sample - Styled from theme.js</Button>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;