import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import sizeChange from '../../../redux/field/fieldActions';
import useLocalStorage from '../../../hooks/useLocState';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
    maxWidth: 200,
    cursor: 'pointer',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Selector = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [size, setSize] = useLocalStorage('size', 18);
  const handleChange = ({ target: value }) => {
    setSize(value.value);
    dispatch(sizeChange(value.value));
  };

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel>Field Size</InputLabel>
      <Select
        value={size}
        onChange={handleChange}
      >
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={24}>24</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
