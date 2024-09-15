import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const AddToCartModal = ({ open, onClose, cartItems, onRemove }) => {
  const [quantity, setQuantity] = useState(cartItems.map(item => ({ id: item.id, quantity: 1 })));
  
//   // Set initial quantity for each item in the cart
//   const [quantity, setQuantity] = useState([]);

//   // Update quantity when cartItems change (on item add/remove)
//   useEffect(() => {
//     setQuantity(cartItems.map(item => ({ id: item.id, quantity: 1 })));
//   }, [cartItems]);
  
  // Handle quantity change (increment or decrement)
  const handleQuantityChange = (id, increment) => {
    setQuantity((prev) =>
      prev.map((q) =>
        q.id === id
          ? { ...q, quantity: q.quantity + increment }
          : q
      )
    );
  };
  
  // Handle item removal from the cart
  const handleRemoveItem = (id) => {
    onRemove(id);
  };
  
  // Calculate the total amount based on item price and quantity
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemQuantity = quantity.find(q => q.id === item.id)?.quantity || 1;
      return total + item.price * itemQuantity;
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

        <Typography component="h2" textAlign="center" sx={{ fontFamily: 'Inter', fontSize:'30px', fontWeight:'bold'}} gutterBottom>
          Your Cart
        </Typography>

        {/* If cart is empty */}
        {cartItems.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            Your cart is empty
          </Typography>
        ) : (
          <>
            {/* Cart Items List */}
            {cartItems.map((item) => (
              <Box key={item.id} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box width='75%'>
                  <Typography sx={{ fontFamily: 'Inter', fontSize:'18px', fontWeight:'bold'}}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Inter', fontSize:'15px'}}>
                    RM{item.price}
                  </Typography>
                </Box>

                {/* Quantity controls */}
                <Box display="flex" alignItems="center" width='15%' > 
                  <Button onClick={() => handleQuantityChange(item.id, -1)} 
                  disabled={quantity.find(q => q.id === item.id)?.quantity === 1} 
                  color='black'>
                    -
                  </Button>
                  <Typography>{quantity.find(q => q.id === item.id)?.quantity}</Typography>
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
                <Typography fontFamily= 'Inter' fontSize='22px' fontWeight='bold'>Total Amount:</Typography>
                <Typography fontFamily= 'Inter' fontSize='22px' fontWeight='bold'>RM{getTotal().toFixed(2)}</Typography>
            </Box>
            <Button variant="contained" sx={{ fontFamily:'Inter', backgroundColor:'#CE383C', 
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
