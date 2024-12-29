import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {

  // useEffect(() => {
  //   // This effect runs whenever `someProp` changes
  //   console.log('The value of someProp is:', song);
  // }, [song]);

  const dispatch = useDispatch ();

  const handlePauseClick = () => {
    dispatch(playPause(false));

  console.log(isPlaying);

  }

  const handlePlayClick = () => {
    dispatch(setActivesong({ song, data, i }));
    dispatch(playPause(true));

  }

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 
      backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div
          className={`absolute inset-0 justify-center 
            items-center bg-black bg-opacity-50 
            group-hover:flex ${activeSong?.title === song.title ? 
            'flex bg-black bg-opacity-70' : 'hidden'}`}
        >
        <PlayPause 
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
        </div> 
        <img alt="song_img" src={song.attributes.artwork.url} />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>
            {song.attributes.albumName}
          </Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.attributes.artistName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
