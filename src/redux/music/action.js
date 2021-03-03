import {
  TOGGLE_MUSIC, TOGGLE_SOUND, TURN_UP_MUSIC, TURN_UP_SOUND, TURN_DOWN_MUSIC, TURN_DOWN_SOUND,
} from '../constants';

const toggleMusic = () => ({
  type: TOGGLE_MUSIC,
});

const toggleSound = () => ({
  type: TOGGLE_SOUND,
});

const turnUpMusic = () => ({
  type: TURN_UP_MUSIC,
});

const turnUpSound = () => ({
  type: TURN_UP_SOUND,
});

const turnDownMusic = () => ({
  type: TURN_DOWN_MUSIC,
});

const turnDownSound = () => ({
  type: TURN_DOWN_SOUND,
});

export {
  toggleMusic, toggleSound, turnDownMusic, turnUpMusic, turnDownSound, turnUpSound,
};
