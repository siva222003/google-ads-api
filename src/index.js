import express from "express";
import dotenv from "dotenv";
import path from "path";
import clickConversionRoutes from "./routes/click-conversion.route";

dotenv.config({ path: path.join(__dirname, "../config.env") });

const app = express();

app.use("/api/click-conversions", clickConversionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
