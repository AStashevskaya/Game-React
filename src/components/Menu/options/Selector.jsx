import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import sizeChange from '../../../redux/field/fieldActions';

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
  const handleChange = ({ target: value }) => {
    dispatch(sizeChange(value.value));
  };

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">Field Size</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        // value={fieldsize}
        onChange={handleChange}
      >
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={20}>20</MenuItem>
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
