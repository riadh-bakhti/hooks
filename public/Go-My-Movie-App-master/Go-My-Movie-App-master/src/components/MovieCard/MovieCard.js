import { Link } from "react-router-dom";
import MovieForm from "../MovieForm/MovieForm";
import Stars from "../Stars/Stars";
import "./moviecard.css";

const MovieCard = ({
  movie: { title, desc, year, image, rate, id },
  movies,
  setMovies,
}) => {
  return (
    <div id="container">
      <div className="product-details">
        <h1>{title}</h1>

        <p className="information">{year}</p>

        <Stars rate={rate} isEdit={false} />

        <MovieForm
          isEdit={true}
          id={id}
          movies={movies}
          setMovies={setMovies}
        />

        <div className="control">
          <button>
            <Link to={`/moviedetails/${id}`}>
              <span className="details">show More details</span>
            </Link>
          </button>
        </div>
      </div>

      <div className="product-image">
        <img src={image} alt="" />
        <div className="info">
          <h2> Description</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
