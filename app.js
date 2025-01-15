import React, { useState } from "react";
import ReactDOM from "react-dom";

// NavigationBar component with theme toggle
function NavigationBar({ toggleTheme }) {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10 transition duration-300 ease-in-out dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-blue-600 text-2xl font-bold dark:text-white">Pavitra Patil</a>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition dark:text-white dark:hover:text-blue-600">About Me</a></li>
          <li><a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition dark:text-white dark:hover:text-blue-600">Portfolio</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition dark:text-white dark:hover:text-blue-600">Contact</a></li>
        </ul>
        <button onClick={toggleTheme} className="text-gray-600 dark:text-white">
          <i className="fas fa-moon dark:hidden"></i>
          <i className="fas fa-sun hidden dark:block"></i>
        </button>
      </div>
    </nav>
  );
}

// AboutMe Component with smooth text animation
function AboutMe() {
  return (
    <section id="about" className="pt-32 pb-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white animate-fade-in">About Me</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300 animate-fade-in">
          Hi, I'm Pavitra Patil, a passionate graphic designer, eager to expand my skills.
        </p>
      </div>
    </section>
  );
}

// Portfolio Component
function Portfolio() {
  const images = [
    { src: "./assets/images/Pizza-Poster.png", alt: "Pizza Poster 🍕" },
    { src: "./assets/images/Burger-Poster.png", alt: "Burger Poster 🍔" },
  ];

  return (
    <section id="portfolio" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 dark:text-white animate-fade-in">My Work</h2>
        <div id="portfolio-gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map(({ src, alt }, index) => (
            <div key={index} className="portfolio-image-container">
              <img src={src} alt={alt} className="rounded-lg" />
              <div className="portfolio-image-overlay">
                <p>{alt}</p>
                <button
                  className="preview-button"
                  onClick={() => window.open(src, "_blank")}
                  aria-label={`Preview ${alt}`}
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 dark:text-white animate-fade-in">Contact Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          You can contact me via Instagram at{" "}
          <a href="https://www.instagram.com/kggraphics_" target="_blank" className="text-blue-600 font-semibold dark:text-blue-400">
            @kggraphics_
          </a>
        </p>
      </div>
    </section>
  );
}

// App Component
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark", theme === "light");
  };

  return (
    <>
      <NavigationBar toggleTheme={toggleTheme} />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("react-root")).render(<App />);
                      
