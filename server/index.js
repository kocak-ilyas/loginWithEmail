import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"
const app = express();

app.use("/posts", postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL ="mongodb+srv://cakir:cakir123@cluster0.xxl81.mongodb.net/";
  // "mongodb+srv://cakir:cakir123@cluster0.xxl81.mongodb.net/<dbname>?retryWrites=true&w=majority";
  // "mongodb+srv://cakir:cakir123@cluster0.xxl81.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
