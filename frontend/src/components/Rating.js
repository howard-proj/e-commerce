import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {/* 1st star */}
      <span>
        {/* color: color is the same with the line below */}
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      {/* 2nd star */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      {/* 3rd star */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      {/* 4th star */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      {/* 5th star */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      {/* if text exists, show it */}
      <span>{text && text}</span>
    </div>
  );
};

// Set the default color of the stars
Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
