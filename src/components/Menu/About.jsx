import React from 'react';

import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

const AboutPage = () => {
  const { path, title } = menuLink;

  return (
    <div className="about">
      <h1>about </h1>

      <MenuButton
        text={title}
        path={path}
      />
    </div>
  );
};

export default AboutPage;
