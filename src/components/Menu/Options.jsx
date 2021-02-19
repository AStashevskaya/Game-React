import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

const OptionsPage = ({
  MusicOn, SoundOn, toggleMusic, toggleSound, getClick,
}) => {
  const { path, title } = menuLink;

  const handleClick = (e) => {
    toggleSound(e);
    getClick();
  };

  return (
    <div className="options">
      <div className="options__button">
        <button type="submit" onClick={handleClick}>
          {SoundOn ? 'Sound on' : 'Sound off'}
        </button>

      </div>
      <div className="options__button">
        <button type="submit" onClick={toggleMusic}>
          {MusicOn ? 'Music on' : 'Music off'}
        </button>

      </div>
      <MenuButton
        text={title}
        path={path}
      />
    </div>

  );
};

OptionsPage.defaultProps = {
  MusicOn: false,
  SoundOn: false,
  toggleMusic: () => {},
  toggleSound: () => {},
  getClick: () => {},
};

OptionsPage.propTypes = {
  MusicOn: PropTypes.bool,
  SoundOn: PropTypes.bool,
  toggleMusic: PropTypes.func,
  toggleSound: PropTypes.func,
  getClick: PropTypes.func,
};

export default OptionsPage;
