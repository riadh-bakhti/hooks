import React from 'react';
import Stars from '../Stars/Stars';
import "./MovieCard.css";

const MovieCard = ({movie:{title, image, year, desc, rate, ID}}) => {
  
    return (
      <div id="container">
      <div className="product-details">
        <h1>{title}</h1>

        <p className="information">{year}</p>

        <Stars rate={rate} isEdit={false} />


        <div className="control">
          <button>
            <span className="details">show More details</span>
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
