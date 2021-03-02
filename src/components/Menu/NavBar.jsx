import React from 'react';
import MenuButton from './MenuButton';

import { navbarLinks as linksData } from '../../data/navBarData';

const NavBar = () => (
  <nav>
    <ul>
      {linksData.map((el) => (
        <MenuButton
          text={el.title}
          path={el.path}
          key={el.id.toString()}
        />
      ))}
    </ul>
  </nav>
);

export default NavBar;
