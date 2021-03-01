/* eslint-disable no-console */
import React, {
  useEffect, useState, useCallback,
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import AudioComponent from './Menu/MenuMusic';
import NavBar from './Menu/NavBar';
import Options from './Menu/Options';
import About from './Menu/About';
import Scores from './Menu/Scores';
import Game from './Game/Game';
import GameOver from './GameOver/GameOver';

const App = () => {
  const [location, setLocation] = useState('/');

  const onMouseMove = useCallback(() => {
    if (location !== window.location.pathname) {
      setLocation(window.location.pathname);
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <Provider store={store}>
      <>
        <AudioComponent location={location} />
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/options">
              <Options />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/scores">
              <Scores />
            </Route>
            <Route path="/game-over">
              <GameOver />
            </Route>
          </Switch>

        </Router>
      </>
    </Provider>

  );
};

export default App;
