import { client } from "../config/google-client";
import { auth } from "../config/oAuth";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const DEVELOPER_TOKEN = process.env.DEVELOPER_TOKEN;
const LOGIN_CUSTOMER_ID = process.env.LOGIN_CUSTOMER_ID;
const CUSTOMER_ID = process.env.CUSTOMER_ID;
const CONVERSION_ACTION_ID = process.env.CONVERSION_ACTION_ID;

export async function uploadClickConversion(req, res) {
  try {
    const tokens = await auth.refreshAccessToken();
    const accessToken = tokens.credentials.access_token;

    const { clickId, conversionTime, conversionValue, cuurencyCode } = req.body;

    const clickConversion = {
      conversion_action: `customers/${CUSTOMER_ID}/conversionActions/${CONVERSION_ACTION_ID}`,
      conversion_date_time: conversionTime,
      conversion_value: conversionValue,
      currency_code: currency_code,
      gclid: clickId,
    };

    const conversionUploadService = client.createService("ConversionUploadService", {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      developer_token: DEVELOPER_TOKEN,
      access_token: accessToken,
      login_customer_id: LOGIN_CUSTOMER_ID,
    });

    const response = await conversionUploadService.uploadClickConversions({
      customer_id: CUSTOMER_ID,
      conversions: [clickConversion],
      partial_failure: true,
    });

    console.log("Upload response:", response);
  } catch (error) {
    console.error("Error uploading click conversion:", error);
  }
}
