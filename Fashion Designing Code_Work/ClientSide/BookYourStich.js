// 1. resposive
// 2. select -> click -> + cnt(< 1) - => incrementor or decrementor logic => for this
//    we implemented handleincdec


import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box, Button, CardActions } from '@mui/material';
import { useTheme } from '../DarkMode';
import YourCart from './YourCart';
import GownPic from '../Templates/party gown pic.jpeg';
import Pant_Plazzo from '../Templates/pants and plazzo pic.jpg';
// import { color } from 'framer-motion';

function BookYourStich() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cnt,setCnt] = useState({})
  const { themeMode } = useTheme();
  // const [lehenga,setLehengacnt] = useState()


  const handleSelect = (item) => {
    setSelectedItem(item);
    handleInc(item);
    console.log("selected");
  };
  



const handleInc = (item) => {
  setCnt((prevCounts) => {
    const newCounts = { ...prevCounts };
    newCounts[item] = (newCounts[item] || 0)+1 
    // if (newCounts[item] === 1) {
    //   newCounts[item] = 1; // Ensure it starts from 1
    // }
    return newCounts;
  });
};

const handleDec = (item) => {
  setCnt((prevCounts) => {
    const newCounts = { ...prevCounts };
    if (newCounts[item] > 1) {
      newCounts[item] -= 1;
    } else if (newCounts[item] === 1) {
      delete newCounts[item];
      setSelectedItem(null);
    }
    return newCounts;
  });
};<CardActions>
  {selectedItem === 'lehenga' ? (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button size="small" variant="contained" color="primary" onClick={() => handleDec('lehenga')}>
        -
      </Button>
      <Typography variant="body2" sx={{ mx: 2, color: themeMode === 'light' ? '#000' : '#fff' }}>
        {cnt['lehenga'] || 0}
      </Typography>
      <Button size="small" variant="contained" color="primary" onClick={() => handleInc('lehenga')}>
        +
      </Button>
    </Box>
  ) : (
    <Button size="small" variant="text" color="success" onClick={() => handleSelect('lehenga')}>
      Select
    </Button>
  )}
</CardActions>

