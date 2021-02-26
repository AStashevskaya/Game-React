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
// import menuMusic from '../assets/sounds/menu.mp3';

const App = () => {
  const [location, setLocation] = useState(window.location.pathname);

  // const audio = new Audio(menuMusic);
  // audio.loop = true;
  // audio.src = menuMusic;
  // console.log(audio);

  // const updateLevel = () => {
  //   // setPopupOpen(true);
  //   console.log('dff');
  // };

  // const finishGame = () => {
  //   console.log(popupOpen, gameOver);
  //   if (popupOpen && gameOver) {
  //     setPopupOpen(false);
  //     setGameOver(false);
  //     console.log(popupOpen, gameOver);
  //   }
  // };

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
        // if (location === '/game' && window.location.pathname === '/') finishGame();

        console.log('prevLocation:', location, window.location.pathname);
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
