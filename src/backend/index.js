const express = require('express');
const dialogflowRouter = require('./routes/dialogflow');
const cors=require("cors")
const app = express();
console.log("he;;p")
// Set up environment variable for Google Cloud credentials
process.env.GOOGLE_APPLICATION_CREDENTIALS = "my-key.json";

// Define routes
app.use(cors())
app.use('/dialogflow', dialogflowRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

