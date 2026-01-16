import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start_screen">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button className="button" onClick={startGame}>COMEÇAR</button>
    </div>
  );
};

export default StartScreen;
 