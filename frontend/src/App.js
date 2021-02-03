import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import GreatWar from './GreatWar.mp3'
import GreatWarOgg from './GreatWarOgg.ogg';
//import axios from 'axios';
import Register from './components/Register';
import EmailExists from './EmailExists';
import Admin from './components/admin/Admin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
//import { volumeUp } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  state = {
    todos: [],
  };

  playAudio = () => {
    const audio = document.getElementById("track");
    if(audio.paused === false) {
      audio.pause();
    } else {
      audio.play()
    }
  }

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
              <div className="container-center">
                <h1 className="medium-heading">Hana Hegerova quizzzzzz</h1>
                <a href="/quiz" className="large-button">Play</a>
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
          <audio id="track" loop>  
            <source src={GreatWar} type="audio/mpeg"/>
            <source src={GreatWarOgg} type="audio/ogg"/>
          </audio>
          <FontAwesomeIcon className="audio-button" onClick={this.playAudio} icon={faVolumeUp} />
        </div>
      </Router>
    );
  }
}
export default App;
