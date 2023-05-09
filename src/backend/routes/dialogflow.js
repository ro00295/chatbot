const express = require("express");
const router = express.Router();
//process.env.GOOGLE_APPLICATION_CREDENTIALS = "my-key.json";
// Import Dialogflow and uuid libraries
const dialogflow = require("dialogflow");
const uuid = require("uuid");

// Define a route for handling Dialogflow queries
router.get("/query", async (req, res) => {
  try {
    // Retrieve the query parameter from the request URL
    console.log("query",req.query)
    const query = req.query.q;
    console.log(query)
    // Set up a new Dialogflow session
    const sessionId = uuid.v4();
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.sessionPath(
      "chatbothelper-dcjh",
      sessionId
    );

    // Set up the request object with the user's query
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: "en-US",
      
        },
      },
    };

    // Send the request to Dialogflow and log the result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    //console.log(result)
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    // Send the response back to the client
    res.json({
      query: result.queryText,
      response: result.fulfillmentText,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
