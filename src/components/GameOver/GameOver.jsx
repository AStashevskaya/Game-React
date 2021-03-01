import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MenuButton from '../Menu/MenuButton';
import SmallButton from '../Menu/options/SmallButton';
import { menuLink } from '../../data/navBarData';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GameOver = () => {
  const score = localStorage.getItem('final-score');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  const { path, title } = menuLink;

  const classes = useStyles();
  // const handleChange = ({ target: value }) => {
  //   setName(name + value);
  // };

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
    <div className="game_over">
      <h2>
        {' '}
        gameOver, your score is
        {JSON.parse(score)}
      </h2>
      <FormControl variant="filled" className={classes.formControl}>
        <Input id="demo-simple-select-filled-label" value={name} onChange={handleChange} onKeyPress={handleKeyPress} />
        <SmallButton text="send" handleClick={handleClick} submit={handleKeyPress} />
      </FormControl>
      {/* <form>
        <input value={name} onChange={handleChange} />
        <SmallButton text="send" handleClick={handleClick} />
      </form> */}
      <MenuButton
        text={title}
        path={path}
      />
    </div>
  );
};

export default GameOver;
