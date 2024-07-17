import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectToMongo } from "./db";
import clickConversionRoutes from "./routes/click-conversion.route";
import conversionActionRoutes from "./routes/conversion-action.route";

dotenv.config({ path: path.join(__dirname, "../config.env") });

const app = express();
connectToMongo();

app.use("/api/conversion-actions", conversionActionRoutes);
app.use("/api/click-conversions", clickConversionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
