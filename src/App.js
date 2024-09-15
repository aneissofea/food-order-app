import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Users from './pages/Users';
import Footer from './components/Footer';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/users" element={<Users />} /> */}
          <Route path="/" element={<Users />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
