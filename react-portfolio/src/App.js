import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
