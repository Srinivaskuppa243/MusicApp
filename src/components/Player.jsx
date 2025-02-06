import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
const Player = ({currSong,setCurrSong,isPlaying,setIsPlaying}) => {
  return (
    <div className='player mt-2 container p-3 shadow border position-fixed'>
      <AudioPlayer
        className='audio-player'
        autoPlay={isPlaying}
        src={currSong}
        onPlay={(e)=>setIsPlaying(true)}
        onPause={(e)=>setIsPlaying(false)}
      />
    </div>
  )
}

export default Player
