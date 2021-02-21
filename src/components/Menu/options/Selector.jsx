import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">Field Size</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
                // value={age}
                // onChange={handleChange}
        label="Age"
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={24}>24</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
