// import dotenv package and configure it
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// imported routes to app.js from authRouter in routes folder
const authRouter = require("./routes/authRouter");

const movieRouter = require("./routes/movieRouter");

const bookmarkRouter = require("./routes/bookmarkRouter");

//imported error to app.js from error in middlewares folder
const error = require("./middlewares/error");

//spins up a new express application
const app = express();

const port = 4000;

app.use(cors());

// middleware that allows access to the req.body on all request (without this you cant test on postman)
app.use(express.json());

// middleware for login and register for authentication router
app.use("/api/auth", authRouter);

//middleware for movie router
app.use("/api/movie", movieRouter);

// middleware for bookmark router
app.use("/api/bookmark", bookmarkRouter);

//custom middleware for errors
app.use(error);

// start listening on a given port
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");

    await app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("unable to connect");
  }
};

start();

// jessicaokeke50
// TBjvMpgnyZjBCMDg

// mongodb+srv://jessicaokeke50:TBjvMpgnyZjBCMDg@cluster0.j2b3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
