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
  import UserPool from './UserPool';
  import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
  import {useNavigate} from 'react-router-dom';
  
  function Home() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

      const handleSubmit = async (event) => {
        console.log(email)
        console.log(password)
        event.preventDefault();
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
    
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });
        
        user.authenticateUser(authDetails, {
          onSuccess: (data) => {
            console.log(data);
            console.log('onSuccess:', data);
            alert('Login successful');
            navigate('/translator', { state: { myData: email } });
          },
          onFailure: (err) => {
            console.error('onFailure:', err);
            alert('Login failed');
          },
          newPasswordRequired: (data) => {
            console.log('newPasswordRequired:', data);
          },
        });
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
Login                    </Typography>
                  </Grid>
  
                  <Grid item container spacing={2} justifyContent="center">
                    <Grid item xs={10} md={5}>
                      <TextField
                        fullWidth
                        label="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      ></TextField>
                      {/* {errors.email && <p>{errors.email}</p>} */}
                    </Grid>
                  </Grid>
  
                  <Grid item container spacing={2} justifyContent="center">
                    <Grid item xs={10} md={5}>
                      <TextField
                        fullWidth
                        type="password"
                        placeholder="Password"
                        label="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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
                        Enter
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
  
  export default Home;


