import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Zivotopis from "./components/Resume/Zivotopis";
import Blog from './components/blog/blog'; // Import Blog component
import Post from './components/blog/[slug]'; // Import Post component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/blog/blog.css"; // Import custom CSS for additional styles
import { initGA, logPageView } from './analytics';

const App = () => {
  const [load, updateLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/zivotopis" element={<Zivotopis />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
