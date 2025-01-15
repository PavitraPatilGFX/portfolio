import React from 'react';
import ReactDOM from 'react-dom';

// Navigation Bar Component
function BottomNav() {
    return (
        <nav className="bottom-nav">
            <ul>
                <li><a href="#about"><i className="fas fa-user"></i></a></li>
                <li><a href="#portfolio"><i className="fas fa-briefcase"></i></a></li>
                <li><a href="#contact"><i className="fas fa-envelope"></i></a></li>
            </ul>
        </nav>
    );
}

// About Section with Fade-In Transition
function AboutMe() {
    return (
        <section id="about" className="pt-32 pb-16 bg-gray-100 fade-in">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Hi, I'm Pavitra Patil, a passionate graphic designer. My creativity knows no bounds, and I'm excited
                    to showcase my work.
                </p>
            </div>
        </section>
    );
}

// Portfolio Section with Fade-In Transition
function Portfolio() {
    return (
        <section id="portfolio" className="py-16 bg-white fade-in">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">My Work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add portfolio items with images */}
                    <div className="portfolio-item">
                        <img src="assets/images/Pizza-Poster.png" alt="Pizza Poster" className="w-full h-64 object-cover" />
                    </div>
                    <div className="portfolio-item">
                        <img src="assets/images/Burger-Poster.png" alt="Burger Poster" className="w-full h-64 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Contact Section with Fade-In Transition
function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-100 fade-in">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
                <p className="text-lg text-gray-600">
                    You can contact me via Instagram at <a href="https://www.instagram.com/kggraphics_" target="_blank" className="text-blue-600 font-semibold">@kggraphics_</a>
                </p>
            </div>
        </section>
    );
}

// Main App Component
function App() {
    return (
        <>
            <AboutMe />
            <Portfolio />
            <Contact />
            <BottomNav />
        </>
    );
}

// Render the app
ReactDOM.createRoot(document.getElementById('react-root')).render(<App />);
      
