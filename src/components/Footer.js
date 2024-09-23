import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Footer = ({isUsers, setIsUsers}) => {

  const navigate = useNavigate();

  const handleToggle = () => {
    if (isUsers) {
      navigate('/');
    } else {
      navigate('/admin');
    }
    setIsUsers(!isUsers);
  };

  return (
    <Box
      component="footer"
      sx={{        
        bottom: 0,
        width: '100%',
        height:'250px',
        textAlign: 'center',
        margin: '80px 0 0',
        backgroundColor: '#2e3b4e',
        display:'flex',
        justifyContent: "center", alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={handleToggle}
        sx={{ fontSize:'20px', fontFamily:'Inter', backgroundColor: '#CE383C', color: '#fff' , width:'250px', '&:hover': { backgroundColor: '#AB3033', color: '#fff',}}}
      >
        {isUsers ? 'ADMIN' : 'USER'}
      </Button>
    </Box>
  );
};

export default Footer;
