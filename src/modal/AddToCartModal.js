import React, { useState,useEffect } from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const AddToCartModal = ({ open, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  
  // Cart items state (including quantity)
  const [updatedCartItems, setUpdatedCartItems] = useState([]);

  // Sync the cart items from the initial props (whenever the modal opens or cartItems are updated)
  useEffect(() => {
    setUpdatedCartItems(cartItems);
  }, [cartItems]);
  
  // Handle quantity change (increment or decrement)
  const handleQuantityChange = (id, increment) => {
    onUpdateQuantity(id, increment); // Call the parent function to update quantity
  };

  // Handle item removal from the cart
  const handleRemoveItem = (id) => {
    onRemove(id);
  };
  
  // Calculate the total amount based on item price and quantity
  const getTotal = () => {
    return updatedCartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 680,
        bgcolor: 'background.paper',
        boxShadow: 24, borderRadius:'12px',
        p: 4
      }}>

        {/* Close button */}
        <IconButton 
          onClick={onClose}
          sx={{ position: 'absolute', top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography component="h2" textAlign="center" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize:'30px', fontWeight:'bold'}} gutterBottom>
          Your Cart
        </Typography>

        {/* If cart is empty */}
        {updatedCartItems.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            Your cart is empty
          </Typography>
        ) : (
          <>
            {/* Cart Items List */}
            {updatedCartItems.map((item) => (
              <Box key={item.id} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box width='75%'>
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize:'18px', fontWeight:'bold'}}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize:'15px'}}>
                    RM{item.price}
                  </Typography>
                </Box>

                {/* Quantity controls */}
                <Box display="flex" alignItems="center" width='15%' > 
                  <Button onClick={() => handleQuantityChange(item.id, -1)} 
                  disabled={item.quantity === 1} 
                  color='black'>
                    -
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button onClick={() => handleQuantityChange(item.id, 1) } color='black'>
                    +
                  </Button>
                </Box>
                <IconButton color="grey" onClick={() => handleRemoveItem(item.id)} width='10%'>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Box display='flex' flexDirection='row' justifyContent={'space-between'} padding='0 0 20px'>
                <Typography fontFamily= 'Inter, Arial, sans-serif' fontSize='22px' fontWeight='bold'>Total Amount:</Typography>
                <Typography fontFamily= 'Inter, Arial, sans-serif' fontSize='22px' fontWeight='bold'>RM{getTotal().toFixed(2)}</Typography>
            </Box>
            <Button variant="contained" sx={{ fontFamily:'Inter, Arial, sans-serif', backgroundColor:'#CE383C', 
            color: '#FFFFFF', borderRadius: '30px', width:'120px', padding: '8px 16px', 
            '&:hover': { backgroundColor: '#AB3033', color: '#fff',} }}>
                Order
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default AddToCartModal;
