import React from "react";
import Filter from "../Filter/Filter";
import MovieForm from "../MovieForm/MovieForm";
import Stars from "../Stars/Stars";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ setSearchTxt, setSearchRate, searchRate, addMovie }) => {
  return (
    <div className="header">
      <h1>Go My Movie</h1>

      <ul className="navigationlist">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/movieslist">
          <li>Movies List</li>
        </Link>
      </ul>

      <MovieForm isEdit={false} addMovie={addMovie} />

      <div className="filter">
        <Stars
          isEdit={true}
          setSearchRate={setSearchRate}
          searchRate={searchRate}
        />
        <Filter setSearchTxt={setSearchTxt} />
      </div>
    </div>
  );
};

export default Header;
