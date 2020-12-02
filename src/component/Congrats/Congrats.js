import React from "react";
import PropTypes from "prop-types";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <h2>Congrats</h2>
        <span data-test="congrats-message">
          Congrations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
