import React from 'react';
import { useSelector } from 'react-redux';

import { menuLink } from '../../data/navBarData';
import menuLinks from '../../constants/localisation/menuLinks';
import ABOUT from '../../constants/localisation/about';
import MenuButton from './MenuButton';
import Title from './options/Title';

import logo from '../../assets/images/rs_school_js.svg';

const AboutPage = () => {
  const { path } = menuLink;
  const lang = useSelector((state) => state.game.language);

  const {
    MEMORY_GAME, GOAL, RULES, LEVELS, ABOUT_MENU, HOT_KEYS, NAME, DEVELOPED,
    LEFT, RIGHT, TOGGLE, SUBMIT, QUIT,
  } = ABOUT[lang];
  const { MENU } = menuLinks[lang];

  return (
    <div className="about">
      <Title text={MEMORY_GAME} />

      <div className="about__content">
        <p>
          {GOAL}
          <br />
          {RULES}
          <br />
          {LEVELS}
        </p>
        <p>
          {ABOUT_MENU}
        </p>
        <p>
          {HOT_KEYS}
        </p>
        <ul>
          <li>{LEFT}</li>
          <li>{RIGHT}</li>
          <li>{SUBMIT}</li>
          <li>{TOGGLE}</li>
          <li>{QUIT}</li>
        </ul>

        <div className="about__footer">
          <span>
            <span>
              {DEVELOPED}
            </span>
            <a href="https://github.com/AStashevskaya">{NAME}</a>
          </span>
          <span>2021</span>
          <a href="https://rollingscopes.com/"><img className="logo" src={logo} alt="logo" /></a>

        </div>
      </div>

      <MenuButton
        text={MENU}
        path={path}
      />
    </div>
  );
};

export default AboutPage;
