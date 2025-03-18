import React from 'react'
import { Link,Box,Typography,Container } from '@mui/material'

function Footer() {
  return (
    <div style={{width:'100%'}}>
                <Box
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                        p: 6,
                    }}
                    component="footer"
                >
                    <Container maxWidth="sm">
                        <Typography variant="body2" color="text.secondary" align="center">
                            {"Copyright © "}
                            <Link color="inherit" href="https://fashion-world.com/">
                                Your Website
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </Typography>
                    </Container>
                </Box>

            </div>
          
  )
}

export default Footer
