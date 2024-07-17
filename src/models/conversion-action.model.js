import mongoose from 'mongoose'

const conversionActionSchema = new mongoose.Schema({
  name: String,
  category: String,
  type: String,
  status: String,
  viewThroughLookbackWindowDays: Number,
  valueSettings: {
    defaultValue: Number,
    alwaysUseDefaultValue: Boolean,
  },
  resourceName: String,
});

export const ConversionAction = mongoose.model('ConversionAction', conversionActionSchema);
