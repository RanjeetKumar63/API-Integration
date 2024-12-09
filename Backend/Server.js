const express = require("express");

// const cors = require("cors");
const app = express();

// app.use(cors);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another  joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is third joke",
    },
    {
      id: 4,
      title: "A four joke",
      content: "This is forth joke",
    },
    {
      id: 5,
      title: "A five joke",
      content: "This is fifth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
