import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Food Order App
        </Typography>
        <Button color="inherit">Your Cart</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
