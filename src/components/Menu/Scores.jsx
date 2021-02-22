import React from 'react';

import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

const ScoresPage = () => {
  const { path, title } = menuLink;

  return (
    <div className="options">
      <h1> scores </h1>

      <MenuButton
        text={title}
        path={path}
      />
    </div>
  );
};

export default ScoresPage;
