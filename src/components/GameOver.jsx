import "./GameOver.css";

const GameOver = ({ retry, score, word, category }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <p>Score: {score}</p>
      <p>Category: {category}</p>
      <p>Word: {word}</p>
      <button className="button" onClick={retry}>
        Restart
      </button>
    </div>
  );
};

export default GameOver;
