import React, { useContext, useEffect } from 'react'
import Bookitem from './Bookitem'
import BookContext from './context/books/BookContext'
import Category from './Category'


const Book = () => {
    const Context = useContext(BookContext)
const {books, GetBooks} = Context

useEffect(() => {
    GetBooks()
// eslint-disable-next-line
},[])
  return (
    
    <div>
      <Category />
      <div className="container my-2" style={{display: "flex", justifyContent: "center"}}>
      <h2>Must read books</h2>
    </div>
        <div className="row my-2 pl-4" style={{display: "flex", justifyContent: "center", margin: "4vw"}}>
      
      {books.map( (book) =>{


return <Bookitem book={book}/>



      })}
      </div>
    </div>
  )
}

export default Book
