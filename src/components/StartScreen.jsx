const StartScreen = ({ startGame }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-lg tracking-wider">
        Secret Word
      </h1>
      <p className="text-xl text-gray-300 font-light tracking-wide">
        Click the button below to start playing
      </p>
      <button
        className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 duration-200 border-2 border-transparent hover:border-blue-300 ring-2 ring-blue-500/50"
        onClick={startGame}
      >
        START
      </button>
    </div>
  );
};

export default StartScreen;
