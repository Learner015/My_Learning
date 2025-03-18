import React from 'react';
import { Box, Container, Typography, Grid, Paper, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import { useTheme } from './DarkMode';

import 'bootstrap/dist/css/bootstrap.min.css';

import payment from './Templates/Payment.jpg';
import Fabrics from './Templates/fabric.jpg';
import icon1 from './Templates/icon1.png';
import icon3 from './Templates/icon3.jpg';
import measurement_pic from './Templates/measurement_pic.jpg';
import final from './Templates/finalwork.jpg';
import HomePic from './Templates/Home Pic.jpeg';
import HomePic2 from './Templates/HomePic2.jpeg';
import suggestion from './Templates/suggestion.jpg';
import Lehenga_Choli from './Templates/Lehenga_Choli.jpg';
import Salwaar_Suit from './Templates/Salwaar_Suit.jpg';
import Sharara from './Templates/Sharara.jpg';
import PLazzo from './Templates/Plazzo.jpg';
import IndoWestern from './Templates/IndoWestern.jpg';
import Jumpsuit from './Templates/Jumpsuit.jpg';
import Frock from './Templates/Frock.jpg';
import Kurti from './Templates/Kurti.jpg';
import Shrug from './Templates/Shrug With Lehenga.jpg';
import PartWear from './Templates/PartyWear.jpg';
import Blouse from './Templates/Blouse.jpg';
import Belt from './Templates/Navratri Belt.jpg';

function Home() {
  const { themeMode } = useTheme();

  const data = [
    { pic: HomePic },
    { pic: HomePic2 },
  ];

  const itemData = [
    { img: Lehenga_Choli, title: 'Lehenga Choli', author: 'Lehenga Choli' },
    { img: Salwaar_Suit, title: 'Salwaar Suit', author: 'Salwaar Suit' },
    { img: PLazzo, title: 'PLazzo', author: 'PLazzo' },
    { img: Jumpsuit, title: 'Jumpsuit', author: 'Jumpsuit' },
    { img: Sharara, title: 'Sharara', author: 'Sharara' },
    { img: IndoWestern, title: 'IndoWestern', author: 'IndoWestern' },
    { img: Frock, title: 'Frock', author: 'Frock' },
    { img: Kurti, title: 'Kurti', author: 'Kurti' },
    { img: Shrug, title: 'Shrug', author: 'Shrug' },
    { img: PartWear, title: 'Party Wear Gown', author: 'Party Wear Gown' },
    { img: Blouse, title: 'Blouse', author: 'Blouse' },
    { img: Belt, title: 'Navratri Belt', author: 'Navratri Belt With Mobile Cover' }
  ];

  return (
    <Container sx={{ backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414', color: themeMode === 'light' ? '#000' : '#fff', minHeight: '100vh', padding: '2em' }}>
      <Carousel>
        {data.map((val, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={val.pic}
              alt={`Carousel image ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <Box sx={{ backgroundColor: 'lightcoral', marginTop: '20px' }}>
        <Typography variant="h4" sx={{ color: 'black', fontFamily: 'fantasy', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          How Does It Work?
        </Typography>
      </Box>
      
      <Box sx={{ padding: '10px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'row', color: themeMode === 'light' ? '#000' : '#fff', padding: '10px' }}>
              <img src={Fabrics} alt="fabrics" style={{ marginRight: '10px' }} />
              <Typography variant='caption' fontStyle='oblique' fontSize='16px'>
                Get Your Fabric Stitched From Us Or We Even Source The Fabric For You.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'row', color: themeMode === 'light' ? '#000' : '#fff', padding: '10px' }}>
              <img src={icon1} alt="book appointment" style={{ marginRight: '10px' }} />
              <Typography variant="caption" fontStyle='oblique' fontSize='16px'>
                Book Your Stitch
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'row', color: themeMode === 'light' ? '#000' : '#fff', padding: '10px' }}>
              <img src={suggestion} alt="design selection" style={{ marginRight: '10px' }} />
              <Typography variant='caption' fontStyle='oblique' fontSize='16px'>
                Select From Variety Of Design Ideas Or Send Us Your Choice Of Design.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'row', color: themeMode === 'light' ? '#000' : '#fff', padding: '10px' }}>
              <img src={measurement_pic} alt="measurements" style={{ marginRight: '10px' }} />
              <Typography variant='caption' fontStyle='oblique' fontSize='16px'>
                Send Your Measurements Online Or Send Us Your Sample.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'row', color: themeMode === 'light' ? '#000' : '#fff', padding: '10px' }}>
              <img src={icon3} alt="stitch in progress" style={{ marginRight: '10px' }} />
              <Typography variant="caption" fontStyle='oblique' fontSize='16px'>
                Stitch In Progress
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'row', color: themeMode === 'light' ? '#000' : '#fff', padding: '10px' }}>
              <img src={final} alt="delivery" style={{ marginRight: '10px' }} />
              <Typography variant='caption' fontStyle='oblique' fontSize='16px'>
                Enjoy timely delivery: expect your order to arrive within 8-15 days, or choose to collect it at your ease.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ display: 'flex', flexDirection: 'row', color: themeMode === 'light' ? '#000' : '#fff', padding: '10px' }}>
              <img src={payment} alt="payment" style={{ marginRight: '10px' }} />
              <Typography variant="caption" fontStyle='oblique' fontSize='16px'>
                Payment
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', bgcolor: 'lightcoral', marginTop: '20px' }}>
        <Typography variant="h4" sx={{ color: 'black', fontFamily: 'fantasy', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Services
        </Typography>
      </Box>
      
      <Box sx={{ width: '100%', height: 450, marginTop: '20px' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}

export default Home;
