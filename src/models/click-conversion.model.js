import mongoose from "mongoose";

const clickConversionSchema = new mongoose.Schema({
  gclid: String,
  gbraid: String,
  wbraid: String,
  conversionDateTime: String,
  conversionValue: Number,
  currencyCode: String,
  conversionAction: { type: mongoose.Schema.Types.ObjectId, ref: "ConversionAction" },
  orderId: String,
  userIdentifiers: Array,
});

export const ClickConversion = mongoose.model("ClickConversion", clickConversionSchema);
