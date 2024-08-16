import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from './Api';

const AddBook = () => {
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [description, setDescription] = React.useState("");
    const navigate = useNavigate();

    const clickSubmitButton = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${API}/v1/book`, {
                bookTitle: title,
                bookAuthor: author,
                description
            });

            navigate('/');
        } catch (e) {
            alert("Something wrong with your input, try again with valid data");
        }
    };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/">
              <button className="btn btn-info float-left" href="/">
                Show BooK List
              </button>
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form  onSubmit={clickSubmitButton}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={title}
                  data-ms-editor="true"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={author}
                  data-ms-editor="true"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  data-ms-editor="true"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
