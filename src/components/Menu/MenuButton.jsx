/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuButton = ({ path, text, getClick }) => (
  <li onClick={getClick}>
    <Link to={path}>
      {text}
    </Link>
    {/* <a href={path}>
      {text}
    </a> */}

  </li>
);

MenuButton.defaultProps = {
  path: '',
  text: '',
  getClick: () => {},
};

MenuButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  getClick: PropTypes.func,
};

export default MenuButton;
