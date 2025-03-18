import React, { useState } from 'react';
import { Card, CardContent, TextField, Grid, Typography, Button, Box,Snackbar,Alert, ThemeProvider } from '@mui/material';
import { useTheme } from '../DarkMode';
function Contact() {

  const [value, setVal] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleChange = (e) => {
    setVal({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setOpen(true);
    setVal({ name: '', email: '', subject: '', message: '' });
  };

  const {themeMode} = useTheme()
  return (
 
      <Box sx={{ padding: '20px',backgroundColor: themeMode === 'light' ? '#141414' : '#f0f0f0',color:'light'?'000':'fff' }}>
    <Typography variant="h2">Do you have any questions for us?</Typography>
    <Typography variant="h5">Please feel free to ask</Typography>

    <Card sx={{ p: 3, mt: 3 }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>Full Name</Typography>
              <TextField 
                label="Full Name" 
                placeholder="Enter your full name" 
                fullWidth 
                required 
                name="name"
                value={value.name}
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>Email</Typography>
              <TextField 
                label="Email" 
                placeholder="Enter your email" 
                fullWidth 
                required 
                autoComplete="on" 
                name="email"
                value={value.email}
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>Subject</Typography>
              <TextField 
                label="Subject" 
                placeholder="Enter the subject of your inquiry" 
                fullWidth 
                required 
                name="subject"
                value={value.subject}
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>Message</Typography>
              <TextField 
                multiline 
                rows={5} 
                label="Message" 
                placeholder="Type your message here..." 
                fullWidth 
                required 
                name="message"
                value={value.message}
                onChange={handleChange} 
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" fullWidth type="submit">Send Message</Button>
          </Box>
          </form>
        </CardContent>
      </Card>

      {/* Snackbar 5secs */}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Your Query Is Successufully Sent
        </Alert>
      </Snackbar>

      <br />

      <Card sx={{ p: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Phone Call</Typography>
          <Typography variant="body1">Call us at +91-8200467372</Typography>
          <Button variant="contained" color="primary" href="www.tel:+91-8200467372.com">Call Us Now</Button>
        </CardContent>
      </Card>

      <Card sx={{ p: 3, mt: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Get Directions</Typography>
          <iframe
            src= "https://www.google.co.in/maps/place/Anand+Nagar,+Prahlad+Nagar,+Ahmedabad,+Gujarat+380015/@23.0161636,72.5071596,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9b2f4b3711c1:0x9fc43ea27c4d25a9!8m2!3d23.0158821!4d72.5093906!16s%2Fg%2F12lvvd6qs?entry=ttu"
            width="100%"
            height="300"
            // frameBorder="0"
            style={{ border: 0 }}
          />
        </CardContent>
      </Card>
    </Box>
  
  );
}

export default Contact;