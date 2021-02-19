import React from 'react';
import PropTypes from 'prop-types';

import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

const AboutPage = ({ getClick }) => {
  const { path, title } = menuLink;

  return (
    <div className="about">
      <h1>about </h1>

      <MenuButton
        getClick={getClick}
        text={title}
        path={path}
      />
    </div>
  );
};

AboutPage.defaultProps = {

  getClick: () => {},
};

AboutPage.propTypes = {
  getClick: PropTypes.func,
};

export default AboutPage;
