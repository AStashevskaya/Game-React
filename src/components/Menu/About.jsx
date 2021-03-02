import React from 'react';

import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';
import Title from './options/Title';

import logo from '../../assets/images/rs_school_js.svg';

const AboutPage = () => {
  const { path, title } = menuLink;

  return (
    <div className="about">
      <Title text="Memory game" />

      <div className="about__content">
        <p>
          Try to remember as many cards as possible
          <br />
          If you guess a pair of cards from the first time -
          you will recieve to your score +5 points, otherwise +1.
          <br />
          There are three levels of the game.
          In first you should compare 2 pictures.
          In second - picture with the word.
          And in third - you should compare picture with the word,
          but during one minute.
          If you are in time, you will recive a bonus score, otherwise game will be over.
        </p>
        <p>
          In options you may choose propriate settings for you.
          And in Scores - your best scores.
        </p>
        <div className="about__footer">
          <span>
            <span>
              Developed by:
            </span>
            <a href="https://github.com/AStashevskaya">Anastasiya Stashevskaya</a>
          </span>
          <span>2021</span>
          <a href="https://rollingscopes.com/"><img className="logo" src={logo} alt="logo" /></a>

        </div>
      </div>

      <MenuButton
        text={title}
        path={path}
      />
    </div>
  );
};

export default AboutPage;
