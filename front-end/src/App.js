import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Create from './pages/Create';
import PostView from './pages/PostView';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/create" element={<Create />} />
            <Route path="/post/:postId" element={<PostView />} />
          </Routes>
        </div>
        <ContactUs />
      </Router>
    </div>
  );
}

export default App;
