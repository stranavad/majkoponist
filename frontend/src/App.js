import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import axios from 'axios';
import Register from './components/Register';
import EmailExists from './components/EmailExists';
import Admin from './components/admin/Admin';

class App extends Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <Router>
        <div className="app">
          <div className="menu">
            <h1><a href="/">Majko Ponist</a></h1>
          </div>
          <Route
          exact
          path="/"
          render={props =>(
            <React.Fragment>
              <div className="centerbox">
                <h1>Hana Hegerova quizzzzzz</h1>
                <a href="/quiz" className="play-button">Play</a>
              </div>
            </React.Fragment>
          )}
          />
          <Route
          exact
          path="/quiz"
          component={Register}
          />
          <Route
          exact
          path="/email_exists"
          component={EmailExists}
          />
          <Route
          exact
          path="/admin"
          component={Admin}
          />
          <Route
          exact
          path="/admin_wrong_credentials"
          component={Admin} // TODO create component for it with redirect button
          />
        </div>
      </Router>
    );
  }
}
export default App;
