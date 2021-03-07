/* eslint-disable no-console */
import React, {
  useEffect, useState, useCallback,
} from 'react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
// import { Provider } from 'react-redux';

// import store from '../redux/store';
import AudioComponent from './Menu/Sound';
import NavBar from './Menu/NavBar';
import Options from './Menu/Options';
import About from './Menu/About';
import Scores from './Menu/Scores';
import Game from './Game/Game';
import GameOver from './GameOver/GameOver';

const App = () => {
  // const curr = useLocation();
  // console.log(curr);
  const [location, setLocation] = useState(window.location.hash);

  const onMouseMove = useCallback(() => {
    if (location !== window.location.hash) {
      console.log(window.location.hash);
      setLocation(window.location.hash);
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <>
      <AudioComponent location={location} />
      <Router hashType="noslash">
        <Switch>
          <Route exact path="/" component={NavBar} />
          <Route path="/game" component={Game} />
          <Route path="/options" component={Options} />
          <Route path="/about" component={About} />
          <Route path="/scores" component={Scores} />
          <Route path="/game-over" component={GameOver} />
        </Switch>
      </Router>
    </>

  );
};

export default App;
