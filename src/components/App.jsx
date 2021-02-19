import React, {
  Fragment, useState, useEffect,
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AudioComponent from './Menu/MenuMusic';
import NavBar from './Menu/NavBar';
import Options from './Menu/Options';
import About from './Menu/About';
import Scores from './Menu/Scores';
import Game from './Game/Game';

const App = () => {
  const [musicOn, setMusicOn] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const toggleMusic = (e) => {
    e.preventDefault();
    setMusicOn(!musicOn);
  };

  useEffect(() => {
    console.log(isClicked, 'from use');
    setIsClicked(false);
  }, [isClicked]);

  const getClick = () => {
    console.log(isClicked, 'from method');
    setIsClicked(true);
  };

  const toggleSound = (e) => {
    e.preventDefault();
    setSoundOn(!soundOn);
  };
  return (
    <>
      <AudioComponent
        MusicOn={musicOn}
        SoundOn={soundOn}
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
              MusicOn={musicOn}
              SoundOn={soundOn}
            />
          </Route>
          <Route path="/options">
            <Options
              getClick={getClick}
              MusicOn={musicOn}
              SoundOn={soundOn}
              toggleMusic={toggleMusic}
              toggleSound={toggleSound}
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

  );
};

export default App;
