import React from 'react';
// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MenuButton from '../Menu/MenuButton';
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
  // const score = useSelector((state) => state.game.score);
  const score = localStorage.getItem('score');
  console.log(score);
  const { path, title } = menuLink;

  const classes = useStyles();
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="game_over">
      <h2>
        {' '}
        gameOver, your score is
        {JSON.parse(score)}
      </h2>
      <FormControl variant="filled" className={classes.formControl}>
        <Input id="demo-simple-select-filled-label" value="" onChange={handleChange} />
      </FormControl>
      <MenuButton
        text={title}
        path={path}
      />
    </div>
  );
};

export default GameOver;
