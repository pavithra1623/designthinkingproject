import React from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Toolbar
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from "./Dashboard";
import NotificationsIcon from '@material-ui/icons/Home';
class JobPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTile: "",
            location: "",
            jobType: "",
            description: "",
            email: "",
            salary: "",
            companyName: "",
            companyWebsite: "",
            companyImage: "",
            companyLocation: "",
            postFlag: false
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.backToDashBoard = this.backToDashBoard.bind(this);
        this.handleJobTitle = this.handleJobTitle.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleJobType = this.handleJobType.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSalary = this.handleSalary.bind(this);
        this.handleCompanyName = this.handleCompanyName.bind(this);
        this.handleCompanyWebsite = this.handleCompanyWebsite.bind(this);
        this.handleCompanyImage = this.handleCompanyImage.bind(this);
        this.handleCompanyLocation = this.handleCompanyLocation.bind(this);
    }

    backToDashBoard() {
        this.setState({ postFlag: true });
    }

    onSubmitHandler(event) {
        console.log("Success");
        let jobTile = this.state.jobTile;
        let location = this.state.location;
        let jobType = this.state.jobType;
        let description = this.state.description;
        let email = this.state.email;
        let salary = this.state.salary;
        let companyName = this.state.companyName;
        let companyWebsite = this.state.companyWebsite;
        let companyImage = this.state.companyImage;
        let companyLocation = this.state.companyLocation;
        if (!localStorage.hasOwnProperty("jobposts")) {
            let arr = [];
            let job = {
                "jobTile": jobTile,
                "location": location,
                "jobType": jobType,
                "description": description,
                "email": email,
                "salary": salary,
                "companyName": companyName,
                "companyWebsite": companyWebsite,
                "companyImage": companyImage,
                "companyLocation": companyLocation
            };
            arr.push(job);
            console.log(job);
            localStorage.setItem("jobposts", JSON.stringify(arr));
        } else {
            let list = JSON.parse(localStorage.getItem("jobposts"));
            let job = {
                "jobTile": jobTile,
                "location": location,
                "jobType": jobType,
                "description": description,
                "email": email,
                "salary": salary,
                "companyName": companyName,
                "companyWebsite": companyWebsite,
                "companyImage": companyImage,
                "companyLocation": companyLocation
            };
            list.push(job);
            console.log(job);
            localStorage.setItem("jobposts", JSON.stringify(list));
        }
        this.setState({
            postFlag: true
        });
    }

    handleJobTitle(e) {
        this.setState({ jobTile: e.target.value });
    }

    handleLocation(e) {
        this.setState({ location: e.target.value });
    }

    handleJobType(e) {
        this.setState({ jobType: e.target.value });
    }

    handleDescription(e) {
        this.setState({ description: e.target.value });
    }

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }

    handleSalary(e) {
        this.setState({ salary: e.target.value });
    }

    handleCompanyName(e) {
        this.setState({ companyName: e.target.value });
    }

    handleCompanyWebsite(e) {
        this.setState({ companyWebsite: e.target.value });
    }

    handleCompanyImage(e) {
        this.setState({ companyImage: e.target.value });
    }

    handleCompanyLocation(e) {
        this.setState({ companyLocation: e.target.value });
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
        if (this.state.postFlag) {
            return (
                <Dashboard />
            );
        } else {
            return (
                <div className="image">
                    <AppBar style={{ backgroundColor: "#9933ff" }} position="static" alignitems="center" color="primary">
                        <Toolbar>
                            <Grid container justify="center" wrap="wrap">
                                {/* <Grid item>
                                    <Typography variant="h6">Post A Job</Typography>
                                </Grid> */}
                                <IconButton onClick={this.backToDashBoard} style={{ paddingLeft: '1000px' }} color="inherit">
                                Back to Dashboard
                                    <NotificationsIcon />
                                </IconButton>
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
                                        <form onSubmit={this.handleSubmit}>
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item>
                                                    Job Title:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="jobTitle"
                                                        variant="outlined"
                                                        value={this.state.jobTile}
                                                        onChange={this.handleJobTitle}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Location:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="location"
                                                        variant="outlined"
                                                        value={this.state.location}
                                                        onChange={this.handleLocation}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Job Type:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="jobType"
                                                        variant="outlined"
                                                        value={this.state.jobType}
                                                        onChange={this.handleJobType}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Description:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="description"
                                                        variant="outlined"
                                                        value={this.state.description}
                                                        onChange={this.handleDescription}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Application Email:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="email"
                                                        variant="outlined"
                                                        value={this.state.email}
                                                        onChange={this.handleEmail}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Salary:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="salary"
                                                        variant="outlined"
                                                        value={this.state.salary}
                                                        onChange={this.handleSalary}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Company Name:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="companyName"
                                                        variant="outlined"
                                                        value={this.state.companyName}
                                                        onChange={this.handleCompanyName}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Company Website:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="companyWebsite"
                                                        variant="outlined"
                                                        value={this.state.companyWebsite}
                                                        onChange={this.handleCompanyWebsite}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Company Image:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="companyImage"
                                                        variant="outlined"
                                                        value={this.state.companyImage}
                                                        onChange={this.handleCompanyImage}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    Company Location:
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="companyLocation"
                                                        variant="outlined"
                                                        value={this.state.companyLocation}
                                                        onChange={this.handleCompanyLocation}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        className="button-block"
                                                        onClick={this.onSubmitHandler}
                                                        style={{ backgroundColor: "#9933ff" }}
                                                    >
                                                        POST
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
export default JobPost;