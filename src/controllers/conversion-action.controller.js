import { ConversionAction } from "../models/conversion-action.model";

export const createConversionAction = async (req, res) => {
  try {
    const { name, category, type, status, viewThroughLookbackWindowDays, valueSettings } = req.body;
    const conversionAction = new ConversionAction({
      name,
      category,
      type,
      status,
      viewThroughLookbackWindowDays,
      valueSettings,
    });

    await conversionAction.save();

    const response = await axios.post(
      "https://googleads.googleapis.com/v11/customers/{customer_id}/conversionActions",
      {
        name,
        category,
        type,
        status,
        viewThroughLookbackWindowDays,
        valueSettings,
      }
    );

    conversionAction.resourceName = response.data.resourceName;
    await conversionAction.save();

    res.status(201).json(conversionAction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getConversionAction = async (req, res) => {
  try {
    const conversionAction = await ConversionAction.findById(req.params.id);
    if (!conversionAction) return res.status(404).json({ message: "Conversion action not found" });

    res.json(conversionAction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
