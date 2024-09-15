import "./main.scss";
import { APP_ROUTES } from "./utils/constant";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Object from "./pages/оbject/object";
import Technologies from "./pages/technologies/technologies";
import About from "./pages/about/about";
import Vacancies from "./pages/vacancies/vacancies";
import Contact from "./pages/contact/contact";

import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.OBJECT} element={<Object />} />
          <Route path={APP_ROUTES.TECHNO} element={<Technologies />} />
          <Route path={APP_ROUTES.VACANCIES} element={<Vacancies />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.CONTACT} element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
