const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const TodoRoute = require("./routes/TodoRoute");
const bodyParser = require("body-parser");

dotenv.config();

const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err: any) => console.log(err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/", TodoRoute);
