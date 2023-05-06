import Chatbot from "./components/Chatbot/Chatbot";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Chatbot />
      <iframe className="autocreated"                                                                     //this is googles own verison of the diaglogflow intergration// 
      src="https://console.dialogflow.com/api-client/demo/embedded/e4ec22aa-537a-445f-b731-bfbbc4f3e247">
        </iframe>
    </div>
  );
}

export default App;



