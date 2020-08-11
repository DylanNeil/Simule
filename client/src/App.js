import React from 'react';
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import theme from "./theme";
import { makeStyles } from '@material-ui/core/styles';
import Eventcard from './eventcard.js';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-body">
//
//
//         <Eventcard />
//
//       </header>
//     </div>
//   );
// }


class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;

export default App;
