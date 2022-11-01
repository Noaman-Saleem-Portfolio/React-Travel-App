import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./styles/app.css";
import "./styles/header.css";
import "./styles/places.css";
import "./styles/features.css";
import "./styles/footer.css";
import "./styles/about.css";
import "./styles/contact.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
