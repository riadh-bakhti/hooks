import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () => {
  const data = [
    {
      title: "Never Back Down",
      rate: 4,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTkzNDg3MTIyMF5BMl5BanBnXkFtZTcwOTAwNDc1MQ@@._V1_FMjpg_UX1000_.jpg",
      desc: "Never Back Down is a 2008 American martial arts film directed by Jeff Wadlow and starring Sean Faris, Amber Heard, Cam Gigandet, and Djimon Hounsou. It tells the story of a frustrated and conflicted teenager who arrives at a new high school and discovers an underground fight club there.",
      year: "2008",
      trailer: "",
      link: "",
      id: uuidv4(),
    },
    {
      title: "Titanic",
      rate: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      desc: "The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes. They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912.",
      year: "1997",
      trailer: "",
      link: "",
      id: uuidv4(),
    },
    {
      title: "Matrix",
      rate: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      desc: "It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.",
      year: "1999",
      trailer: "",
      link: "",
      id: uuidv4(),
    },
  ];

  const [searchTxt, setSearchTxt] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const [movies, setMovies] = useState(data);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Header
        setSearchTxt={setSearchTxt}
        setSearchRate={setSearchRate}
        searchRate={searchRate}
        addMovie={addMovie}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/movieslist"
          element={
            <MoviesList
              movies={movies}
              searchTxt={searchTxt}
              searchRate={searchRate}
              setMovies={setMovies}
            />
          }
        />

        <Route
          path="/moviedetails/:idmovie"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </div>
  );
};

export default App;
