import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // AOS initial
  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
    })
    AOS.refresh();
  },[]);
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
    </div>
  );
};

export default App;
