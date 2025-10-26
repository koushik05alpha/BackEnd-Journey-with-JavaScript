import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>5 Jokes from Express backend</h1>
      <h3>Jokes: {jokes.length}</h3>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h4>{joke.content}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
