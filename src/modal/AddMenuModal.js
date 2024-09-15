import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddMenuModal = ({ open, onClose, addMenuItem }) => {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(''); // For URL input

  // Handle file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Store image as base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    // Prioritize uploaded image over image URL if both are provided
    const finalImage = image || imageUrl;

    if (name && description && price && finalImage) {
      const newItem = {
        id: Date.now(),
        title: name,
        description,
        price: parseFloat(price).toFixed(2),
        image: finalImage,
      };
      
      addMenuItem(newItem);   // Pass the new item to the parent component (Admin.js)

      // Clear input fields
      setName('');
      setDescription('');
      setPrice('');
      setImage(null);
      setImageUrl('');
      onClose(); // Close modal
    } else {
      alert('Please fill in all fields and provide an image.');
    }
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

        {/* Close button */}
        <IconButton 
          onClick={onClose}
          sx={{ position: 'absolute', top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>

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

          {/* Image URL input */}
          <TextField
            label="Image URL (optional)"
            fullWidth
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            margin="normal"
          />

          {/* File upload input, basic design*/}
          {/* <input type="file" onChange={handleImageUpload} />
          {image && <Typography>Image uploaded successfully!</Typography>} */}

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {/* Custom File Upload Button */}
            <input
              accept="image/*"
              style={{ display: 'none' }} // Hide the actual input
              id="file-upload"
              type="file"
              onChange={handleImageUpload}
            />
            <Box display='flex' justifyContent={'space-between'} alignItems={'center'}>
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  component="span" // Changes <Button> to act as <span> since it's wrapping <label>
                  sx={{
                    backgroundColor: '#D9C447',
                    color: '#FFFFFF',
                    padding: '10px 20px',
                    fontSize: '12px',
                    borderRadius: '30px',
                  }}
                >
                  Upload Image
                </Button>
              </label>

              {/* Display the uploaded image (optional) */}
              {image && (
                <Box component="img" src={image} alt="Uploaded" sx={{ width: '200px', marginTop: '16px' }} />
              )}
            </Box>

            {/* Show success message */}
            {image && <Typography sx={{ fontSize: '18px', color: '#D9C447' }}>Image uploaded successfully!</Typography>}

          </Box>

          {/*your initial button design huu uncomment when needed  */}
          {/* <Box sx={{display:'flex', textAlign:'center', justifyContent:'center',padding:'20px 0 0'}}>
          <Button type="submit" variant="contained" disableElevation={true} sx={{ fontFamily: 'Inter', 
            backgroundColor: 'white', color: '#000000', borderRadius: '6px', width:'130px',              
            borderColor:'#00000',padding: '8px 16px', }}>
              Choose File
            </Button>
            <Typography component="h2" sx={{ fontFamily: 'Inter', fontSize:'16px', padding: '0 0 0 20px'}}>
              No file chosen
            </Typography>
          </Box> */}

          <Box sx={{padding:'20px 0 0', textAlign:'center', justifyContent:'center',}}>
            <Button type="submit" onClick={handleSubmit} variant="contained"  sx={{ fontFamily: 'Inter', 
            backgroundColor: '#CE383C', color: '#FFFFFF', borderRadius: '6px', width:'180px',              
            padding: '8px 16px', '&:hover': { backgroundColor: '#AB3033', color: '#fff',} }}>
              Add Menu
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddMenuModal;
