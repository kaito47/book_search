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
import SearchBar from '../components/SearchBar';

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
      <SearchBar />

      {/* NEED TO ADD THE RESULTS CONTAINER HERE (uses Book component) */}
      <div>
        <Grid item={8}>
          <h5>Results</h5>
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


// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// function Search() {
//   // Setting our component's initial state
//   const [books, setBooks] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks()
//   }, [])

//   // Loads all books and sets them to books
//   function loadBooks() {
//     API.getBooks()
//       .then(res =>
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({ ...formObject, [name]: value })
//   };

//   // NEEDS TO MAKE API CALL TO GOOGLE BOOKS  

//   // NOOOO BUT USEFUL When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   // function handleFormSubmit(event) {
//   //   event.preventDefault();
//   //   if (formObject.title && formObject.author) {
//   //     API.saveBook({
//   //       title: formObject.title,
//   //       author: formObject.author,
//   //       synopsis: formObject.synopsis
//   //     })
//   //       .then(res => loadBooks())
//   //       .catch(err => console.log(err));
//   //   }
//   // };

//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-6">
//           <Jumbotron>
//             <h1>Search Books by Title</h1>
//           </Jumbotron>
//           <form>
//             <Input
//               onChange={handleInputChange}
//               name="title"
//               placeholder="Title (required)"
//             />
//             <FormBtn
//               disabled={!(formObject.author && formObject.title)}
//               onClick={handleFormSubmit}
//             >
//               Search
//               </FormBtn>
//           </form>
//         </Col>
//         <Col size="md-6 sm-12">
//           <Jumbotron>
//             <h1>Results</h1>
//           </Jumbotron>
//           {books.length ? (
//             <List>
//               {books.map(book => (
//                 <ListItem key={book._id}>
//                   <Link to={"/books/" + book._id}>
//                     <strong>
//                       {book.title} by {book.author}
//                     </strong>
//                   </Link>
//                 </ListItem>
//               ))}
//             </List>
//           ) : (
//               <h3>No Results to Display</h3>
//             )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// export default Search;
