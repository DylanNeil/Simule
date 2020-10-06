import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "./simpleButton";
import theme from "./theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Eventcard from "./eventcard.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <header className="App-header">
            <h1 className="App-title">Event Finder</h1>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Eventcard
                  image="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-27779-090413-futurama-624-1378307816.jpg"
                  title="Futurama Trivia Night"
                  date="01/01/3021"
                  text="Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.
               Anyone who laughs is a communist! Isn't it true that you have Isn't it true that you have"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Eventcard
                  image="https://www.parisjazzclub.net/medias/concerts/62527-antoine-boyer-trio/images/antoine-boyer-trio-lg.jpg"
                  title="Gypsy Jazz Concert"
                  date="03/21/2022"
                  text="The Bainbridge-based jazz band Ranger & the Re-Arrangers, along with several special guests, will perform in 
                honor of the 104th birthday of legendary gypsy jazz man Django Reinhardt."
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Eventcard
                  image="https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg"
                  title="Futball!"
                  date="14/06/2021"
                  text="Con la ausencia de Guillermo Ochoa por lesión, el arco del América estará bien resguardado con Óscar Jiménez, quien el domingo tuvo una buena 
          actuación ante Cruz Azul."
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Eventcard
                  image="https://www.scitecheuropa.eu/wp-content/uploads/2019/07/ClaudioVentrella.jpg"
                  title="Astronomy Night"
                  date="12/03/2020"
                  text="Concept of the number one finite but unbounded a very small stage in a vast cosmic arena tesseract Drake Equation not a sunrise but a 
          galaxyrise. Jean-François Champollion the only home"
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
