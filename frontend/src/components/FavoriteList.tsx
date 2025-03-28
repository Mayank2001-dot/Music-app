"use client";

import React from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
}

interface FavoriteListProps {
  favorites: Song[];
  onToggleFavorite: (song: Song) => void;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites, onToggleFavorite }) => {
  return (
    <div>
      <h2>❤️ Favorites</h2>
      {favorites.length === 0 ? <p>No favorite songs yet.</p> : (
        <ul>
          {favorites.map((song) => (
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
                  color: "red",
                }}
              >
                ❤️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
