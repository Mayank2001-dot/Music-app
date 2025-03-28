"use client";

import React from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
}

interface SongListProps {
  songs: Song[];
  favorites: Song[];
  onToggleFavorite: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, favorites, onToggleFavorite }) => {
  return (
    <div>
      <h2>🎵 Music Library</h2>
      <ul id="song-list">
        {songs.map((song) => (
          <li key={song.id} style={{ marginBottom: "10px", listStyle: "none" }}>
            <strong>{song.title}</strong> <br />
            <small>{song.artist}</small>
            <button
              onClick={() => onToggleFavorite(song)}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                fontSize: "18px",
                background: "none",
                border: "none",
                color: favorites.some((fav) => fav.id === song.id) ? "red" : "gray",
              }}
            >
              {favorites.some((fav) => fav.id === song.id) ? "❤️" : "🤍"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
