import React, { useState } from 'react';
import {
  Grid,
  Avatar,
  CssBaseline,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import login from './Templates/login.jpg';
import { useTheme } from './DarkMode';
import { useNavigate } from 'react-router';

const useStyles = styled((theme) => ({
  root: {
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundImage: `url(${login})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
 
  const { themeMode } = useTheme();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = () => {
    // setInterval(() => { console.log(email, pass) }, 30000);
    if (email===localStorage.getItem('Email') && pass === localStorage.getItem('Password') && localStorage.getItem('Designer')==='Is Client' ){
        navigate('/bookyourstich')
    }
    else if (email===localStorage.getItem('Email') && pass === localStorage.getItem('Password') && localStorage.getItem('Designer')==='Is Designer'){
      navigate('/orderlist')
    }
    else{
      
      navigate('/login')
    }
  };

  return (
    <Grid container component='main' sx={{ backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414', color: themeMode === 'light' ? '#000' : '#fff', padding: '15px', alignItems: 'center', justifyContent: 'center' }} className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141411', color: themeMode === 'light' ? '#000' : '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'primary.main', m: 1 }}>
            <LockOutlined />
          </Avatar>
          <Typography component='h1' variant='h5' sx={{ backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414', color: themeMode === 'light' ? '#000' : '#fff' }}>
            Sign In
          </Typography>
          <form style={{ padding: '15px', backgroundColor: themeMode === 'light' ? '#f0f0f0' : '#141414', color: themeMode === 'light' ? '#000' : '#fff' }} validate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id="email"
              label="Email Address"
              name='email'
              autoComplete='email'
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
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id="password"
              label="Password"
              name='password'
              type='password'
              autoComplete='current-password'
              onChange={handleChangePass}
              InputProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
              InputLabelProps={{
                style: { color: themeMode === 'light' ? '#000' : '#fff' },
              }}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label="Remember me"
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={() => { handleSubmit() }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot Password
                </Link>
              </Grid>
              <Grid item>
                <Link variant='body2' onClick={() => navigate('/sign-up')}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
