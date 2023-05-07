import { WebhookClient } from "dialogflow-fulfillment-ts";

export const dialogflowWebhooks = (req: any, res: any) => {
  const agent = new WebhookClient({ request: req, response: res });

  function welcome() {
    agent.add("Welcome!");
    agent.add("What can I do for you today?");
  }

  const open = () => {
    agent.add(`For sure I will open ${agent.parameters["App"]}`);
  };

  const connection = () => {
    agent.add("Your test is working like expected")
  }

  let intentMap = new Map();
  intentMap.set("show fulfillment", welcome);
  intentMap.set("Open", open);
  intentMap.set("testing connection", connection);
  agent.handleRequest(intentMap);
};