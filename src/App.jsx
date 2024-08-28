import "./main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";

import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        
      </Routes>
    </Router>
      <Home />
      <About />
    </>
  );
}

export default App;
