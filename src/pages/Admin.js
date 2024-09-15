import React, { useState} from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Box } from '@mui/material';
import MenuCard from '../components/MenuCard';
import AddMenuModal from '../modal/AddMenuModal';


const Admin = ({menuItems, addMenuItem, deleteMenuItem}) => {
  
  const [menuOpen, setMenuOpen] = useState(false); // Control modal open/close

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
          <Button variant="contained" onClick={() => setMenuOpen(true)} sx={{ fontFamily: 'Inter', 
          backgroundColor: '#CE383C', color: '#FFFFFF',               
          borderRadius: '6px', padding: '8px 16px',        
          '&:hover': { backgroundColor: '#AB3033', color: '#fff'} }}>
            ADD MENU
          </Button>
          <AddMenuModal 
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          addMenuItem={addMenuItem} 
          />
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
        <MenuCard isAdmin={true} menuItems={menuItems} deleteMenuItem={deleteMenuItem}/>
      </Grid>
      
    </>
  );
};

export default Admin;
