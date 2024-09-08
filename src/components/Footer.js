import React from 'react';
import { Grid, Button } from '@mui/material';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    // const goToAdmin = () => history.push('/admin');
    // const goToUsers = () => history.push('/users');

    return (
        // <Box sx={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '10px', backgroundColor: '#f1f1f1' }}>
        //     <Button onClick={goToUsers} variant="contained" color="primary">
        //         User
        //     </Button>
        //     <Button onClick={goToAdmin} variant="contained" color="secondary">
        //         Admin
        //     </Button>
        // </Box>
        <Grid
      container
      justifyContent="center"
      style={{ padding: '20px', position: 'fixed', bottom: 0, width: '100%' }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/admin')} // Use navigate instead of history
        style={{ margin: '0 10px' }}
      >
        Admin
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/user')} // Use navigate instead of history
        style={{ margin: '0 10px' }}
      >
        User
      </Button>
    </Grid>
  );
};

export default Footer;
