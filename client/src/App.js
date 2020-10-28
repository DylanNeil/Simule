import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Displayevents from "./components/displayevents";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <header className="App-header">
            <h1 className="App-title">Simule</h1>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Displayevents
                  title="Futurama Trivia Night"
                  date="01/01/3021"
                  location="A Bar Somewhere"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Displayevents
                  title="Gypsy Jazz Concert"
                  date="03/21/2022"
                  location="Paris"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Displayevents
                  title="Futball!"
                  date="14/06/2021"
                  location="Barcelona"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Displayevents
                  title="Astronomy Night"
                  date="12/03/2020"
                  location="A Mountain Somewhere"
                />
              </Grid>
            </Grid>
          </header>
        </Container>
      </div>
    );
  }
}

export default App;
