import {useState} from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import {addBook} from "../../redux/books/actionCreators"
import booksData from "../../data/books.json"
import "./BookForm.css"

export const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleAddRandomBook = ()=>{
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBooks = booksData[randomIndex]

        const randomBookWithID = {
            ...randomBooks, 
            id: uuidv4()
        }
        dispatch(addBook(randomBookWithID))
    }


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(title&&author){
            const book = {
                title: title,
                author: author,
                id: uuidv4()
            }
        dispatch(addBook(book))
      
        setTitle('')
        setAuthor('')
        }
    }

    return(
        <div className = "app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                </div>
                <button type="submit">Add book</button>
                <button type="button" onClick={handleAddRandomBook}>Add random</button>
            </form>
        </div>
    )
}
