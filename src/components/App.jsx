/* eslint-disable no-console */
import React, {
  useEffect, useState,
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
// import Popup from './Popup/Popup';

const App = () => {
  const [location, setLocation] = useState(window.location.pathname);
  // const [popupOpen, setPopupOpen] = useState(false);

  const updateLevel = () => {
    // setPopupOpen(true);
    console.log('dff');
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPopupOpen(false);
  //     console.log('close');
  //   }, 3000);
  // }, [popupOpen]);

  useEffect(() => {
    window.addEventListener('click', () => {
      if (location !== window.location.pathname) {
        setLocation(window.location.pathname);
      }
    });
    return window.addEventListener('click', () => {
      if (location !== window.location.pathname) {
        setLocation(window.location.pathname);
      }
    });
  }, [location]);

  return (
    <Provider store={store}>
      <>
        <AudioComponent location={location} />
        {/* <Popup trigger={popupOpen} /> */}
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar />
            </Route>
            <Route path="/game">
              <Game update={updateLevel} />
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
