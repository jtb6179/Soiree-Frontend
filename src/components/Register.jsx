import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DateFnsUtils from '@date-io/date-fns';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const classes = useStyles(); 


  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")
  const [username, setUsername] = useState(" ")
  const [birthPlace, setBirthPlace] = useState(" ")
  const [bio, setBio] = useState(" ")
  const [school, setSchool] = useState(" ")
  const [firstName, setFirstName] = useState(" ")
  const [lastName, setLastName] = useState(" ")
  const [occupation, setOccupation] = useState(" ")
  const [what_are_you_seeking_on_site, setWhat_are_you_seeking_on_site] = useState("Friendship")
  const [age, setAge] = useState(new Date('2014-08-18T21:11:54'));
  const [errors, setErrors] = useState(" ")
  // const [selectedDate, setSelectedDate] = 
  // const [value, setValue] = React.useState('Friendship');

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard');
    } 
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      username: username,
      birthPlace: birthPlace,
      bio: bio,
      school: school,
      age: age,
      password: password,
      firstName: firstName,
      lastName: lastName,
      occupation: occupation,
      what_are_you_seeking_on_site: what_are_you_seeking_on_site,
    };

    props.handleSubmit(user)
  };

  const handleChange = (event) => {
    setWhat_are_you_seeking_on_site(event.target.value);
  };

  // const handleDateChange = (date) => {
  //   setAge(date);
  // };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}  noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="Username"
                  variant="outlined"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
            </Grid>
              
              <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
              <TextareaAutosize 
              aria-label="minimum height" 
              fullWidth
              label="Bio" 
              rowsMin={3} 
              placeholder="Bio" 
              value={bio}
              onChange={e => setBio(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Birth Place"
                label="Where were you born"
                id="birthPlace"
                value={birthPlace}
                onChange={e => setBirthPlace(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="School"
                label="School"
                id="School"
                value={school}
                onChange={e => setSchool(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Occupation"
                label="Occupation"
                id="Occupation"
                value={occupation}
                onChange={e => setOccupation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">What are you here for</FormLabel>
              <RadioGroup aria-label="what_are_you_seeking_on_site" name="what_are_you_seeking_on_site" value={what_are_you_seeking_on_site} onChange={handleChange}>
              <FormControlLabel value="Dating" control={<Radio />} label="Dating" />
              <FormControlLabel value="Friendship" control={<Radio />} label="Friendship" />
              <FormControlLabel value="Networking" control={<Radio />} label="Networking" />
              <FormControlLabel value="Business" control={<Radio />} label="Business" />
            </RadioGroup>
            </FormControl>
            </Grid>

            <Grid item xs={12}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
                }}
                value={age}
                onChange={e => setAge(e.target.value)} 
               />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onSubmit={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}