import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about/About";
import Services from "./components/services/Services";
import CarList from "./components/carList/CarList";
import Testimonail from "./components/testimonail/Testimonail";
import AppStoreBanner from "./components/appStoreBanner/AppStoreBanner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <Testimonail />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
