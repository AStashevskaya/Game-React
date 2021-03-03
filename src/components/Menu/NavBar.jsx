import React from 'react';
import { useSelector } from 'react-redux';
import MenuButton from './MenuButton';

import { navbarLinks as linksData } from '../../data/navBarData';

const NavBar = () => {
  const lang = useSelector((state) => state.game.language);

  return (
    <nav>
      <ul>
        {linksData.map((el) => (
          <MenuButton
            text={el[lang]}
            path={el.path}
            key={el.id.toString()}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
