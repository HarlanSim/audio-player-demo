import React from 'react';
import Player from '../components/player/Player';
const songs = require('./songlist.json').songs;

export default function Home() {
  return <Player songs={songs} />;
}
