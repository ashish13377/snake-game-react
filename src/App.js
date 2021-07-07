import './App.css';

function App() {
  return (
    <div classNameName="container noselect">
      <div className="wrapper">
        <button id="replay">
          <i className="fas fa-play"></i>
          RESTART
        </button>
        <div id="canvas">

        </div>
        <div id="ui">
          <h2>SCORE</h2>
          <span id="score">00</span>
        </div>
      </div>
      <div id="author">
        <h1>SNAKE</h1> <span>by Ashish</span>
      </div>
    </div>
  );
}

export default App;
