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

  useEffect(() => {
    console.log(isClicked, 'from use');
    setIsClicked(false);
  }, [isClicked]);

  const getClick = () => {
    console.log(isClicked, 'from method');
    setIsClicked(true);
  };

  return (
    <Provider store={store}>
      <>
        <AudioComponent
          isClicked={isClicked}
        />
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar
                getClick={getClick}
              />
            </Route>
            <Route path="/game">
              <Game
                getClick={getClick}
              />
            </Route>
            <Route path="/options">
              <Options
                getClick={getClick}
              />
            </Route>
            <Route path="/about">
              <About
                getClick={getClick}
              />
            </Route>
            <Route path="/scores">
              <Scores
                getClick={getClick}
              />
            </Route>
          </Switch>

        </Router>
      </>
    </Provider>

  );
};

export default App;
