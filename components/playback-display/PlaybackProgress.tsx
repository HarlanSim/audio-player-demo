import React from 'react';

type PlaybackProgressProps = {
  currentSongTime: number;
  setCurrentSongTime: Function;
  duration: number;
};

const PlaybackProgress = ({
  currentSongTime,
  setCurrentSongTime,
  duration,
}: PlaybackProgressProps) => {
  const progressPercentage: string = (
    100 *
    (currentSongTime / duration)
  ).toString();

  const getPlaybackTime = (seconds) => {
    let mins = Math.floor(seconds / 60);
    seconds = seconds - mins * 60;
    return getTimeString(mins) + ':' + getTimeString(seconds);
  };

  const getTimeString = (time) => {
    if (time === null || time === 0) {
      return '00';
    } else {
      let timeString = time.toString();
      if (timeString.length === 1) {
        timeString = '0' + timeString;
      }
      return timeString;
    }
  };

  const handleChange = (e) => {
    const percentage = e.target.value / 100;
    setCurrentSongTime(Math.floor(duration * percentage));
  };

  return (
    <div className='flex flex-row flex-grow items-center gap-4'>
      <span className='text-sm'>{getPlaybackTime(currentSongTime)}</span>
      <input
        id='default-range'
        type='range'
        value={progressPercentage}
        onChange={(e) => handleChange(e)}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
      />

      <span className='text-sm'>{getPlaybackTime(duration)}</span>
    </div>
  );
};

export default PlaybackProgress;
