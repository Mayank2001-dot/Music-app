"use client";

import React, { useState, useEffect } from "react";
import SongList from "@/components/SongList";
import FavoriteList from "@/components/FavoriteList";
import SearchBar from "@/components/SearchBar";
import { fetchSongs, fetchFavorites, toggleFavorite } from "@/utils/api";

interface Song {
  id: number;
  title: string;
  artist: string;
}

const HomePage: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [favorites, setFavorites] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getSongs = async () => {
      try {
        
        const data = await fetchSongs();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    getSongs();
  }, []);

  const handleToggleFavorite = (song: Song) => {
    if (!song || typeof song !== "object") {
      console.error("Invalid song object received:", song);
      return;
    }

    setFavorites((prevFavorites = []) => {
      if (!Array.isArray(prevFavorites)) {
        console.error("Favorites state is not an array:", prevFavorites);
        return [];
      }

      return prevFavorites.some((fav) => fav.id === song.id)
        ? prevFavorites.filter((fav) => fav.id !== song.id)
        : [...prevFavorites, song];
    });
  };

  const filteredSongs = searchQuery
    ? songs.filter((song) =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : songs;

  return (
    <>
    <head>
  <title>My Music App</title>
</head>
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>🎵 My Music App</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SongList songs={filteredSongs} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
      <FavoriteList favorites={favorites} onToggleFavorite={handleToggleFavorite} />
    </div>
    </>
  );
};

export default HomePage;
