import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import {
    AppBar,
    Toolbar
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Dashboard from "./Dashboard";
import NotificationsIcon from '@material-ui/icons/Home';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            searchKeyWord: "",
            filteredJobs: [],
            dashboard: false,
            searchFlag: false
        };
        this.searchForJobs = this.searchForJobs.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.backToDashBoard = this.backToDashBoard.bind(this);
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty("jobposts")) {
            let jobs = JSON.parse(localStorage.getItem("jobposts"));
            this.setState({ filteredJobs: jobs });
        }
    }

    backToDashBoard() {
        this.setState({ dashboard: true });
    }

    handleKey(e) {
        this.setState({ searchKeyWord: e.target.value });
    }

    searchForJobs() {
        this.setState({ searchFlag: true });
        let jobs = JSON.parse(localStorage.getItem("jobposts"));
        let key = this.state.searchKeyWord;
        let arr = [];
        if (key !== undefined) {
            for (let i = 0; i < jobs.length; i++) {
                if (jobs[i].description.toLowerCase().includes(key.toLowerCase())) {
                    arr.push(jobs[i]);
                }
            }
        }
        this.setState({ filteredJobs: arr });
    }

    render() {
        if(this.state.dashboard) {
            return (
                <Dashboard />
            );
        } else if(this.state.searchFlag) {
            return (
                <div>
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
                                <div>
                                    <Grid
                                        container
                                        spacing={2}
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                        style={{ margin: "200px" }}
                                    >
                                        {this.state.filteredJobs.map((itemJob) => (
                                            <Grid item xs={6} key={this.state.filteredJobs.indexOf(itemJob)}>
                                                <Card sx={{ maxWidth: 450 }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={itemJob.companyImage}
                                                        alt="green iguana"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {itemJob.companyName}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {itemJob.description}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button href={itemJob.email} target="_blank" size="small">Careers</Button>
                                                        <Button href={itemJob.companyWebsite} target="_blank" size="small">Learn More</Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            );
        } else {
            return (
                <div>
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
                                <Grid item>
                                        <form onSubmit={this.handleSubmit}>
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item>
                                                    <TextField
                                                        type="text"
                                                        fullWidth
                                                        margin="normal"
                                                        name="searchbox"
                                                        variant="outlined"
                                                        value={this.state.searchKeyWord}
                                                        onChange={this.handleKey}
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        className="button-block"
                                                        onClick={this.searchForJobs}
                                                        style={{ backgroundColor: "#9933ff" }}
                                                    >
                                                        Search
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                <div>
                                    <Grid
                                        container
                                        spacing={2}
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                        style={{ margin: "200px" }}
                                    >
                                        {this.state.filteredJobs.map((itemJob) => (
                                            <Grid item xs={6} key={this.state.filteredJobs.indexOf(itemJob)}>
                                                <Card sx={{ maxWidth: 450 }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={itemJob.companyImage}
                                                        alt="green iguana"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {itemJob.companyName}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {itemJob.description}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button href={itemJob.email} target="_blank" size="small">Careers</Button>
                                                        <Button href={itemJob.companyWebsite} target="_blank" size="small">Learn More</Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            );
        }
        
    }
}
export default Search;