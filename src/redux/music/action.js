import { TOGGLE_MUSIC, TOGGLE_SOUND } from '../constants';

const toggleMusic = () => ({
  type: TOGGLE_MUSIC,
});

const toggleSound = () => ({
  type: TOGGLE_SOUND,
});

export { toggleMusic, toggleSound };
