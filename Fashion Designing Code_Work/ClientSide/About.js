import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { teal, purple } from '@mui/material/colors';
import { useTheme } from '../DarkMode';

function About() {
  const { themeMode } = useTheme();

  return (
    <Container 
      
      sx={{ 
        margin:0,
        height:'100vh',
        width:'100vw',        
        // padding: '0px', 
        backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414', 
        color: themeMode === 'light' ? '#000' : '#fff' 
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          color: purple[500], 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}
      >
        Introducing Fashion World - Your Exclusive Online Tailoring Partner
      </Typography>

      <Paper 
        elevation={3} 
        sx={{ 
          padding: '20px', 
          backgroundColor: themeMode === 'light' ? teal[50] : teal[900] 
        }}
      >
        <Typography 
          paragraph 
          sx={{ 
            color: themeMode === 'light' ? '#666' : '#ccc', 
            fontSize: 18 
          }}
        >
          Imagine having a personal tailor at your fingertips, providing you with bespoke tailoring services without the hassle of waiting in lines or traveling to a physical store. Welcome to Fashion World, the online tailoring service that brings style and convenience to your fingertips.
        </Typography>
      </Paper>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              color: purple[500], 
              fontWeight: 'bold', 
              textAlign: 'center' 
            }}
          >
            Exclusive Service with a Personal Touch
          </Typography>

          <Paper 
            elevation={3} 
            sx={{ 
              padding: '20px', 
              backgroundColor: themeMode === 'light' ? teal[50] : teal[900] 
            }}
          >
            <Typography 
              paragraph 
              sx={{ 
                color: themeMode === 'light' ? '#333' : '#ccc', 
                fontSize: 16 
              }}
            >
              With Fashion World, you'll work one-on-one with our expert tailor to create a customized outfit that fits you perfectly. Our tailor has years of experience and a keen eye for detail, ensuring that every garment is crafted with care and precision.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
