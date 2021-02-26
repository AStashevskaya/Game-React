import React from 'react';
// import PropTypes from 'prop-types';
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

// NavBar.defaultProps = {
//   getClick: () => {},
// };

// NavBar.propTypes = {
//   getClick: PropTypes.func,
// };
export default NavBar;
