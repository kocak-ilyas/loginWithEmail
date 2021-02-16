import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 
'mongodb+srv://cakir:cakir123@cluster0.xxl81.mongodb.net/cakirDB?retryWrites=true&w=majority';
// `mongodb+srv://${process.env.REACT_APP_mongodb_user}:${process.env.REACT_APP_mongodb_key}@cluster0.xxl81.mongodb.net/${process.env.REACT_APP_mongodb_dataBase}?retryWrites=true&w=majority`;
// `mongodb+srv://${process.env.user}:${process.env.key}@cluster0.xxl81.mongodb.net/${process.env.dataBase}?retryWrites=true&w=majority`;

const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);