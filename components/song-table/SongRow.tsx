import React from 'react';

const SongRow = ({ artist, title, index, currentSongIndex, playSong }) => {
  const textColourClass =
    currentSongIndex === index ? 'text-blue-600' : 'text-gray-900';

  return (
    <tr
      className='bg-white border-b border-l transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer'
      key={index}
      onClick={() => playSong(index)}
    >
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${textColourClass}`}
      >
        {artist}
      </td>
      <td
        className={`text-sm font-light px-6 py-4 whitespace-nowrap ${textColourClass}`}
      >
        {title}
      </td>
    </tr>
  );
};

export default SongRow;
