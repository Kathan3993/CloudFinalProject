import React, { useState, useEffect } from "react";
import ItemsCard from "../src/historyCard"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";



const temp = localStorage.getItem("myData")
const jsonArray = JSON.parse(temp);



function History() {
    const location = useLocation();
    const encodedData = location.search.split("=")[1];
    const decodedData = decodeURIComponent(encodedData);
    const myData = JSON.parse(decodedData);
    //console.log(typeof temp);
    return (       
        <Container sx={{ py: 5, height: "100vh"}}>
          <Grid container spacing={4}>
            {myData.map((val, index) => (
                
                <ItemsCard
                  key={index}
                  inputText={val.inputText}
                  outputText={val.outputText}
                />            
             ))}
          </Grid>
       </Container>
);
}
export default History;

