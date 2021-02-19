import React from 'react';
import PropTypes from 'prop-types';

import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

const ScoresPage = ({ getClick }) => {
  const { path, title } = menuLink;

  return (
    <div className="options">
      <h1> scores </h1>

      <MenuButton
        getClick={getClick}
        text={title}
        path={path}
      />
    </div>
  );
};

ScoresPage.defaultProps = {

  getClick: () => {},
};

ScoresPage.propTypes = {
  getClick: PropTypes.func,
};

export default ScoresPage;
