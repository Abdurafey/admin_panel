import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useTheme } from '@mui/system';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const theme = useTheme();

  const validateForm = () => {
    let isValid = true;

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      // Perform sign-in logic here
      console.log('Sign In:', email, password);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSignIn}>
          Sign In
        </Button>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            {`Enter Email & Password to login`}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          {/* Additional content, if needed */}
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
