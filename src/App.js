import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Screens/Home/Home";
import Footer from "./Components/Footer";
import About from "./Screens/About/About";
import Projects from "./Screens/Projects/Projects";
import "./App.css";
import TransitionRoutes from "./Components/TransitionRoutes";
import Connect from "./Screens/Connect/Connect";
import CircularCursor from "./Components/CircularCursor";

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header windowWidth={windowWidth} />
      <CircularCursor />
      <TransitionRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </TransitionRoutes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
