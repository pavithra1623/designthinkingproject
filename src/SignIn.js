import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockoutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInError: false,
            signIn: false,
            email: "",
            password: ""
        };
        //this.onSubmitHandler= this.onSubmitHandler.bind(this); 
    }

    onSubmitHandler(event) {
        console.log("Success");
        let email = this.state.email;
        let password = this.state.password;
        if (email === 'coradashboard@gmail.com' && password === 'admin') {
            this.setState({
                signIn: true
            });
        } else {
            this.setState({
                signInError: true
            });
        }
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    setStyles() {
        const useStyles = makeStyles((theme) => ({
            seeMore: {
                marginTop: theme.spacing(3),
                color: 'red'
            },
        }));
        return useStyles;
    }

    render() {
        const classes = this.setStyles();
        console.log(this.state.signIn);
        let errorMessage;
        if (this.state.signInError) {
            errorMessage = <div><p>Incorrect Username or/and password</p></div>
        }
        if (this.state.signIn) {
            return (
                <Dashboard />
            );
        } else {
            return (
                <Container component="main" maxwidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        {errorMessage}
                        <Avatar className={classes.avatar}>
                            <LockoutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullwidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleEmailChange.bind(this)}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullwidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={this.handlePasswordChange.bind(this)}
                                autocomplete="current-password"
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullwidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onclick={this.onSubmitHandler.bind(this)}
                            >
                                Sign In
                            </Button>
                            <Grid container >
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2"> {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            );
        }
    }
}

export default SignIn;