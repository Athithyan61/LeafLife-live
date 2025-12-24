import './App.css';
import Service from './Components/Service';
import ServiceDetails from './Components/ServiceDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
// import Services from "./Components/Services";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services:id" element={<ServiceDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
