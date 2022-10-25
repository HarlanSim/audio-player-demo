import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faRepeat,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';

type PlaybackButtonsProps = {
  setNextSong: Function;
  playPrevious: Function;
  isPlaying: boolean;
  setIsPlaying: Function;
  shuffleToggle: boolean;
  setShuffleToggle: Function;
  repeatToggle: boolean;
  setRepeatToggle: Function;
};

const PlaybackButtons = ({
  setNextSong,
  playPrevious,
  isPlaying,
  setIsPlaying,
  shuffleToggle,
  setShuffleToggle,
  repeatToggle,
  setRepeatToggle,
}: PlaybackButtonsProps) => {
  const iconClassName = (isActive: boolean = false): string => {
    return (
      (isActive ? 'text-blue-600 ' : 'text-gray-900 ') +
      'w-5 h-5 cursor-pointer'
    );
  };
  return (
    <div className='flex gap-4 justify-around'>
      <FontAwesomeIcon
        className={iconClassName(shuffleToggle)}
        icon={faShuffle}
        onClick={() => setShuffleToggle(!shuffleToggle)}
      />
      <FontAwesomeIcon
        className={iconClassName()}
        icon={faBackwardStep}
        onClick={() => playPrevious()}
      />
      <FontAwesomeIcon
        className={iconClassName()}
        icon={isPlaying ? faPause : faPlay}
        onClick={() => setIsPlaying(!isPlaying)}
      />
      <FontAwesomeIcon
        className={iconClassName()}
        icon={faForwardStep}
        onClick={() => setNextSong()}
      />
      <FontAwesomeIcon
        className={iconClassName(repeatToggle)}
        icon={faRepeat}
        onClick={() => setRepeatToggle(!repeatToggle)}
      />
    </div>
  );
};

export default PlaybackButtons;
