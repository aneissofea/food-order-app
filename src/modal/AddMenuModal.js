import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const AddMenuModal = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(), // Unique ID based on timestamp
      title: name,
      description: description,
      price: parseFloat(price),
      image: '/images/default-food.jpg', // Placeholder image (you can change this)
    };
    onAdd(newItem); // Pass the new item to the parent component (Admin.js)
    setName('');
    setDescription('');
    setPrice('');
    onClose(); // Close modal after submission
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        boxShadow: 24, borderRadius:'12px',
        p: 4 
      }}>
        <Typography component="h2" textAlign="center" sx={{ fontFamily: 'Inter', fontSize:'30px', fontWeight:'bold'}} gutterBottom>
          Add A Menu
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Price (RM)"
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            margin="normal"
          />

          <Box sx={{display:'flex', textAlign:'center', justifyContent:'center',padding:'20px 0 0'}}>
          <Button type="submit" variant="contained" disableElevation={true} sx={{ fontFamily: 'Inter', 
            backgroundColor: 'white', color: '#000000', borderRadius: '6px', width:'130px',              
            borderColor:'#00000',padding: '8px 16px', }}>
              Choose File
            </Button>
            <Typography component="h2" sx={{ fontFamily: 'Inter', fontSize:'16px', padding: '0 0 0 20px'}}>
              No file chosen
            </Typography>
          </Box>

          <Box sx={{display:'flex', justifyContent:'space-between',padding:'20px 0 0'}}>
            <Button type="submit" variant="contained" sx={{ fontFamily: 'Inter', 
            backgroundColor: '#CE383C', color: '#FFFFFF', borderRadius: '6px', width:'180px',              
            padding: '8px 16px', '&:hover': { backgroundColor: '#AB3033', color: '#fff',} }}>
              Add Menu
            </Button>
            {/* <Button type="submit" variant="contained" sx={{ fontFamily: 'Inter', 
            backgroundColor: '#CE383C', color: '#FFFFFF', borderRadius: '6px', width:'180px',              
            padding: '8px 16px', '&:hover': { backgroundColor: '#AB3033', color: '#fff',} }}>
              Close
            </Button> */}
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddMenuModal;
