import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Users from './pages/Users';
import Footer from './components/Footer';
import ItemsProvider from './store/items-context';

function App() {
  return (
    <ItemsProvider>
      <Router>
        <Routes>
          <Route path="/admin" component={Admin} />
          <Route path="/users" component={Users} />
          <Route path="/" component={Users} />
        </Routes>
        <Footer />
      </Router>
    </ItemsProvider>
  );
}

export default App;
