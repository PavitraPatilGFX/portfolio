import React from "react";
import ReactDOM from "react-dom";

function NavigationBar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-blue-600 text-2xl font-bold">Pavitra Patil</a>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition">About Me</a></li>
          <li><a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition">Portfolio</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function AboutMe() {
  return (
    <section id="about" className="pt-32 pb-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hi, I'm Pavitra Patil, a passionate and enthusiastic graphic designer.
        </p>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Work</h2>
        <div id="portfolio-gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add portfolio items here */}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600">
          You can contact me via Instagram at{" "}
          <a href="https://www.instagram.com/kggraphics_" target="_blank" className="text-blue-600 font-semibold">
            @kggraphics_
          </a>
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <NavigationBar />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("react-root")).render(<App />);
                                                                  
