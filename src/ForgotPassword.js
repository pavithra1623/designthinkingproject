import React from 'react';
import {
    Button,
    TextField,
    Grid,
    Paper
} from "@material-ui/core";
import Login from './Login';
class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forgottenEmail: "",
            forgottenPassword: "",
            changedPassword: false
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    onSubmitHandler(event) {
        console.log("Sign Up");
        let email = this.state.forgottenEmail;
        let password = this.state.forgottenPassword;
        if (!localStorage.hasOwnProperty("usersSignedUp")) {
            alert("You have not signed up");
        } else {
            let list = JSON.parse(localStorage.getItem("usersSignedUp"));
            console.log(list);
            for (var i = 0; i < list.length; i++) {
                if (list[i].email === email) {
                    list[i].password = password;
                }
            }
            localStorage.setItem("usersSignedUp", JSON.stringify(list));
            this.setState({
                changedPassword: true
            });
            alert("Changed Password Successfully");
        }
    }

    handleEmailChange(e) {
        this.setState({ forgottenEmail: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ forgottenPassword: e.target.value });
    }

    render() {
        if (this.state.changedPassword) {
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
                                                        placeholder="New Password"
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
                                                        Change Password
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

export default ForgotPassword;