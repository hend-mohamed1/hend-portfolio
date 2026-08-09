import "./App.css";
import { useEffect, useState } from "react";

import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;