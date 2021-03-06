import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Websites from "./pages/Websites/Websites";
import Education from "./pages/Education/Education";
import Artwork from "./pages/Artwork/Artwork";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import FooterComponent from "./components/Footer/FooterComponent";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/websites/" element={<Websites />} />
        <Route path="/education/" element={<Education />} />
        <Route path="/artwork/" element={<Artwork />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/skills/" element={<Skills />} />
        <Route path="/about/" element={<About />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
