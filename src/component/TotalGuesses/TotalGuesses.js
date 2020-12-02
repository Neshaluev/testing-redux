import React from "react";
import PropTypes from "prop-types";

const TotalGuesses = (props) => {
  return (
    <h4 data-test="component-total-guesses">
      TotalGuesses: {props.guessCount}
    </h4>
  );
};

TotalGuesses.propTypes = {
  guessCount: PropTypes.number.isRequired,
};

export default TotalGuesses;
