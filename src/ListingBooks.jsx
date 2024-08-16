import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { API } from './Api';

const ListingBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/v1/book`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from BookList");
      });
  }, []);

  const handleDeleteBook = (id) => {
    setBooks((prev) => {
        return prev.filter(book => book._id != id);
    })
  }


  const bookList =
    books.length === 0
      ? "there is no book record!"
      : books.map((book, k) => <BookCard book={book} key={k} deleteCb={handleDeleteBook} />);



  return (
    <div className="BookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/add">
              <button className="btn btn-info float-right">
                + Add New Book
              </button>
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
};

export default ListingBooks;
