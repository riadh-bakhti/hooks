import ReactStars from "react-rating-stars-component";
import React from "react";
import "./stars.css"

const Stars = ({ isEdit, searchRate, rate, setSearchRate }) => {
  const ratingChanged = (newRating) => {
    setSearchRate(newRating);

  };

  return (
    <div className="stars">



      <ReactStars

        count={5}
        value={isEdit ? searchRate : rate}
        onChange={isEdit ? ratingChanged : null}
        edit={isEdit}
        size={24}
        activeColor="#ffd700"
      />
    </div>

  );
};
export default Stars


