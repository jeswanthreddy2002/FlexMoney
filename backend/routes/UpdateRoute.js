import express from "express";
import { updateBatch } from "../controllers/Update.js";
import { updateDate } from "../controllers/Update.js";
const router = express.Router();


router.put('/update-enrollment/:email',updateDate);
router.put('/update-batch/:email',updateBatch);

export default router;
