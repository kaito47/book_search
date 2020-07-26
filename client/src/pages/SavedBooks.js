import React from 'react';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
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
import Nav from '../components/Nav';
import Book from '../components/Book';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Kaito
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// Function to display the Book results vs "Start your search to begin" message


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

export default function BookSearch() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
                <LocalLibraryIcon />
                <Typography component="h1" variant="h5">
                    Book Search
    </Typography>
            </div>
            {/* NEED TO ADD THE RESULTS CONTAINER HERE (uses Book component) */}
            <div>
                <Grid item={12}>
                    <h5>Saved</h5>
                </Grid>
            </div>
            {/* ADD THE FUNCTION TO THE BOOK BUTTON TO ONLY SHOW ON CLICK/ON SEARCH/ON GET REQUEST COMPLETION */}
            <Book />
            <Box mt={5}>
                <Copyright />
            </Box>

        </Container >

    );
}





// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

// function Saved(props) {
//   const [book, setBook] = useState({})

//   // When this component mounts, grab the book with the _id of props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   const { id } = useParams()
//   useEffect(() => {
//     API.getBook(id)
//       .then(res => setBook(res.data))
//       .catch(err => console.log(err));
//   }, [])

//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron>
//             <h1>
//               {book.title} by {book.author}
//             </h1>
//           </Jumbotron>
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-10 md-offset-1">
//           <article>
//             <h1>Synopsis</h1>
//             <p>
//               {book.synopsis}
//             </p>
//           </article>
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-2">
//           <Link to="/">← Back to Authors</Link>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// export default Saved;
