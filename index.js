// const express = require("express");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const usersRouter = require('./routes/users')

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRouter from './routes/users.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("home");
});

//routes middleware:
app.use('/users', usersRouter)

//DB connection:
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("conectado a mongo atlas")
);

app.listen(PORT, () =>
  console.log(`server running on http://www.localhost:${PORT}`)
);
