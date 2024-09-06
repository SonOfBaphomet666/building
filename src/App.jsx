import "./main.scss";
import {APP_ROUTES} from "./utils/constant";

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
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.ABOUT} element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
