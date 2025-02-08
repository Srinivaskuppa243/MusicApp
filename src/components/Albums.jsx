import React from "react";
import { albums } from "../data/songsData";

const Albums = ({ setCurrSong, setIsPlaying, currImg, setCurrImg }) => {
  const handleSongClick = (song) => {
    setCurrImg(song.image);
    setCurrSong(song.src);
    setIsPlaying(true);
  };

  // Flatten all songs from albums into a single list
  const allSongs = albums.flatMap((album) => album.songs);

  return (
    <div className="albums container p-4 shadow border border-danger position-fixed">
      {/* Current Playing Song Image */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow banner-image">
            <img src={currImg} alt="Current Album" className="banner-music-img" />
          </div>
        </div>
      </div>

      {/* Songs List (without album grouping) */}
      <div className="container">
        <div className="row m-2">
          {allSongs.map((song) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={song.id}>
              <div
                className="card shadow album"
                onClick={() => handleSongClick(song)}
                style={{ cursor: "pointer" }}
              >
                <img src={song.image} alt={song.title} className="album-cover img-fluid" />
                <div className="card-body text-center">
                  <h5 className="card-title">{song.title}</h5>
                  <p className="card-text">{song.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
