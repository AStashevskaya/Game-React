/* eslint-disable no-console */
import React, {
  Fragment, useState, useEffect,
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

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [cardClicked, setCardClicked] = useState(false);

  useEffect(() => {
    window.addEventListener('click', ({ target }) => {
      console.log(cardClicked, isClicked);
      if (target.id === 'root') {
        setIsClicked(false);
      }

      if (target.id === 'card') {
        setCardClicked(true);
      }

      if (target.id !== 'card') {
        setIsClicked(true);
      }
    });
    setTimeout(() => {
      setCardClicked(false);
      setIsClicked(false);
    }, 0);

    return window.addEventListener('click', ({ target }) => {
      if (target.id === 'root') return;

      if (target.id === 'card') {
        setCardClicked(true);
      }

      if (target.id !== 'card') {
        setIsClicked(true);
      }
      setIsClicked(true);
    });
  }, [isClicked, cardClicked]);

  return (
    <Provider store={store}>
      <>
        <AudioComponent
          isClicked={isClicked}
          cardClicked={cardClicked}
        />
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
          </Switch>

        </Router>
      </>
    </Provider>

  );
};

export default App;
