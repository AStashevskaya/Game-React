import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import { toggleMusic, toggleSound } from '../../redux/music/action';
// import toggleSound from '../../redux/sound/SoundAction';

// eslint-disable-next-line import/extensions
import { menuLink } from '../../data/navBarData';
import MenuButton from './MenuButton';

const OptionsPage = ({ getClick }) => {
  const { path, title } = menuLink;

  const isMusicOn = useSelector((state) => state.musicOn);
  const isSoundOn = useSelector((state) => state.soundOn);
  const dispatch = useDispatch();

  const switchSound = (e) => {
    e.preventDefault();
    dispatch(toggleSound());
    getClick();
  };

  const switchMusic = (e) => {
    e.preventDefault();
    dispatch(toggleMusic());
  };

  return (
    <div className="options">
      <div className="options__button">
        <button type="submit" onClick={switchSound}>
          {isSoundOn ? 'Sound on' : 'Sound off'}
        </button>

      </div>
      <div className="options__button">
        <button type="submit" onClick={switchMusic}>
          {isMusicOn ? 'Music on' : 'Music off'}
        </button>

      </div>
      <MenuButton
        text={title}
        path={path}
      />
    </div>

  );
};

// const OptionsPage = ({
//   MusicOn, SoundOn, toggleMusic, toggleSound, getClick,
// }) => {
//   const { path, title } = menuLink;

//   const handleClick = (e) => {
//     toggleSound(e);
//     getClick();
//   };

//   return (
//     <div className="options">
//       <div className="options__button">
//         <button type="submit" onClick={handleClick}>
//           {SoundOn ? 'Sound on' : 'Sound off'}
//         </button>

//       </div>
//       <div className="options__button">
//         <button type="submit" onClick={toggleMusic}>
//           {MusicOn ? 'Music on' : 'Music off'}
//         </button>

//       </div>
//       <MenuButton
//         text={title}
//         path={path}
//       />
//     </div>

//   );
// };

OptionsPage.defaultProps = {
  // MusicOn: false,
  // SoundOn: false,
  // togggleMusic: () => {},
  // togggleSound: () => {},
  getClick: () => {},
};

OptionsPage.propTypes = {
  // MusicOn: PropTypes.bool,
  // SoundOn: PropTypes.bool,
  // togggleMusic: PropTypes.func,
  // togggleSound: PropTypes.func,
  getClick: PropTypes.func,
};

export default OptionsPage;
