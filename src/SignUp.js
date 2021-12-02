import React from 'react';
import {
    Button,
    TextField,
    Grid,
    Paper
} from "@material-ui/core";
import Login from './Login';
class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signUpEmail: "",
            signUpPassword: "",
            signUpFlag: false
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    onSubmitHandler(event) {
        console.log("Sign Up");
        let email = this.state.signUpEmail;
        let password = this.state.signUpPassword;
        if(!localStorage.hasOwnProperty("usersSignedUp")) {
            let arr = [];
            let user = {
                "email": email,
                "password": password
            };
            arr.push(user);
            localStorage.setItem("usersSignedUp", JSON.stringify(arr));
        } else {
            let list = JSON.parse(localStorage.getItem("usersSignedUp"));
            console.log(list);
            let user = {
                "email": email,
                "password": password
            };
            list.push(user);
            localStorage.setItem("usersSignedUp", JSON.stringify(list));
        }
        this.setState({
            signUpFlag: true
        });
        alert("Signed Up Successfully");
    }

    handleEmailChange(e) {
        this.setState({ signUpEmail: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ signUpPassword: e.target.value });
    }

    render() {
        if (this.state.signUpFlag) {
            return (
                <Login />
            );
        } else {
            return (
                <div>
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
                                        <form onSubmit={this.handleSubmit}>
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item>
                                                    <TextField
                                                        type="email"
                                                        placeholder="Email"
                                                        className="forgotPassword"
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
                                                        className="forgotPassword"
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
                                                    <TextField
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        className="forgotPassword"
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
                                                        Sign Up
                                                </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
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

export default SignUp;