// to import express in this file use moduleJS
import express from "express";

// create app use express
const app = express();

// get some request and back response

// app.get("/", (req, res) => {
//   // response path
//   res.send("Server is Running");
// });

app.get("/api/jokes", (req, res) => {
  // get a list of 5 jokes
  const jokes = [
    {
      id: 1,
      title: "JavaScript Bug",
      content:
        "Why did the JavaScript developer go broke? Because he kept using 'var' when he should’ve used 'let it go'!",
    },
    {
      id: 2,
      title: "Computer Therapy",
      content:
        "My computer suddenly started singing... turns out it had too many 'bytes' of emotion.",
    },
    {
      id: 3,
      title: "Database Pun",
      content:
        "Why did the SQL query break up with the table? It found a better 'join'.",
    },
    {
      id: 4,
      title: "CSS Problem",
      content:
        "I tried to style my hair with CSS... now it’s cascading everywhere!",
    },
    {
      id: 5,
      title: "Programmer Life",
      content:
        "A programmer’s wife tells him: 'Go to the store and get a loaf of bread. If they have eggs, get a dozen.' He comes home with 12 loaves of bread.",
    },
  ];

  // response path
  res.send(jokes);
});

// defining server port use environment variables
const port = process.env.PORT || 3000;

// app is listening port
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
