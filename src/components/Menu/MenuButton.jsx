/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MyButton from './options/MyButton';

const MenuButton = ({ path, text }) => (
  <li>
    <Link to={path}>
      <MyButton>
        {text}
      </MyButton>
    </Link>
    {/* <a href={path}>
      {text}
    </a> */}

  </li>
);

MenuButton.defaultProps = {
  path: '',
  text: '',
};

MenuButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default MenuButton;
