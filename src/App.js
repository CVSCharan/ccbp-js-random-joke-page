import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(
    " Click the button below to get a random Joke!"
  );
  const [jokesCount, setJokesCount] = useState(0);

  useEffect(() => {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.text();
      })
      .then(function (Data) {
        console.log(JSON.parse(Data).value);
        setJoke(JSON.parse(Data).value);
      });
  }, [jokesCount]);

  const onClickButton = () => {
    setJokesCount(jokesCount + 1);
  };

  return (
    <div className="bg-container p-3 d-flex flex-column justify-content-center text-center">
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png"
        className="w-25 ml-auto mr-auto"
        alt="img"
      />
      <p id="jokeText" className="joke-text mt-4">
        {joke}
      </p>
      <div className="d-none mt-5 mb-5" id="spinner">
        <div className="d-flex flex-row justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      </div>
      <button
        id="jokeBtn"
        className="joke-button p-1 ml-auto mr-auto mt-3"
        onClick={onClickButton}
      >
        Joke
      </button>
    </div>
  );
}

export default App;
