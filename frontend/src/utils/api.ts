const API_BASE_URL = "http://localhost:5000"; 

export const fetchSongs = async () => {
  const response = await fetch(`${API_BASE_URL}/songs`);
  return response.json();
};

export const fetchFavorites = async () => {
  const response = await fetch(`${API_BASE_URL}/favorites`);
  return response.json();
};

export const toggleFavorite = async (id: number, isFavorite: boolean) => {
  const method = isFavorite ? "DELETE" : "POST";
  await fetch(`${API_BASE_URL}/favorites/${id}`, { method });
};
