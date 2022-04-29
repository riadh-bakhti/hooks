import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import Stars from "../Stars/Stars";

const Details = ({ movies }) => {
  const { idmovie } = useParams();

  const [movie,  setMovie] = useState({});

  const findMovie = () => {
    setMovie(movies.find((el) => el.id == idmovie));
  };

  useEffect(() => {
    findMovie();
  }, []);

  return (
    <div style={{ marginTop: "150px", textAlign: "center" }}>
      <img style={{maxWidth:"20%"}}  src={movie.image} />
      <h1>{movie.title}</h1>
      <h4 style={{paddingInline : "20%"}}>{movie.desc}</h4>
      <h1>{movie.year}</h1>
       <Stars 
       rate={movie.rate}
       isEdit={false}
       />

{/* <ReactStars

count={5}
value={movie.rate}
edit={false}
size={24}
activeColor="#ffd700"
/> */}
      </div>
  );
};

export default Details;