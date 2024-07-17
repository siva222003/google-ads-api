import express from "express";
import { uploadClickConversion } from "../controllers/click-conversion.controller";
const router = express.Router();

router.post("/", uploadClickConversion);

export default router;
