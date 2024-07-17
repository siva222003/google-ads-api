import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
