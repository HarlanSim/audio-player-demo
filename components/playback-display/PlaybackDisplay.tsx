import React from 'react';
import SongDetails from './SongDetails';
import PlaybackButtons from './PlaybackButtons';
import PlaybackProgress from './PlaybackProgress';
import { ISong } from '../../utils/interfaces';

type PlaybackDisplayProps = {
  song: ISong;
  currentSongTime: number;
  setCurrentSongTime: Function;
  setNextSong: Function;
  playPrevious: Function;
  isPlaying: boolean;
  setIsPlaying: Function;
  shuffleToggle: boolean;
  setShuffleToggle: Function;
  repeatToggle: boolean;
  setRepeatToggle: Function;
};

const PlaybackDisplay = ({
  song,
  currentSongTime,
  setCurrentSongTime,
  setNextSong,
  playPrevious,
  isPlaying,
  setIsPlaying,
  shuffleToggle,
  setShuffleToggle,
  repeatToggle,
  setRepeatToggle,
}: PlaybackDisplayProps) => {
  return (
    <div className='playback-footer flex flex-row items-center w-9/12 justify-between gap-16'>
      <SongDetails artist={song.artist} title={song.title} />
      <PlaybackButtons
        setNextSong={setNextSong}
        playPrevious={playPrevious}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        shuffleToggle={shuffleToggle}
        setShuffleToggle={setShuffleToggle}
        repeatToggle={repeatToggle}
        setRepeatToggle={setRepeatToggle}
      />
      <PlaybackProgress
        currentSongTime={currentSongTime}
        setCurrentSongTime={setCurrentSongTime}
        duration={song.duration}
      />
    </div>
  );
};

export default PlaybackDisplay;
