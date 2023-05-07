import { dialogflowWebhooks } from "./routes/Dialogflow";
import bodyParser from "body-parser";
import express, { json } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// dialogflow
app.post("/dialogflow", dialogflowWebhooks);

app.listen(port, () => console.log(`Listening on port ${port}`));