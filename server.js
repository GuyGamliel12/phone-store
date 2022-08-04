const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
// API calls
app.get("/api/phones", (req, res) => {
  fs.readFile("./phones.json", "utf8", (err, data) => {
    if (err) {
      console.log("Error");
    }
    if (data) {
      const phones = JSON.parse(data);
      res.send(phones);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
