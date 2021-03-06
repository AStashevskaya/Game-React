import React from 'react';
import { useSelector } from 'react-redux';

import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';
import Title from './options/Title';

import SCORE_LOC from '../../constants/localisation/scores';
import menuLinks from '../../constants/localisation/menuLinks';

const ScoresPage = () => {
  const { path } = menuLink;
  const lang = useSelector((state) => state.game.language);
  let results = JSON.parse(localStorage.getItem('scores')) || [];
  results = results.sort((a, b) => b.score - a.score);
  results = results.length <= 10 ? results : results.slice(0, 10);

  const { SCORE, NAME, DATE } = SCORE_LOC[lang];
  const { SCORES, MENU } = menuLinks[lang];

  return (
    <div className="score">
      <Title text={SCORES} />
      <div className="score__content">
        <table className="score__table">
          <thead>
            <tr className="score__heading">
              <td>№</td>
              <td>{NAME}</td>
              <td>{DATE}</td>
              <td>{SCORE}</td>
            </tr>
          </thead>
          <tbody>
            {results.map((row, idx) => (
              <tr key={idx.toString()}>
                <td>{idx + 1}</td>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.score}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <MenuButton
        text={MENU}
        path={path}
      />
    </div>
  );
};

export default ScoresPage;
