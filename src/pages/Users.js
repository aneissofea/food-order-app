import React, { useState} from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Box } from '@mui/material';
import MenuCard from '../components/MenuCard';
import AddToCartModal from '../modal/AddToCartModal';




const Users = ({menuItems}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [open, setOpen] = useState(false);      // State to control modal open/close

    // Add item to cart
    const handleAddToCart = (item) => {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        setCartItems(cartItems.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
    };

    // Remove item from cart
    const handleRemoveFromCart = (id) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Update item quantity in cart
    const handleUpdateQuantity = (id, increment) => {
      setCartItems(cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      ));
    };

    const handleOpenCart = () => setOpen(true);        // Open cart modal
    const handleCloseCart = () => setOpen(false);        // Close cart modal

  return (
    <>
      {/* AppBar Section */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor:'#7DA0B3', padding: '0',}}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize:'28px', fontWeight:'bold' }}>PSSTCO.</Typography>

          {/* Middle Section: Links (add component={Link} to Button if got links ya) */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', fontFamily: 'Inter, Arial, sans-serif', fontSize:'18px,'}}>
            <Button to="/" color="inherit">Home</Button>
            <Button to="/menu" color="inherit">Menu</Button>
            <Button to="/about" color="inherit">About</Button>
            <Button to="/contact" color="inherit">Contact</Button>
          </Box>

          {/* Right Section: Cart Button */}
          <Button variant="contained" onClick={handleOpenCart} sx={{ fontFamily: 'Inter, Arial, sans-serif', 
          backgroundColor: '#CE383C', color: '#FFFFFF',               
          borderRadius: '6px', padding: '8px 16px', fontWeight:'bold',   
          '&:hover': { backgroundColor: '#AB3033', color: '#fff',} }}>
            Your Cart
          </Button>

          <AddToCartModal 
          open={open}              // Controls visibility of modal
          onClose={handleCloseCart} // Close modal function
          cartItems={cartItems}     // Pass cart items to modal
          onRemove={handleRemoveFromCart} // Pass remove function
          onUpdateQuantity={handleUpdateQuantity} // Pass quantity update function
          /> 

        </Toolbar>
      </AppBar>

      {/* Writing Section */}
      <Box sx={{ padding: '150px 0 10px', backgroundColor: '#7DA0B3' }}>
        <Typography variant="h1" component="div" sx={{textAlign: 'center', fontFamily:'Inria-Serif', fontSize:'280px', color:"#D9C447", lineHeight:'50px'}}>
          PIZZERIA
        </Typography>
        <Box sx={{display:'flex', textAlign:'center', padding:'0 0 0 65px'}}>
          <Box sx={{ width:'380px', padding:'0 0 45px', marginTop: "auto"}}>
            <Typography variant="body1" sx={{textAlign: 'left', color:'#FFF', fontFamily:'Inter, Arial, sans-serif', fontSize:'20px', fontWeight:'bold',}}>
              YOU'RE GOING TO FALL IN LOVE
            </Typography>
            <Typography variant="body2" sx={{textAlign: 'left', color:'#FFF', fontFamily:'Inter, Arial, sans-serif', fontSize:'19px', lineHeight:'1.45', padding:'0 0 20px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscin g elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </Typography>
            <Typography variant="body1" sx={{textAlign: 'left', color:'#FFF', fontFamily:'Inter, Arial, sans-serif', fontSize:'20px', fontWeight:'bold',}}>
            PIZZA YOU’VE NEVER HAD BEFORE
            </Typography>
            <Typography variant="body2" sx={{textAlign: 'left', color:'#FFF', fontFamily:'Inter, Arial, sans-serif', fontSize:'19px', lineHeight:'1.45'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscin g elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </Typography>
          </Box>
          <Box component="img" src="https://iili.io/drBX8LQ.png" alt="Pizza" sx={{ alignSelf:'center', width: 'auto', height: '100%', maxHeight: '550px' }} />
        </Box>
      </Box>

      {/* Menu Title */}
      <Box sx={{ textAlign: 'center', margin: '40px 0 40px' }}>
        <Typography variant="h4" component="div" sx={{color:'#CE383C', fontFamily:'Inter, Arial, sans-serif', fontSize:'64px', fontWeight:'bold',}}>
          menu
        </Typography>
      </Box>

      {/* Menu Cards Section */}
      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <MenuCard isAdmin={false} menuItems={menuItems} onAddToCart={handleAddToCart}/>  {/* Pass the add-to-cart function*/}
      </Grid>
      
    </>
  );
};

export default Users;