// Repeat similar changes for other items like 'salwaar', 'pants', 'sharara', 'gown', and 'indowestern'    

  return (
    <Box sx={{ padding: '5px', backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414', color: themeMode === 'light' ? '#000' : '#fff' }}>
      <Grid container spacing={2} sx={{ overflowY: 'auto' }}>
        {/* Grid 1 */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 270, display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                sx={{ height: 300 }}
                image="https://media.weddingz.in/images/7385ab7c4de2e0122c4fd0b4cfde4e3c/8-pink-bridal-lehengas-which-you-should-definitely-bookmark-for-your-D-day-2.jpg"
                title="Designer Lehenga Choli From Sarees And Material"
               
              />
              <CardContent sx={{ flexGrow: 1, color: themeMode === 'light' ? '#000' : '#fff' }}>
                <Typography gutterBottom variant="h5" component="div">
            Designer Lehenga Choli From Sarees And Material
                </Typography>
              </CardContent>
              <CardActions>
          {selectedItem === 'lehenga' && cnt > 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button size="small" variant="contained" color="primary" onClick={() => handleDec('lehenga')}>
          -
              </Button>
              <Typography variant="body2" sx={{ mx: 2, color: themeMode === 'light' ? '#000' : '#fff' }}>
          {cnt['lehenga'] || 0}
              </Typography>
              <Button size="small" variant="contained" color="primary" onClick={() => handleInc('lehenga')}>
          +
              </Button>
            </Box>
          ) : (
            <Button size="small" variant="text" color="success" onClick={() => handleSelect('lehenga')}>
              Select
            </Button>
          )}
        </CardActions>
            </Card>
          </Grid>

          {/* Grid 2 */}
               <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 270, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
            sx={{ height: 270, borderColor: 'teal' }}
            image="https://th.bing.com/th/id/OIP.oPabQy4_WPWCvZqThVwVJgHaJr?w=800&h=1046&rs=1&pid=ImgDetMain"
            title="Salwar - Suit"
                 
                />
                <CardContent sx={{ flexGrow: 1, color: themeMode === 'light' ? '#000' : '#fff' }}>
            <Typography gutterBottom variant="h5" component="div">
            Salwar Suits
            </Typography>
                </CardContent>
                <CardActions>
             {selectedItem === 'salwaar'&& cnt > 0 ?
            ( <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <Button size="small" variant="contained" color="primary" onClick={() => handleDec('salwaar')}>
              -
              </Button>
               <Typography variant="body2" sx={{ mx: 2,color: themeMode === 'light'?'#000':'#fff' }}>
                {cnt['salwaar'] || 0}
                </Typography>
                 <Button size="small" variant="contained" color="primary" onClick={() => handleInc('salwaar')}>
                +
                </Button> 
                </Box> ) : ( <Button size="small" variant="text" color="success" onClick={() => handleSelect('salwaar')}>
                  Select
                  </Button> )}
                   </CardActions>
                </Card>
              </Grid>

              {/* Grid 3 */}
               <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 270, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
            sx={{ height: 270, borderColor: 'teal' }}
            image={Pant_Plazzo}
                />
                <CardContent sx={{ flexGrow: 1, color: themeMode === 'light' ? '#000' : '#fff' }}>
            <Typography gutterBottom variant="h5" component="div">
            Pants And Plazzos
            </Typography>
                </CardContent>
                <CardActions>
             {selectedItem === 'pants' && cnt > 0 ?
            ( <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <Button size="small" variant="contained" color="primary" onClick={() => handleDec('pants')}>
              -
              </Button>
               <Typography variant="body2" sx={{ mx: 2,color: themeMode === 'light'?'#000':'#fff' }}>
                {cnt['pants'] || 0}
                </Typography>
                 <Button size="small" variant="contained" color="primary" onClick={() => handleInc('pants')}>
                +
                </Button> 
                </Box> ) : ( <Button size="small" variant="text" color="success" onClick={() => handleSelect('pants')}>
                  Select
                  </Button> )}
                   </CardActions>
                </Card>
              </Grid>
              {/* Grid 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 270, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              sx={{ height: 320, borderColor: 'teal' }}
              image="https://i.pinimg.com/originals/a7/e4/1b/a7e41b19e1f4437e91254dbf3f7b5030.jpg"
              title="Sharara"
            />
            <CardContent sx={{ flexGrow: 1, color: themeMode === 'light' ? '#000' : '#fff' }}>
              <Typography gutterBottom variant="h5" component="div">
                Sharara
              </Typography>
            </CardContent>
            <CardActions>
               {selectedItem === 'sharara' && cnt > 0?
                ( <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   <Button size="small" variant="contained" color="primary" onClick={() => handleDec('sharara')}>
                    -
                    </Button>
                     <Typography variant="body2" sx={{ mx: 2,color: themeMode === 'light'?'#000':'#fff' }}>
                      {cnt['sharara'] || 0}
                      </Typography>
                       <Button size="small" variant="contained" color="primary" onClick={() => handleInc('sharara')}>
                        +
                        </Button> 
                        </Box> ) : ( <Button size="small" variant="text" color="success" onClick={() => handleSelect('sharara')}>
                          Select
                          </Button> )}
                           </CardActions>
          </Card>
        </Grid>

        {/* Grid 5 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 270, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              sx={{ height: 320, borderColor: 'teal' }}
              image={GownPic}
              title="Party Wear Gowns"
            />
            <CardContent sx={{ flexGrow: 1, color: themeMode === 'light' ? '#000' : '#fff' }}>
              <Typography gutterBottom variant="h5" component="div">
                Party Wear Gowns
              </Typography>
            </CardContent>
            <CardActions>
               {selectedItem === 'gown' && cnt > 0 ?
                ( <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   <Button size="small" variant="contained" color="primary" onClick={() => handleDec('gown')}>
                    -
                    </Button>
                     <Typography variant="body2" sx={{ mx: 2,color: themeMode === 'light'?'#000':'#fff' }}>
                      {cnt['gown'] || 0}
                      </Typography>
                       <Button size="small" variant="contained" color="primary" onClick={() => handleInc('gown')}>
                        +
                        </Button> 
                        </Box> ) : ( <Button size="small" variant="text" color="success" onClick={() => handleSelect('gown')}>
                          Select
                          </Button> )}
                           </CardActions>
          </Card>
        </Grid>

        {/* Grid 6 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 270, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              sx={{ height: 320, borderColor: 'teal' }}
              image="https://www.urbanwomania.com/wp-content/uploads/2022/06/Yellow-Indo-Western-Crop-Top-Plazzo-Set-with-Shrug.jpg"
              title="Indo Western Chic Outfits"
            />
            <CardContent sx={{ flexGrow: 1, color: themeMode === 'light' ? '#000' : '#fff' }}>
              <Typography gutterBottom variant="h5" component="div">
                Indo Western Chic Outfits
              </Typography>
            </CardContent>
            <CardActions>
               {selectedItem === 'indowestern' && cnt > 0?
                ( <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   <Button size="small" variant="contained" color="primary" onClick={() => handleDec('indowestern')}>
                    -
                    </Button>
                     <Typography variant="body2" sx={{ mx: 2,color: themeMode === 'light'?'#000':'#fff' }}>
                      {cnt['indowestern' ] || 0}
                      </Typography>
                       <Button size="small" variant="contained" color="primary" onClick={() => handleInc('indowestern')}>
                        +
                        </Button> 
                        </Box> ) : ( <Button size="small" variant="text" color="success" onClick={() => handleSelect('indowestern')}>
                          Select
                          </Button> )}
                           </CardActions>
                          
          </Card>
          
        </Grid>  
        
      </Grid>
      <YourCart cnt={cnt} />
    </Box>
  );
}

export default BookYourStich;
