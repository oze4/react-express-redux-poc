const express = require("express");
const path = require('path');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8002;

const staticFilesPath = path.resolve(__dirname, './frontend/build');
const staticFiles = express.static(staticFilesPath);
app.use(staticFiles);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/authorize", (req, res) => {
  if (req.body.un === "a" && req.body.pw === "a") {
    res.status(200).send("true");
  } else {
    res.status(200).send("false");
  }
});

app.get("/", (req, res) => {
  const p = path.resolve(__dirname, './frontend/build/index.html');
  res.sendFile(p);
});

// For 404
app.use((req, res) => {
  res.status(404).send("Unable to find that!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
