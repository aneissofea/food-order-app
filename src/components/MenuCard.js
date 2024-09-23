import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

const MenuCard = ({ isAdmin, menuItems, deleteMenuItem, onAddToCart }) => {

  return (
    <Grid container spacing={3} direction="row" sx={{ maxWidth: '1200px', width:'90%', justifyContent: "center", margin: '0 auto', padding: '20px 0'}}>
      {menuItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id} >
          <Card sx={{width:'320px', height:'340px', borderRadius:'15px', backgroundColor:'#7DA0B3', padding: '0 0 5px'}}>
            
            <CardMedia
              component="img"
              height="200px"
              image={item.image}
              alt={item.title}
            />

            <CardContent sx={{color:'#FFF', fontFamily:'Inter', height: '70px'}}>
              <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                <Typography component="div" sx={{fontSize:'19px', fontWeight:'bold'}}>
                  {item.title}
                </Typography>
                <Typography component="div" sx={{fontSize:'19px', fontWeight:'bold'}}>
                  RM{item.price}
                </Typography>
              </Box> 
              <Typography variant="body2" sx={{fontSize:'16px'}}>
                {item.description}
              </Typography>
            </CardContent>

            <CardActions sx={{padding:'0'}}>
              {isAdmin ? (
                <Button
                variant="contained" color="none" 
                disableElevation={true}
                onClick={() => deleteMenuItem(item.id)}
                sx={{
                  position: 'relative',color:'#FFF', 
                  fontFamily:'Inter', fontSize:'16px'}}
                >
                  DELETE
                </Button>
              ) : (
                <Button
                variant="contained" color="none" 
                disableElevation={true}
                
                onClick={() => onAddToCart(item)} // Pass the selected item to the cart handler
                sx={{
                  position: 'relative',color:'#FFF', 
                  fontFamily:'Inter', fontSize:'16px'}}
                >
                  ADD TO CART
                </Button>
              )}
            </CardActions>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuCard;

