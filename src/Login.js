import React from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar
} from "@material-ui/core";
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import { makeStyles } from '@material-ui/core/styles';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInError: false,
            signIn: false,
            email: "",
            password: "",
            signUpFlag: false,
            forgotPasswordFlag: false
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
    }

    onSubmitHandler(event) {
        console.log("Success");
        let email = this.state.email;
        let password = this.state.password;
        if (!localStorage.hasOwnProperty("usersSignedUp")) {
            alert("You have not signed up");
        } else {
            let list = JSON.parse(localStorage.getItem("usersSignedUp"));
            console.log(list);
            for (var i = 0; i < list.length; i++) {
                if (list[i].email === email && list[i].password === password) {
                    this.setState({
                        signIn: true
                    });
                } else {
                    this.setState({
                        signInError: true
                    });
                }
            }
        }
    }

    signUp() {
        this.setState({ signUpFlag: true });
    }

    forgotPassword() {
        this.setState({ forgotPasswordFlag: true });
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
        console.log(this.state.signIn);
        // if (this.state.signInError) {
        //     //alert('Incorrect Credntials!');
        // }
        if (this.state.signIn) {
            return (
                <Dashboard />
            );
        } else if (this.state.signUpFlag) {
            return (
                <SignUp />
            );
        } else if (this.state.forgotPasswordFlag) {
            return (
                <ForgotPassword />
            );
        }
        else {
            return (
                <div className="image">
                    <AppBar position="static" alignitems="center" color="primary">
                        <Toolbar>
                            <Grid container justify="center" wrap="wrap">
                                <Grid item>
                                    <Typography variant="h6">Dreams come true</Typography>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Grid container spacing={0} justify="center" direction="row">
                        <Grid item>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                spacing={2}
                                className="login-form"
                            >
                                <Paper
                                    variant="elevation"
                                    elevation={2}
                                    className="login-background"
                                >
                                    <Grid item>
                                        <Typography component="h1" variant="h5">
                                            Sign in
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <form onSubmit={this.handleSubmit}>
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item>
                                                    <TextField
                                                        type="email"
                                                        placeholder="Email"
                                                        fullWidth
                                                        margin="normal"
                                                        name="username"
                                                        variant="outlined"
                                                        value={this.state.username}
                                                        onChange={this.handleEmailChange}
                                                        required
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField
                                                        type="password"
                                                        placeholder="Password"
                                                        fullWidth
                                                        margin="normal"
                                                        name="password"
                                                        variant="outlined"
                                                        value={this.state.password}
                                                        onChange={this.handlePasswordChange}
                                                        required
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        className="button-block"
                                                        onClick={this.onSubmitHandler}
                                                    >
                                                        Sign In
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                    <Grid container >
                                        <Grid item xs>
                                            <Button style={{textTransform:'none'}}
                                                onClick={this.forgotPassword}
                                            >
                                                Forgot password?
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button style={{textTransform:'none'}}
                                                onClick={this.signUp}
                                            >
                                                Don't have an account? Sign Up
                                            </Button>
                                        </Grid>
                                    </Grid>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}
export default Login;