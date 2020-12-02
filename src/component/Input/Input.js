import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { guessWord } from "../../redux/action";

export class UnconnectInput extends Component {
  constructor(props) {
    super(props);
    this.state = { currentGuess: "" };
    this.submitGuessed = this.submitGuessed.bind(this);
  }

  submitGuessed(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  }
  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sn-3"
          id="word-guess"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
          placeholder="enter guess"
        />
        {/* 
        mock fn onClick={() => this.props.guessWord("train")} 
        const guessWordArg = guessWordMock.mock.calls[0][0]
        */}
        <button
          onClick={(e) => this.submitGuessed(e)}
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Sumbit
        </button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}
const mapStateToProps = ({ success }) => ({
  success,
});
export default connect(mapStateToProps, { guessWord })(UnconnectInput);
