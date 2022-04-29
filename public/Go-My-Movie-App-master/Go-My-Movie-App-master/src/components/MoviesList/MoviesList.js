import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieslist.css";

const MoviesList = ({ movies, searchTxt, searchRate, setMovies }) => {
  return (
    <div className="movieslist">
      {movies
        .filter(
          (movie, i) =>
            movie.title.toLowerCase().includes(searchTxt.toLowerCase()) &&
            movie.rate >= searchRate
        )
        .map((movie, i) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            movies={movies}
            setMovies={setMovies}
          />
        ))}
    </div>
  );
};

export default MoviesList;
