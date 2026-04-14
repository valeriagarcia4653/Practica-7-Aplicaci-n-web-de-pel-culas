import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then((data) => {
        setMovies(data.results);
        console.log(data)
      })
      .catch((error) => {
        console.error("ERROR API:", error);
      });
  }, []);

  if (movies.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}