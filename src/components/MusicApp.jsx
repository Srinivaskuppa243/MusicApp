import React, { useState }  from 'react'
import Header from './Header'
import Albums from './Albums'
import Player from './Player'
import{albums} from '../data/songsData'

const MusicApp = ({onHandleDark,mode}) => {
    
  let[currSong,setCurrSong]=useState(albums[0].songs[0].src);
  let[currImg,setCurrImg]=useState(albums[0].songs[0].image);
  let[isPlaying,setIsPlaying]=useState(false);

  return (
   <div className='container mx-auto'>
        {/* Header-section start */}
        <Header onHandleDark={onHandleDark} mode={mode}/>
        {/* Header-section end */}
        {/* Album-start */}
        <Albums 
        setCurrSong={setCurrSong} 
        setIsPlaying={setIsPlaying}
        currImg={currImg}
        setCurrImg={setCurrImg}/>
        {/* Album-end */}
        {/* Player-section start */}
        <Player
          currSong={currSong}
          setCurrSong={setCurrSong}
          currImg={currImg}
          setCurrImg={setCurrImg}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          albums={albums}
        />
        {/* Player-section end */}
    </div>
  );
};

export default MusicApp
