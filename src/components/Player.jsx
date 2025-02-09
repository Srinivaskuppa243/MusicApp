import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
const Player = ({ currSong, setCurrSong, isPlaying, setIsPlaying, albums, currImg, setCurrImg }) => {
  const allSongs = albums.flatMap(album => album.songs)
  const currentIndex = allSongs.findIndex(song => song.src === currSong);
  const handleNext = () => {
    let nextIndex = (currentIndex + 1) % allSongs.length;
    setCurrSong(allSongs[nextIndex].src);
    setCurrImg(allSongs[nextIndex].image);
  };
  const handleBack = () => {
    let prevIndex = (currentIndex - 1 + allSongs.length) % allSongs.length;
    setCurrSong(allSongs[prevIndex].src);
    setCurrImg(allSongs[prevIndex].image);
  }
  return (
    <div className='player mt-2 container p-3 shadow border position-fixed'>
      <AudioPlayer
        className='audio-player'
        autoPlay={isPlaying}
        src={currSong}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        showSkipControls={true}
        onClickNext={handleNext}
        onClickPrevious={handleBack}
        onEnded={handleNext}
      />
    </div>
  )
}

export default Player
