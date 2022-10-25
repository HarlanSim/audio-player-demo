import React from 'react';

type SongDetailsProps = {
  artist: string;
  title: string;
};

const SongDetails = ({ artist, title }: SongDetailsProps) => {
  return (
    <div className='song-details'>
      <div className='text-lg text-gray-900'>{title}</div>
      <div className='text-sm text-gray-900 font-light'>{artist}</div>
    </div>
  );
};

export default SongDetails;
