


import react,{useState} from 'react';

function App() {
  const [match, setMatch] = useState({
    score: 76,
    wicket: 2,
    ball:50,
  });

  const addScore = (score) => {
    setMatch({
      ...match,
      score: match.score + score,
    });
  };

  const addWicket = () => {
    if(match.wicket >11){
      return;
    }
    setMatch({
      ...match,
      wicket: match.wicket + 1,
    });
  };

  const addBall = () => {
    setMatch({
      ...match,
      ball: match.ball + 1,
    });
  };






  
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              (match.score)
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here 
              (match.wicket)

            }
          </h1>
        </div>

        <div>
          Over:{}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.

              (match.ball/6).toFixed(1)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
        onClick = {() => {
          addScore(1);
        }}
        className="addScore1">Add 1</button>
        <button
        onClick = {() => {
          addScore(4);
        }}
        className="addScore4">Add 4</button>
        <button
        onClick = {() => {
          addScore(6);
        }}
        className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}

        <button onClick ={() => {
          addWicket(1);
        }
        } >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button 
        onClick = {() => {
         addBall(1) 
        }}
        >Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      {/* If score reaches greater than 100, no buttons should work */}

      <h1 className="status">{ 
      (match.score >= 100) ? "India Won" : ""
      } </h1>
      

      
    </div>
  );
}

export default App;