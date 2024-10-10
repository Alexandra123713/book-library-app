import { useSelector, useDispatch } from "react-redux"
import { BsBookmarkHeartFill, BsBookmarkHeart } from "react-icons/bs";
import { deleteBook, toggleFavorite, selectBooks } from "../../redux/slices/booksSlice"
import { selectAuthorFilter, selectTitleFilter, selectOnlyFavoriteFilters } from "../../redux/slices/filterSlice";
import "./BookList.css"

export const BookList = ()=> {
const books = useSelector(selectBooks)

const titleFilter = useSelector(selectTitleFilter)

const authorFilter = useSelector(selectAuthorFilter)

const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilters)

const dispatch = useDispatch()

const handleDeleteBook = (id) =>{
   dispatch(deleteBook(id))
        }

const handleToggleFavorite = (id) =>{
    dispatch(toggleFavorite(id))
}

const filteredBooks = books.filter((book)=>{
    const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite
})

const highlighthMatch = (text, filter) => {
    if (!filter)  return text 
    const regex = new RegExp (`(${filter})`, 'gi')

    return text.split(regex).map((substring, i)=>{
        if(substring.toLowerCase() === filter.toLowerCase()) {
            return (
            <span key={i} className="highlight">
                {substring}
            </span>
            )
        }
        return substring
    })
}

    return (
        <div className = "app-block book-list">
            <h2>Book List</h2>
            {filteredBooks.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i)=>(
                        <li key={book.id}>
                            <div className="book-info">{++i}. {highlighthMatch(book.title, titleFilter)} by <strong>{highlighthMatch(book.author, authorFilter)}</strong></div>
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