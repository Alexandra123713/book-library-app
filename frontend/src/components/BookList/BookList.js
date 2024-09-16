import { useSelector, useDispatch } from "react-redux"
import { BsBookmarkHeartFill, BsBookmarkHeart } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators"
import "./BookList.css"

export const BookList = ()=> {
const books = useSelector((state)=>state.books)
const dispatch = useDispatch()


const handleDeleteBook = (id) =>{
   dispatch(deleteBook(id))
        }

const handleToggleFavorite = (id) =>{
    dispatch(toggleFavorite(id))
}

    return (
        <div className = "app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books avilable</p>
            ) : (
                <ul>
                    {books.map((book, i)=>(
                        <li key={book.id}>
                            <div className="book-info">{++i}. {book.title} by <strong>{book.author}</strong></div>
                        <div className="book-actions">
                            <span onClick={()=>handleToggleFavorite(book.id)}> 
                            {book.isFavorite ? (
                                <BsBookmarkHeartFill className="heart-icon"/>
                            ) : (
                                <BsBookmarkHeart className="heart-icon" />
                            )}
                            </span>
                            <button onClick={()=>handleDeleteBook(book.id)}>Delete</button>
                        </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}