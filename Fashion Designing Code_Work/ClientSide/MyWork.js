import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '../DarkMode';
function MyWork() {
  const [imageIndex, setImageIndex] = useState(0);
  const {themeMode} = useTheme()

  const images = [{
    img : 'https://th.bing.com/th/id/OIP.oetunV9HCGU1R0tovjamhgAAAA?rs=1&pid=ImgDetMain',
    
  },
  {
    img:  'https://i.pinimg.com/originals/9f/e5/d2/9fe5d2da3c1662a5a89fd6a161f8bac4.jpg',
  },
   
   {
    img : 'https://m.media-amazon.com/images/I/41YW3p4T+kL._AC_UY1100_.jpg',
   },
    {
    img: 'https://i.pinimg.com/originals/7b/92/8d/7b928d4341581d4dd1af7cd4944eb05c.jpg',
},
{
  img: 'https://img.perniaspopupshop.com/catalog/product/m/h/MHRU041923-001_1.jpg?impolicy=detailimageprod',
},

];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index + 1) % images.length);
    }, 5000);
    return () => { clearInterval(interval); };
  }, [imageIndex]);

  return (
     <div style={{backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414',color:'light'?'000':'fff'}}>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'scroll',scrollBehavior:'auto'}}>
        <img src={images[imageIndex]} alt='image show' style={{ maxHeight: '275px', minWidth: '275px', margin: '5px', padding: '5px', objectFit: 'contain' }} />
      </div> */}
      <Box>
      <ImageList sx={{ width: '100%' }} variant="woven" cols={3} gap={8}>
      {images.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            // alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </Box>
    </div>
  );
}

export default MyWork;
