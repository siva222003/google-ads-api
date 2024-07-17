import { ClickConversion } from "../models/click-conversion.model";
import { ConversionAction } from "../models/conversion-action.model";

export const uploadClickConversion = async (req, res) => {
  try {
    const {
      gclid,
      gbraid,
      wbraid,
      conversionDateTime,
      conversionValue,
      currencyCode,
      conversionActionId,
      orderId,
      userIdentifiers,
    } = req.body;
    const conversionAction = await ConversionAction.findById(conversionActionId);
    if (!conversionAction) return res.status(404).json({ message: "Conversion action not found" });

    const clickConversion = new ClickConversion({
      gclid,
      gbraid,
      wbraid,
      conversionDateTime,
      conversionValue,
      currencyCode,
      conversionAction: conversionAction._id,
      orderId,
      userIdentifiers,
    });

    await clickConversion.save();

    const response = await axios.post(
      "https://googleads.googleapis.com/v11/customers/{customer_id}/clickConversions:upload",
      {
        gclid,
        gbraid,
        wbraid,
        conversionDateTime,

        conversionValue,
        currencyCode,
        conversionAction: conversionAction.resourceName,
        orderId,
        userIdentifiers,
      }
    );

    res.status(201).json(clickConversion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
