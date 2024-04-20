import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


// routes
import AuthRoute from './routes/AuthRoute.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'
import ChatRoute from './routes/ChatRoute.js'
import MessageRoute from './routes/MessageRoute.js'

const app = express();


// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));


dotenv.config();
const Port=process.env.Port
const db=process.env.db
// console.log(db)
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)

app.listen(Port, () => console.log(`Server running on port ${Port}`));