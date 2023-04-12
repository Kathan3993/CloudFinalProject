import {
    Box,
    Button,
    Card,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import axios, * as others from "axios";
  import UserPool from "./UserPool";
 
  import {useNavigate} from 'react-router-dom';

  
  
  
  //const axios = require("axios");
  
  function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const navigate = useNavigate();
    const [errorregistration, seterrorregistration] = useState("");
    const [emailError, setemailidError] = useState("")


    const handleName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);  
      };

      const handleEmail = (event) => {
        seterrorregistration("");
        const email = event.target.value;
        const regexofemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!email.trim()) {
            setemailidError("Email is not correct");
        }
        else if(!regexofemail.test(email)) {
            setemailidError("Email is not correct");
        } else {
            setemailidError('');
        }
        setEmail(email);  
      };

      const handlePassword = (event) => {
        seterrorregistration("");
        const passwordValue = event.target.value;
        const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        if(!passwordValue.trim()) {
            setPasswordError("Passord is incorrect");
        } else if(!passwordRegex.test(passwordValue)) {
            const err = "Password doesn't match the criteria, \n" + 
                  "at least one uppercase letter, \n" +
                  "at least one uppercase letter,\n" +
                  "at least one special character "+
                  "at least one lowercase letter,\n" 

            setPasswordError(err)
        } else {
            setPasswordError("");
        }
        setPassword(passwordValue);  
      };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const data = {
        email: email
    };

      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
            console.error(err);
            alert(err)
            navigate('/')
        }
        else{

        
           axios
        .post(
         "https://g6plwjxcxe.execute-api.us-east-2.amazonaws.com/deploy/allemail",
         {
          email: email
      }
        )
      .then((response) => {
        console.log(response.data);
       // setTranslatedText(response.data)
        
      });
          navigate('/login')
        }

        
        
    })
    };









    const handleLogin = (e) => {
      e.preventDefault();
      
      navigate('/login')

      
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
                      Registration
                    </Typography>
                  </Grid>
  
                  <Grid item container spacing={2} justifyContent="center">
                    <Grid item xs={10} md={5}>
                      <TextField
                        fullWidth
                        label="Name"
                        onChange={(handleName)}
                        placeholder="Name"
                        value={name}
                        
                        required
                      ></TextField>
                      {/* {errors.email && <p>{errors.email}</p>} */}
                    </Grid>
                  </Grid>
  
                  <Grid item container spacing={2} justifyContent="center">
                    <Grid item xs={10} md={5}>
                      <TextField
                        fullWidth
                        placeholder="Email"
                        label="email"
                        value={email}
                        onChange={(handleEmail)}
                        required
                      ></TextField>
                      {/* {errors.password && <p>{errors.passwprd}</p>} */}
                    </Grid>
                  </Grid>


                  <Grid item container spacing={2} justifyContent="center">
                    <Grid item xs={10} md={5}>
                      <TextField
                        fullWidth
                        placeholder="Password"
                        label="password"
                        value={password}
                        onChange={(handlePassword)}
                        type="password"
                        required
                      ></TextField>
                      {/* {errors.password && <p>{errors.passwprd}</p>} */}
                    </Grid>
                  </Grid>
  
                  
  
                
  
                  <Grid item sx={10} md={5}>
                    <Box>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mb: 3 }}
                        onClick={handleSubmit}
                      >
                        Register
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mb: 3 }}
                        onClick={handleLogin}
                      >
                        login
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
  
  export default Registration;