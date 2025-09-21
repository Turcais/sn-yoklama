export default async function handler(req, res) {
  try {
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxZvWpt5oehuzzPm9vR-LCu1x05oGPuVw32_AMmznYrd0fKLNCZTTz5VErhdLNBSiCV/exec";

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.status(200).send(text);

  } catch (err) {
    console.error("Vercel proxy hatası:", err);
    res.status(500).send(JSON.stringify({message:"Proxy error"}));
  }
}


