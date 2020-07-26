import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
// import './style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function Book(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Title
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Author
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Description
                </Typography>
                            </Grid>
                            <Grid item>
                                {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                </Typography> */}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button className="SaveButton"
                            >Save
                            </Button>
                            <Button>View in Google Books</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
