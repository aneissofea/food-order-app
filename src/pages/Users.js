import React, {useContext} from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import MealsItem from '../components/MealsItem';
import CartProvider from '../store/CartProvider';
import ItemsContext from '../store/items-context';


const Users = () => {
    const { items } = useContext(ItemsContext);

  return (
    <CartProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Food Order App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="h4">Available Foods</Typography>
        </Grid>
        <Grid container spacing={2}>
        {items.map((item) => (
          <MealsItem key={item.id} meal={item} />
        ))}
      </Grid>
      </Grid>
    </CartProvider>
  );
};

export default Users;
