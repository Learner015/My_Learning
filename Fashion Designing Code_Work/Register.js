import React, { useState } from 'react';
import {
  Grid,
  Avatar,
  CssBaseline,
  Button,
  TextField,
  Link,
  Paper,
  Typography,
  Box,
  Checkbox,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useTheme } from './DarkMode';




function Register() {
  const navigate = useNavigate();
  const { themeMode } = useTheme();

  const [ticked,setTicked] = useState(false)
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [currpass, setcurrPass] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleChangeCurrPass = (e) => {
    setcurrPass(e.target.value);
  };

  const handleCheckboxChange = (e) => { 
    setTicked(e.target.checked)
   }

  const handleSubmit = (e) => {
    
    e.preventDefault();  // Prevent default form submission
    if (ticked) {
       localStorage.setItem('Designer', 'Is Designer')
       }
      else {
         localStorage.setItem('Designer', 'Is Client')
      }
    if (pass === currpass) {
      console.log(email, pass, currpass);
      alert('Successfully signed up');
      setEmail('');
      setPass('');
      setcurrPass('');
      navigate('/login');
      localStorage.setItem("Email",email)
      localStorage.setItem("Password",pass)
    } else {
      alert("Passwords do not match. Please try again.");
      setPass('')
      setcurrPass('')
      setTicked(false)
      
      navigate('/sign-up')
    }
  };

  return (
    
      <Grid container component="main" sx={{ backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414', color: themeMode === 'light' ? '#000' : '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', m: 1 }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: themeMode === 'light' ? '#000' : '#fff' }}>
            Sign Up
          </Typography>
          <Box component="form" sx={{ width: '100%', marginTop: 1 }} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              InputProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
              InputLabelProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={handleChangePass}
              InputProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
              InputLabelProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="confirm-password"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              onChange={handleChangeCurrPass}
              InputProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
              InputLabelProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
            />
           <Box sx={{display:"flex", alignItems:"center",color : themeMode === 'light'?'#000':'#fff'}}>
           <Checkbox checked={ticked} onChange={handleCheckboxChange} />
            <Typography>
              Are you the designer?
            </Typography>
           </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, marginBottom: 2 }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2" onClick={() => navigate('/login')} sx={{ cursor: 'pointer' }}>
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    
  );
}

export default Register;
