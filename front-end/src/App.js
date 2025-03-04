import React from "react";
import './App.css';
import Navbar from '../components/Navbar';
import Home from '../pages/HomePage';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
