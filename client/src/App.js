import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "./simpleButton";
import theme from "./theme";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Eventcard from './eventcard.js';



class App extends Component {

  render() {
    return (
      <div className="App">
       <Container maxWidth="lg">
        <header className="App-header">
          <h1 className="App-title">Event Finder</h1>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
          <Eventcard />
          </Grid>
          <Grid item xs={12} sm={3}>
          <Eventcard />
          </Grid>
          <Grid item xs={12} sm={3}>
          <Eventcard />
          </Grid>
          <Grid item xs={12} sm={3}>
          <Eventcard />
          </Grid>
          </Grid>          
        </header>
        </Container>
      </div>
    );
  }
}

export default App;