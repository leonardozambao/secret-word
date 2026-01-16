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
    if (letter.trim() === "") return;
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex justify-between w-full items-center text-gray-200 font-semibold px-4">
        <p className="text-xl">
          Score: <span className="text-emerald-400">{score}</span>
        </p>
        <p className="text-lg">
          Attempts left:{" "}
          <span className="text-red-400 font-bold">{guesses}</span>
        </p>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Guess the word
        </h1>
        <h3 className="text-xl text-gray-300">
          Tip:{" "}
          <span className="text-yellow-300 font-bold capitalize">
            {pickedCategory}
          </span>
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-3 my-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-inner">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span
              key={i}
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-900 bg-white border-2 border-yellow-400 rounded-lg uppercase shadow-md transition-all duration-300 transform hover:scale-105"
            >
              {letter}
            </span>
          ) : (
            <span
              key={i}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 border-2 border-white/30 rounded-lg shadow-inner"
            ></span>
          )
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
            className="w-16 h-16 text-center text-3xl bg-gray-800 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 transition-all uppercase"
            autoComplete="off"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95 duration-200 border-b-4 border-emerald-800 hover:border-emerald-700"
          >
            PLAY
          </button>
        </form>
      </div>

      {wrongLetters.length > 0 && (
        <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
          <p className="text-red-300 mb-2 font-medium">Wrong letters:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {wrongLetters.map((letter, i) => (
              <span
                key={i}
                className="text-lg font-mono text-red-200 uppercase bg-red-900/50 px-3 py-1 rounded"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
