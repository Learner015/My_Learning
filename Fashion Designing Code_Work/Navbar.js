import React from 'react';
import { ListItem, ListItemButton, ListItemText, Divider, Typography, List, Drawer, Button, Container, ListItemIcon, Box, Tabs, Tab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import {  useTheme } from './DarkMode';  // Import useTheme
import SwitchTheme from './SwitchTheme';  // Import SwitchTheme

const samePageLinkNavigation = (event) => {
    if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
};

const LinkTab = (props) => {
    return (
        <Tab
            component={NavLink}
            {...props}
            onClick={(event) => {
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
        />
    );
};

LinkTab.propTypes = {
    selected: PropTypes.bool,
};

function Navbar() {
    const [drawer, setDrawer] = React.useState({ left: false });
    const [value, setValue] = React.useState(0);
    const { toggleTheme } = useTheme();  // Access toggleTheme from context
    const navigate = useNavigate();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer({ ...drawer, [anchor]: open });
    };

    const handleChange = (event, newValue) => {
        if (event.type !== 'click' || (event.type === 'click' && samePageLinkNavigation(event))) {
            setValue(newValue);
            switch (newValue) {
                case 0:
                    navigate('/');
                    break;
                case 1:
                    navigate('/MyWork');
                    break;
                case 2:
                    navigate('/about');
                    break;
                case 3:
                    navigate('/contact-us');
                    break;
                case 4:
                    navigate('/sign-up');
                    break;
                case 5:
                    navigate('/login');
                    break;
                case 6:
                    navigate('/yourcart');
                    break;
                default:
                    navigate('/');
            }
        }
    };

    const list = () => (
        <Box sx={{ width: 250, color: themeMode==='light'?'ThreeDDarkShadow':'#e3e3e3', backgroundColor: themeMode=== 'light' ?'#f0f0f0':'#232b2e' }} role="presentation" onClick={(event) => toggleDrawer('left', false)}>
            <List>
                <ListItem key='Fashion World' disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemText primary='Fashion World' sx={{ fontVariant: 'historical-forms', fontSize: '2em', fontPalette: 'dark',color: themeMode === 'light'?'#000':'e3e3f3'

                         }} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key='Book Appointment' disablePadding>
                    <ListItemButton onClick={() => navigate("/booking")}>
                        <ListItemIcon>
                            <ConfirmationNumberIcon />
                        </ListItemIcon>
                        <ListItemText primary='Book Appointment' />
                    </ListItemButton>
                </ListItem>

                <ListItem key='My Work' disablePadding>
                    <ListItemButton onClick={() => navigate('/MyWork')}>
                        <ListItemIcon>
                            <GroupWorkIcon />
                        </ListItemIcon>
                        <ListItemText primary='My Work' />
                    </ListItemButton>
                </ListItem>

                <ListItem key='About' disablePadding>
                    <ListItemButton onClick={() => navigate('/about')}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary='About' />
                    </ListItemButton>
                </ListItem>

                <ListItem key='Contact Us' disablePadding>
                    <ListItemButton onClick={() => navigate('/contact-us')}>
                        <ListItemIcon>
                            <ConnectWithoutContactIcon />
                        </ListItemIcon>
                        <ListItemText primary='Contact Us' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
const {themeMode} = useTheme()
    return (
        
        <Container sx={{ backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414',color:'light'?'000':'fff',  margin: '0px', padding: '0', width: 'auto' }}>
            <Typography
                variant="h3"
                fontFamily={'cursive'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'transparent',
                    padding: '10px',
                    fontStyle: 'oblique',
                    wordSpacing: '5px',
                    background: themeMode ==='light'? `url(${'https://wallpaperaccess.com/full/4478177.jpg'})`:`url(${'https://thumbs.dreamstime.com/b/neon-wavy-light-nightclub-background-swirls-black-266414809.jpg'})`,
                    backgroundClip: 'text',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textFillColor: 'transparent',
                }}
            >
                Fashion World
            </Typography>
            
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
                <Drawer
                    anchor="left"
                    open={drawer.left}
                    onClose={() => setDrawer({ ...drawer, left: false })}
                   
                >
                    {list()}
                </Drawer>

                <Box sx={{ flex: 1, display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <Tabs
                        value={value}
                        onChange={(event, newValue) => handleChange(event, newValue)}
                        aria-label="nav tabs example"
                        role="navigation"
                    >
                        <LinkTab label="Home" value={0} onClick={(e) => navigate('/')} />
                        <LinkTab label="MyWork" value={1} onClick={(e) => navigate('/MyWork')} />
                        <LinkTab label="About" value={2} onClick={(e) => navigate('/about')} />
                        <LinkTab label="Contact Us" value={3} onClick={(e) => navigate('/contact-us')} />
                        <LinkTab label="Sign Up" value={4} onClick={(e) => navigate('/sign-up')} />
                        <LinkTab label="Login" value={5} onClick={(e) => navigate('/login')} />
                        <LinkTab label="Cart" value={6} onClick={(e) => navigate('/yourcart')} />

                    </Tabs>
                    <SwitchTheme toggleTheme1={toggleTheme} />  {/* Add SwitchTheme component */}
                </Box>
            </Box>
        </Container>
       
    );
}

export default Navbar;
