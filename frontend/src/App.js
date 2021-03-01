import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HanaSong from './components/assets/HanaSong.mp3'
import HanaSongOgg from './components/assets/HanaSongOgg.ogg';
import Register from './components/Register';
import EmailExists from './components/EmailExists';
import Admin from './components/admin/Admin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import HomePage from './components/HomePage';

class App extends Component {
  playAudio = () => {
    const audio = document.getElementById("track");
    if(audio.paused) {
      audio.play();
    } else {
      audio.pause()
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="menu">
            <h1><a href="/">Čo vieš o Hane ?</a></h1>
          </div>
          <Route
          exact
          path="/"
          component={HomePage}
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
            <source src={HanaSong} type="audio/mpeg"/>
            <source src={HanaSongOgg} type="audio/ogg"/>
          </audio>
          <FontAwesomeIcon className="audio-button" onClick={this.playAudio} icon={faVolumeUp} />
        </div>
      </Router>
    );
  }
}
export default App;
