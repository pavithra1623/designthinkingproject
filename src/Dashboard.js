import React from 'react';
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import JobPost from './JobPost';
import Login from './Login';
import Search from './Search';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.signOut = this.signOut.bind(this);
    this.postAJob = this.postAJob.bind(this);
    this.searchAJob = this.searchAJob.bind(this);
    this.setStyles = this.setStyles.bind(this);
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty("jobposts")) {
      let jobs = JSON.parse(localStorage.getItem("jobposts"));
      this.setState({ jobs: jobs });
    }
  }

  postAJob() {
    this.setState({ postJob: true });
  }

  searchAJob() {
    this.setState({ searchAJob: true });
  }

  signOut() {
    this.setState({ signOut: true });
  }

  setStyles() {
    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
      },
      toolbar: {
        paddingRight: 5,
      },
      listItems: {
        color: "white"
      },
      toolbaricon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#5E10B1"
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: "#5E1081"
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
      },
      fixedHeight: {
        height: 240,
      },
    }));
    return useStyles;
  }

  render() {
    const classes = this.setStyles();
    console.log(classes);
    if (this.state.postJob) {
      console.log("Hello");
      return (
        <JobPost />
      );
    } else if (this.state.signOut) {
      return (
        <Login />
      );
    } else if (this.state.searchAJob) {
      return (
        <Search />
      );
    } else {
      return (
        <div className={classes.root}>
          <AppBar  style={{ backgroundColor: "#9933ff" }} position="absolute" className={clsx(classes.appBar && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Dreams come true
              </Typography >
              <Button style={{ paddingLeft: '800px' }} onClick={this.searchAJob}>
                Search For A Job
              </Button>
              <Button style={{ paddingLeft: '15px' }} onClick={this.postAJob}>
                Post A Job
              </Button>
              <Button style={{ paddingLeft: '15px' }} onClick={this.signOut}>
                Sign Out
              </Button>
              {/* <IconButton style={{ justifyContent: 'flex-end' }} color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
            </Toolbar>
          </AppBar>
          
          <div>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              style={{ margin: "200px" }}
            >
              {this.state.jobs.map((itemJob) => (
                <Grid item xs={6} key={this.state.jobs.indexOf(itemJob)}>
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
        </div>
      );
    }
  }
}
export default Dashboard;