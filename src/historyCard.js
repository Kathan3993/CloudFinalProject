import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Snackbar,
    Typography,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
  } from "@mui/material";
  import { React, useState } from "react";
  import { useNavigate } from 'react-router-dom';
   
  

  
  
  const ItemsCard = (props) => {
    
    console.log(props)

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                {props.inputText}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {props.outputText}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>        
      </Grid>       
    );
  };
  export default ItemsCard;