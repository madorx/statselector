import React from 'react';
import { Navbar } from './components/Navbar';
import { Quiz } from './components/Quiz';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Quiz />
        <About />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
