import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import './App.css';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";


const App = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div id="home">
        <Home></Home>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>


      <div className="App">


        {/* Render the scroll-to-top button conditionally */}
        {showScrollButton && (
          <button className="scrollToTopButton" onClick={scrollToTop}>
            <FaArrowAltCircleUp  />
          </button>
        )}
      </div>
    </div>

  );
};

export default App;