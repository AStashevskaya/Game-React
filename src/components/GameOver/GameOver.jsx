import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

import Title from '../Menu/options/Title';
import MenuButton from '../Menu/MenuButton';
import SmallButton from '../Menu/options/SmallButton';
import { menuLink } from '../../data/navBarData';
import menuLinks from '../../constants/localisation/menuLinks';
import gameOver from '../../constants/localisation/game-over';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 500,
    color: 'white',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'colomn',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    maxWidth: 500,
    color: 'white',
  },
}));

const GameOver = () => {
  const score = localStorage.getItem('final-score');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  const { path } = menuLink;

  const lang = useSelector((state) => state.game.language);
  const {
    SCORE, GAME_OVER, SAVE, SEND,
  } = gameOver[lang];
  const { MENU } = menuLinks[lang];

  const classes = useStyles();

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const getDate = () => {
    const newDate = new Date();
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    setDate(`${day}/${month + 1}/${year}`);
  };

  useEffect(() => {
    getDate();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const obj = {
      name, score, date,
    };
    scores.push(obj);
    localStorage.setItem('scores', JSON.stringify(scores));
    setName('');
    document.location.replace('/');
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    if (key === 'Enter') handleClick(e);
  };

  return (
    <div className="game-over">
      <Title text={GAME_OVER} />

      <div className="game-over__content">
        <h3>
          {SCORE}
          {` ${score}`}
          .
          <br />
          {SAVE}
        </h3>
        <FormControl variant="filled" className={classes.formControl}>
          <Input value={name} onChange={handleChange} onKeyPress={handleKeyPress} />
          <SmallButton text={SEND} handleClick={handleClick} submit={handleKeyPress} />
        </FormControl>
      </div>
      <MenuButton
        text={MENU}
        path={path}
      />
    </div>
  );
};

export default GameOver;
