import Chatbot from "./components/Chatbot/Chatbot";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./pages/About"
import Contact from "./pages/Contact"
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Chatbot />
      <Nav />
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />}></Route>
        <Route path = "/home" element ={<Home />}></Route>
        <Route path = "/about" element ={<About />}></Route>
        <Route path = "/contact" element ={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



