import React, {useState} from 'react';
import { Grid, Button, Box } from '@mui/material';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (isAdmin) {
      navigate('/');
    } else {
      navigate('/admin');
    }
    setIsAdmin(!isAdmin);
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
        {isAdmin ? 'USER' : 'ADMIN'}
      </Button>
    </Box>
  );
};

export default Footer;


// const Footer = () => {
//     const navigate = useNavigate(); // Use useNavigate instead of useHistory

//     // const goToAdmin = () => history.push('/admin');
//     // const goToUsers = () => history.push('/users');

//     // return (
//     //     <Box sx={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '10px', backgroundColor: '#f1f1f1' }}>
//     //         <Button onClick={goToUsers} variant="contained" color="primary">
//     //             User
//     //         </Button>
//     //         <Button onClick={goToAdmin} variant="contained" color="secondary">
//     //             Admin
//     //         </Button>
//     //     </Box>
//     //);
//     // <Grid
//     //     container
//     //     justifyContent="center"
//     //     style={{ padding: '20px', position: 'fixed', bottom: 0, width: '100%' }}
//     //     >
//     //         <Button
//     //           variant="contained"
//     //           color="primary"
//     //           onClick={() => navigate('/admin')} // Use navigate instead of history
//     //           style={{ margin: '0 10px' }}
//     //         >
//     //           Admin
//     //         </Button>
//     //         <Button
//     //           variant="contained"
//     //           color="secondary"
//     //           onClick={() => navigate('/user')} // Use navigate instead of history
//     //           style={{ margin: '0 10px' }}
//     //         >
//     //           User
//     //         </Button>
//     //     </Grid>
// };