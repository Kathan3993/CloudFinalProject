import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  IconButton,
  
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import myArray from "./language";
import { useLocation } from "react-router-dom";
import { HelpOutline, VolumeUp } from "@material-ui/icons";
import {useNavigate} from 'react-router-dom';



const dataArray = [];

//const axios = require("axios");

function Translator() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("");
  const [translatedtext, setTranslatedText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();


  const  email  = location.state?.myData;

  console.log(email);
  const handletext = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
    
  };


  


  const handleTranslation = (event) => {
    const lang = event.target.value
    
    const data = {
      text: text,
      lang: lang,
      email: email
    
  };
    
    axios
      .post(
        //"https://0lcfzb95a3.execute-api.us-east-2.amazonaws.com/Translation",
        "https://g6plwjxcxe.execute-api.us-east-2.amazonaws.com/deploy/translation",
        data
      )
      .then((response) => {
        console.log(response.data);
        setTranslatedText(response.data)
        
      });
  };

  const handleEmail = (event) => {
    const data = {
      text: text,
      lang: lang,
      email: email,
      translatedtext:translatedtext
  };
  axios
      .post(
        "https://g6plwjxcxe.execute-api.us-east-2.amazonaws.com/deploy/email",
        //"https://ftj7kp7pe5hpjoy7vhpwxxlaum0spaqh.lambda-url.us-east-2.on.aws/",
        data
      )
      .then((response) => {
        console.log(response.data);
        alert("Email sent to registered mail id.")
      });
  };
  //fetch(`https://r6rp5cgye334jciepft2erepdm0wwreu.lambda-url.us-east-2.on.aws/?email=${email}`)

  const handleHistory = () => {
    const data = {
      email: email,      
  };
console.log("heklnfdjnfjdnjjnjdnjdnjn"+email)
  fetch(`https://g6plwjxcxe.execute-api.us-east-2.amazonaws.com/deploy/history?email=${email}`)
  .then(response => response.json())
  .then(data => {
    // localStorage.setItem("myData", JSON.stringify(data));
    // console.log("kkkkkkkkkkkkkk        "+JSON.stringify(data));
    // navigate('/history')

    const encodedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/history?data=${encodedData}`);

  })
  .catch(error => console.error(error))


  // axios
  //     .post(
  //       "https://r6rp5cgye334jciepft2erepdm0wwreu.lambda-url.us-east-2.on.aws/",
  //       data
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setTranslatedText(response.data)
  //     });
  };




  
  return (
    <>
      <div>
        <Grid container direction="column" spacing={2}>
          <Grid item md={8} style={{ padding: "15px" }}>
            <Card
              style={{ alignItems: "center", margin: "5%", padding: "10px" }}
              component="form"
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={10} md={10}>
                  <Typography variant="h3" component="div" gutterBottom>
                    Language Translator
                  </Typography>
                </Grid>

                <Grid item container spacing={2} justifyContent="center">
                  <Grid item xs={10} md={5} style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      fullWidth
                      label="Enter the text to tanslate."
                      
                      placeholder="Enter the text to tanslate."
                      value={text}
                      onChange={(handletext)}
                      required
                    ></TextField>
                      
                    
                  </Grid>
                </Grid>


                <Grid item container spacing={2} justifyContent="center">
                  <Grid item xs={10} md={5} style={{ display: "flex", alignItems: "center" }}>
                  <FormControl style={{ minWidth: "xs", justifyContent: "center" }}>
                    <Select value={lang} onChange={(handleTranslation)}>
                      {myArray.map((item) => (
                        <MenuItem value={item.code}>{item.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  </Grid>
                </Grid>




                <Grid item container spacing={2} justifyContent="center">
                  <Grid item xs={10} md={5} style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      fullWidth
                      placeholder="Translated Text"
                      label="Translated Text"
                      value={translatedtext}
                      onChange={(e) => setTranslatedText(e.target.value)}
                      required
                    ></TextField>
                    
                  </Grid>
                </Grid>


                <Grid item container spacing={2} justifyContent="center">
                  <Box>
                    <Button onClick={handleHistory}>
                      History
                    </Button>
                  </Box>
                </Grid>


                <Grid item container spacing={2} justifyContent="center">
                  <Box>
                    <Button onClick={handleEmail}>
                      Email
                    </Button>
                  </Box>
                </Grid>

                

              </Grid>
            </Card>
          </Grid>
          <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
            {" "}
            {" "}
          </div>
        </Grid>
        
      </div>
    </>
  );
}

export default Translator;