import axios from "axios";

export default {

  // Google Books API Call
  googleBooks: function (query) {
    return axios.get('www.googleapis.com/books/v1/volumes?q=' + query).then(res => { return res.data })
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  // getBook: function (id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/saved", bookData);
  }
};



