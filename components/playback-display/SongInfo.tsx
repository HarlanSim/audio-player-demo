import React from 'react';

type SongInfoProps = {
  artist: string;
  title: string;
};

const SongInfo = ({ artist, title }: SongInfoProps) => {
  return (
    <div className='song-details select-none'>
      <div className='text-lg text-gray-900'>{title}</div>
      <div className='text-sm text-gray-900 font-light'>{artist}</div>
    </div>
  );
};

export default SongInfo;
