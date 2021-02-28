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

  console.log(size);

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">Field Size</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        // value={fieldsize}
        onChange={handleChange}
      >
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={24}>24</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
};

// Selector.defaultProps = {
//   // handleChange: () => {},
//   fieldsize: 12,
// };

// Selector.propTypes = {
//   // handleChange: PropTypes.func,
//   fieldsize: PropTypes.number,
// };

export default Selector;
