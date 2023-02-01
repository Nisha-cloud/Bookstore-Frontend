
import './App.css';

import Book from './components/Book';

import Navbar from './components/Navbar'
import Productdetail from './components/Productdetail';
import Cart from './components/Cart'
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import { useState } from 'react';
// import Try from './components/Try'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import BookState from './components/context/books/BookState';
import UserProfile from './components/UserProfile';
// import Category from './components/Category';
// import Bookitem from './components/Bookitem'
import Footer from './components/Footer'
import Alert from './components/Alert'

function App() {
  const[alert, setAlert]= useState(null)
  const showAlert = (message, type)=> {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  return (
    <BookState>
    <Router>
    
    <Navbar/>
    <Alert alert={alert}/>
    
    
    <Routes>
    <Route path='/' element={<Book/>}></Route>
    <Route path='/about' element={<About/>}></Route>

    <Route path='/signup' element={<SignUp showAlert={showAlert}/>}></Route>
    
    <Route path='/login' element={<Login showAlert={showAlert}/>}></Route>

    <Route path='/profile' element={<UserProfile showAlert={showAlert}/>}></Route>

    <Route path='/productdetail' element={<Productdetail/>}></Route>
   
    <Route path='/cart' element={<Cart showAlert={showAlert}/>}></Route>

    </Routes>


  
  
    
    

    </Router>
    <Footer/>
    </BookState>

  )
    
  
}

export default App;
