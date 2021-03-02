import React from 'react';

import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';
import Title from './options/Title';

const ScoresPage = () => {
  const { path, title } = menuLink;
  let results = JSON.parse(localStorage.getItem('scores')) || [];
  results = results.sort((a, b) => b.score - a.score);
  results = results.length <= 10 ? results : results.slice(0, 10);

  return (
    <div className="score">
      <Title text="scores" />
      <div className="score__content">
        <table className="score__table">
          <thead>
            <tr className="score__heading">
              <td>№</td>
              <td>Name</td>
              <td>Date</td>
              <td>Score</td>
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
        text={title}
        path={path}
      />
    </div>
  );
};

export default ScoresPage;
