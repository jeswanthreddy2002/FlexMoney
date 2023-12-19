
import table1 from "../models/signup_schema.js";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
dotenv.config();
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
    return res.status(statusCode).json({
      success: false,
      error: err.message,
    });
  };




export const userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await table1.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}