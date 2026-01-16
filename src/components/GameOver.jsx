const GameOver = ({ retry, score, word, category }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-md shadow-2xl max-w-lg w-full">
      <h1 className="text-5xl font-extrabold text-red-500 drop-shadow-md">
        Game Over
      </h1>

      <div className="text-center space-y-4 w-full">
        <p className="text-lg text-gray-300">
          The word was:{" "}
          <span className="text-yellow-400 font-bold text-2xl uppercase block mt-1">
            {word}
          </span>
        </p>
        <p className="text-gray-400">
          Category:{" "}
          <span className="text-yellow-200 capitalize">{category}</span>
        </p>
        <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 mt-4">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">
            Total Score
          </p>
          <p className="text-4xl font-black text-emerald-400">{score}</p>
        </div>
      </div>

      <button
        className="px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 duration-200 ring-2 ring-blue-500/50 mt-4"
        onClick={retry}
      >
        Try Again
      </button>
    </div>
  );
};

export default GameOver;
