import express from "express";
import { createData } from "../controllers/send.js";

const router = express.Router();


router.post("/", createData);

export default router;