import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser'; 
import { errorHandler } from "./middlewares/error.js";
import { connectDB } from "./config/db.js";
import route from "./routes/pay.js";
import authRoute from "./routes/AuthRoute.js";
import fetchRoute from "./routes/FetchDate.js";
import { userVerification } from "./middlewares/error.js";
import updateRoute from "./routes/UpdateRoute.js";
dotenv.config();
const app= express();
const port= parseInt(process.env.BASE_URL, 10) || 5000;
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://your-frontend.com" // Replace with your frontend URL
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  res.setHeader("Access-Control-Max-Age", 7200); // Optional: Set max age

  next();
});
app.use(express.json());

app.use("/api/pay",errorHandler,route);

app.use("/api/fetchdate", fetchRoute);
app.use("/api/auth",  authRoute);
app.use("/api",updateRoute);

app.listen(port, ()=>{
    connectDB();
    console.log("server started listening on port",port);
});
