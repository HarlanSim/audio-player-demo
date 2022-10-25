import React, { useEffect, useState } from 'react';
import { ISong } from '../../utils/interfaces';
import PlaybackDisplay from '../playback-display/PlaybackDisplay';
import SongTable from '../song-table/SongTable';

type PlayerProps = {
  songs: ISong[];
};

const Player = ({ songs }: PlayerProps) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffleToggle, setShuffleToggle] = useState(false);
  const [repeatToggle, setRepeatToggle] = useState(false);
  const [previousSongs, setPreviousSongs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        if (currentSongTime < songs[currentSongIndex].duration) {
          setCurrentSongTime(currentSongTime + 1);
        } else {
          setNextSong();
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, currentSongTime, setCurrentSongTime, currentSongIndex]);

  const setNextSong = () => {
    if (repeatToggle) {
      repeatSong();
      return;
    }
    addToPreviousSongs(currentSongIndex);
    if (shuffleToggle) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      playSong(randomIndex);
    } else {
      if (currentSongIndex < songs.length - 1) {
        playSong(currentSongIndex + 1);
      } else {
        setIsPlaying(false);
      }
    }
  };

  const addToPreviousSongs = (songIndex) => {
    let newPreviousSongs = [...previousSongs];
    newPreviousSongs.push(songIndex);
    if (newPreviousSongs.length > 50) {
      newPreviousSongs.splice(0, 20);
    }
    setPreviousSongs(newPreviousSongs);
  };

  const playPrevious = () => {
    if (currentSongTime < 5 && previousSongs.length > 0) {
      let newPreviousSongs = [...previousSongs];
      let newSongIndex = newPreviousSongs.pop();
      setPreviousSongs(newPreviousSongs);
      playSong(newSongIndex);
    } else {
      repeatSong();
    }
  };

  const repeatSong = () => {
    setCurrentSongTime(0);
  };

  const playSong = (songIndex) => {
    setCurrentSongIndex(songIndex);
    setCurrentSongTime(0);
  };
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center bg-gray-100'>
      <SongTable
        songs={songs}
        currentSongIndex={currentSongIndex}
        playSong={playSong}
      />
      <PlaybackDisplay
        song={songs[currentSongIndex]}
        setNextSong={setNextSong}
        playPrevious={playPrevious}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        shuffleToggle={shuffleToggle}
        setShuffleToggle={setShuffleToggle}
        repeatToggle={repeatToggle}
        setRepeatToggle={setRepeatToggle}
        currentSongTime={currentSongTime}
        setCurrentSongTime={setCurrentSongTime}
      />
    </div>
  );
};

export default Player;
