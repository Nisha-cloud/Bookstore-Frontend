import React, { useState } from 'react'
import axios from 'axios'
import BookContext from './BookContext'

const BookState = (props) => {
    const initial = [

    ]

    const [books, setBooks] = useState(initial)
    const weburl = "https://bookstore-backend-production.up.railway.app/product/get"
    const GetBooks = async() => {
        const response =  await axios.get(weburl)
// console.log(response.data)
        setBooks(response.data)
    console.log("this is res from backend api", response)

    }
   
  return (
    <>
    <div>
    <BookContext.Provider value={{books: books, GetBooks: GetBooks}} >
        {props.children}

    </BookContext.Provider>
    </div>
    </>
  )
}

export default BookState
