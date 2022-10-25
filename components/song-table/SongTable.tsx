import React from 'react';
import { TABLE_HEADERS } from '../../utils/constants';
import { ISong } from '../../utils/interfaces';
import SongRow from './SongRow';

type SongListProps = {
  songs: ISong[];
  currentSongIndex: number;
  playSong: Function;
};

const SongTable = ({ songs, currentSongIndex, playSong }: SongListProps) => {
  return (
    <div className='w-9/12 overflow-y-scroll border-b border-t mt-12'>
      <table className='min-w-full'>
        <thead>
          <tr className='border-l'>
            {TABLE_HEADERS.map((headerText: string, headerIdx: number) => (
              <th
                key={headerIdx}
                scope='col'
                className='text-sm select-none font-medium text-gray-900 px-6 py-4 text-left sticky top-0 bg-white border-b'
              >
                {headerText}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {songs.map((song: ISong, songIdx: number) => (
            <SongRow
              artist={song.artist}
              title={song.title}
              key={songIdx}
              index={songIdx}
              currentSongIndex={currentSongIndex}
              playSong={playSong}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
