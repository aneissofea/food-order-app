import React, { useContext, useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import ItemsContext from '../store/items-context';
import MealsItem from '../components/MealsItem';

const Admin = () => {
  const { items, dispatch } = useContext(ItemsContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={addItem}>
          Add Food Item
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth />
        <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <MealsItem key={item.id} meal={item} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Admin;
