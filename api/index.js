import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ping endpoint
app.get("/api/ping", (_req, res) => {
  res.json({ message: "pong" });
});

// Waitlist endpoint
app.post("/api/waitlist", async (req, res) => {
  try {
    const { name, email, businessName } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: "Name and email are required" 
      });
    }

    // Airtable API configuration
    const AIRTABLE_TOKEN = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN;
    const BASE_ID = process.env.AIRTABLE_BASE_ID;
    const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

    if (!AIRTABLE_TOKEN || !BASE_ID || !TABLE_NAME) {
      console.error("Missing Airtable configuration");
      return res.status(500).json({ 
        success: false, 
        message: "Server configuration error" 
      });
    }

    // Create record in Airtable
    const airtableUrl = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;
    const currentDate = new Date().toISOString();
    
    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          "Business Name": businessName || "",
          SignupDate: currentDate,
        },
      }),
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error("Airtable API error:", errorText);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to save to waitlist" 
      });
    }

    const data = await airtableResponse.json();
    
    res.json({ 
      success: true, 
      message: "Successfully joined the waitlist!",
      id: data.id 
    });

  } catch (error) {
    console.error("Waitlist submission error:", error);
    res.status(500).json({ 
      success: false, 
      message: "An error occurred. Please try again." 
    });
  }
});

export default app;

