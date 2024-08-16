import axios from "axios"
import { useNavigate } from "react-router-dom";
import { API} from './Api';

const BookCard = ({ book, deleteCb }) => {
    const navigate = useNavigate();
    const handleClickDelete = async () => {
        try {
            await axios.delete(`${API}/v1/book/${book._id}`);
            deleteCb(book._id);
        } catch (error) {
            alert("Something wrong!");
        }
    }
    return (
        <div className="card-container basis-1/3">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div className="desc">
            <h2><a href="">{book.bookTitle}</a></h2>
            <h3>{book.bookAuthor}</h3>
            <p>{book.description}
            <button className="btn float-right" onClick={handleClickDelete}>X</button>
            </p>
          </div>
        </div>
    )
}

export default BookCard