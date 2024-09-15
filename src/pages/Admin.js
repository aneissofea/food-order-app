import React, {useContext, useState} from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Box } from '@mui/material';
import MenuCard from '../components/MenuCard';
import AddMenuModal from '../modal/AddMenuModal';


const Admin = ({menuItems}) => {
  
  const [items, setItems] = useState(menuItems);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Add new item to the existing list
  };

  return (
    <>
      {/* AppBar Section */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor:'#7DA0B3', padding: '0',}}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontFamily: 'Inter', fontSize:'28px', fontWeight:'bold' }}>PSSTCO.</Typography>
          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/* Middle Section: Links (add component={Link} to Button if got links ya) */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', fontFamily: 'Inter', fontSize:'18px,'}}>
            <Button  to="/" color="inherit">
              Home
            </Button>
            <Button  to="/menu" color="inherit">
              Menu
            </Button>
            <Button to="/about" color="inherit">
              About
            </Button>
            <Button  to="/contact" color="inherit">
              Contact
            </Button>
          </Box>

          {/* Right Section: Add Menu Button */}
          <Button variant="contained" onClick={handleOpen} sx={{ fontFamily: 'Inter', 
          backgroundColor: '#CE383C', color: '#FFFFFF',               
          borderRadius: '6px', padding: '8px 16px',        
          '&:hover': { backgroundColor: '#AB3033', color: '#fff'} }}>
            ADD MENU
          </Button>
          {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {items.map((item) => (
              <MenuCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
                isAdmin={true}
              />
            ))}
          </div> */}
          <AddMenuModal open={open} onClose={handleClose} onAdd={handleAddItem} />
        </Toolbar>
      </AppBar>
      
      {/* Writing Section */}
      <Box sx={{ padding: '50px 0 10px', backgroundColor: '#7DA0B3' }}>
        <Typography variant="h1" component="div" sx={{textAlign: 'center', fontFamily:'Inria-Serif', fontSize:'280px', color:"#D9C447", lineHeight:'250px'}}>
          PIZZERIA
        </Typography>
      </Box>


      {/* Menu Title */}
      <Box sx={{ textAlign: 'center', margin: '40px 0 40px' }}>
        <Typography variant="h4" component="div" sx={{color:'#CE383C', fontFamily:'Inter', fontSize:'64px', fontWeight:'bold',}}>
          menu
        </Typography>
      </Box>

      {/* Menu Cards Section */}
      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <MenuCard />
      </Grid>
      
    </>
  );
};

export default Admin;
