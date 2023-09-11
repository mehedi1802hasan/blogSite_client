import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../Shared/Navbar';
import { AuthContext } from './Provider';
import { useContext } from 'react';

const defaultTheme = createTheme();

const Registration = () => {
  const { loading, user, signUpUser,  singInUser,  logOut}=useContext(AuthContext)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    imageUrl: '',
  });

  const [formErrors, setFormErrors] = React.useState({
    name: false,
    email: false,
    password: false,
    imageUrl: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
       const form=event.target;
          const email=form.email.value;
          const password=form.password.value;
          const name=form.name.value;
          const imageUrl=form.imageUrl.value;
            signUpUser(email,password)
            .then(result=>{
              const signUped=result.user;
              console.log(signUped)
            })
            .catch(error=>{
              console.log(error.message)
            })
    // Check for empty fields and display validation errors
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = true;
      }
    }
    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Clear the validation error for the field when it's changed
    setFormErrors({ ...formErrors, [name]: false });
  };

  return (
    <div>
        <Navbar></Navbar>
    <ThemeProvider  theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registration
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                error={formErrors.name}
                helperText={formErrors.name ? 'Name is required' : ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
                helperText={formErrors.email ? 'Email is required' : ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={formErrors.password}
                helperText={formErrors.password ? 'Password is required' : ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="imageUrl"
                label="imageUrl"
                name="imageUrl"
                autoComplete="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                error={formErrors.imageUrl}
                helperText={formErrors.imageUrl ? "imageUrl's  is required" : ''}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}
export default Registration;
