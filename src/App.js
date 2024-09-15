import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import Users from './pages/Users';
import Footer from './components/Footer';


function App() {
  const [isUsers, setIsUsers] = useState(true);

  // Centralized state to manage menu items; Store menu items
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: 'Truffle',
      price: '68.00',
      description: 'Best Seller. You know.',
      image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
    },
    {
      id: 2,
      title: 'Meat La Pinyo',
      price: '52.00',
      description: 'Minced beef pizza with bolognese and pickled chili.',
      image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
    },
    {
      id: 3,
      title: 'Pineapple',
      price: '48.00',
      description: 'Smoked duck with fresh pineapples.',
      image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
    },
    {
      id: 4,
      title: 'Pepperoni',
      price: '48.00',
      description: 'Beef pepperoni, enough said.',
      image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
    },
    {
      id: 5,
      title: 'Hot Wings',
      price: '48.00',
      description: 'Chicken with hot sauce.',
      image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
    },
    {
      id: 6,
      title: 'Margherita',
      price: '48.00',
      description: 'Mozarella, tomato pulp, and basil.',
      image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
    },
  ]);

  // Function to add a new menu item
  const addMenuItem = (newItem) => {
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to delete a menu item
  const deleteMenuItem = (id) => {
    setMenuItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
    <Routes>
      <Route path="/admin" element={isUsers ? <Navigate to="/" /> : <Admin menuItems={menuItems} addMenuItem={addMenuItem} deleteMenuItem={deleteMenuItem}/>} />
      <Route path="/" element = { isUsers ? <Users menuItems={menuItems} /> : <Navigate to="/admin" />} />
    </Routes>
    <Footer isUsers={isUsers} setIsUsers={setIsUsers} />
  </Router>
  );
}

export default App;
