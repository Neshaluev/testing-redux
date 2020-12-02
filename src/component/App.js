import React from "react";
import { connect } from "react-redux";

import "./App.css";
import {
  getSecretWord,
  resetGame,
  setUserEntering,
  setUserSecretWord,
} from "../redux/action";
import Congrats from "./Congrats/Congrats";
import Input from "./Input/Input";
import GuessedWords from "./GuessedWord/GuessedWords";
import TotalGuesses from "./TotalGuesses/TotalGuesses";
import NewWordButton from "./NewWordButton/NewWordButton";
import SecretWordReveal from "./SecretWordReveal/SecretWordReveal";
import EnterWordButton from "./EnterWordButton/EnterWordButton";
import EnterWordForm from "./EnterWordForm/EnterWordForm";

export class UnconnectedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // get the secret word-guess
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container" data-test="component-app">
        <h2>Jotto</h2>
        <div>The secret word {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <SecretWordReveal display={false} secretWord={this.props.secretWord} />
        <NewWordButton display={true} resetAction={this.props.resetGame} />
        <Input />
        <TotalGuesses guessCount={this.props.guessedWords.length} />
        <EnterWordButton
          display={this.props.guessedWords.length === 0}
          buttonAction={this.props.setUserEntering}
        />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord,
  gaveUp: state.gaveUp,
});

const actions = {
  getSecretWord,
  resetGame,
  setUserEntering,
  setUserSecretWord,
};

export default connect(mapStateToProps, actions)(UnconnectedApp);

// <Congrats success={true} />
// <GuessedWords
//   guessedWords={[
//     { guessedWord: "train", letterMatchCount: 3 },
//     { guessedWord: "agile", letterMatchCount: 1 },
//     { guessedWord: "party", letterMatchCount: 5 },
//   ]}
