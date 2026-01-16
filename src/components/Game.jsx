import "./Game.css";
import { useState, useRef } from "react";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus(); //focus on input
  };

  return (
    <div className="game">
      <p className="Points">Pontuação: {score}</p>
      <h1 className="title">Adivinhe a palavra:</h1>
      <h2 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h2>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            value={letter}
            ref={letterInputRef}
            onChange={(e) => setLetter(e.target.value)}
          />
          <button className="button" type="submit">
            Jogar
          </button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras erradas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Game;
