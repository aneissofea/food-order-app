import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import CartContext from '../store/cart-context';

const MealsItem = ({ meal }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: meal });
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5">{meal.name}</Typography>
          <Typography variant="body2">{meal.description}</Typography>
          <Typography variant="h6">${meal.price}</Typography>
          <Button variant="contained" color="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MealsItem;
