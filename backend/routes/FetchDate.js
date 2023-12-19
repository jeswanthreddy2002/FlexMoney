import express from "express";
import { getLoginDate } from "../controllers/FetchDate.js";
import { getEnrollDate } from "../controllers/FetchDate.js";
import { getDate } from "../controllers/FetchDate.js";
const router = express.Router();


router.get("/logindate", getLoginDate);
router.get("/enrolldate",getEnrollDate);

router.get(`/enrollment-date/:email`,getDate)

export default router;
