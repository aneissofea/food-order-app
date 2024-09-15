import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

const menuItems = [
  {
    id: 1,
    title: 'Truffle',
    price: '68.00',
    description: 'Best Seller. You know.',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
  },
  {
    id: 2,
    title: 'Meat La Pinyo',
    price: '52.00',
    description: 'Minced beef pizza with bolognese and pickled chili.',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
  },
  {
    id: 3,
    title: 'Pineapple',
    price: '48.00',
    description: 'Smoked duck with fresh pineapples.',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
  },
  {
    id: 4,
    title: 'Pepperoni',
    price: '48.00',
    description: 'Beef pepperoni, enough said.',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
  },
  {
    id: 5,
    title: 'Hot Wings',
    price: '48.00',
    description: 'Chicken with hot sauce.',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
  },
  {
    id: 6,
    title: 'Margherita',
    price: '48.00',
    description: 'Mozarella, tomato pulp, and basil.',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-cooked-pizza-with-different-seasonings-dark-blue-desk_140725-80918.jpg?t=st=1726293541~exp=1726297141~hmac=11c34dbc44231d372eaf221f1b8c0146bc7d908ca3dfc8427b98bf21308e9752&w=740',
  },
];

const MenuCard = ({id, isAdmin, onAddToCart }) => {
  // // Handle Add to Cart for User
  // const handleAddToCart = () => {
  //   console.log(`Add to cart item with id: ${id}`);
  //   // Add to Cart logic (e.g., call an API or update state)
  // };

  // // Handle Delete for Admin
  // const handleDelete = () => {
  //   console.log(`Delete item with id: ${id}`);
  //   // Delete item logic (e.g., call an API or update state)
  // };

  return (
    <Grid container spacing={3} direction="row" sx={{ width:'90%', justifyContent: "center", alignItems: "center"}}>
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
                //onClick={handleDelete} // Admin action: Delete
                onClick={() => console.log(`Delete item with id: ${item.id}`)} // Admin action: Delete
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
                //onClick={handleAddToCart} // User action: Add to Cart
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

