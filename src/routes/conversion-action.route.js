import express from "express";
const router = express.Router();
import {
  createConversionAction,
  getConversionAction,
} from "../controllers/conversion-action.controller";

router.post("/", createConversionAction);
router.get("/:id", getConversionAction);

module.exports = router;
