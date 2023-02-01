import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
// import bookstore from '../Assets/logo bkstr.png'

const Navbar = (props) => {
  const navigate = useNavigate()


  


        
        const toLogin = async() => {
      navigate('/login')
        }
  const toLogout = async() => {
    localStorage.removeItem('token')
    localStorage.removeItem('prsname')
    navigate('/login')
      }
      // const toSignup = async() => {
      //   navigate('/signup')
      //     }



      const nameset = localStorage.getItem('prsname')


  const getCart = async() => {
    if(localStorage.getItem('token') === null)
    {
      props.showAlert("Please login to access cart", 'danger')
    }
    const weburl = `https://bookstore-backend-production.up.railway.app/cart/single-cart`
    const token = localStorage.getItem('token')
    
    const response =  await axios.get(weburl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    console.log("this is res get", response.data)
    if(response.data.success === true){
    navigate('/cart', {state:{response:response.data}})
    }
    else{
  props.showAlert("Your cart is empty", "success")
    }
  
  }

 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light" style={{margin:"0", padding:"0", zIndex:"1"}} >
  <div className="container-fluid" style={{backgroundColor: "black" , height: "12vh"}}>
    <Link className="navbar-brand" to="/" style={{margin:"5px", fontSize:"30px"}}>Bookstore</Link>
    {/* <img src={bookstore}alt="" style={{display: 'flex', justifyContent: 'center', backgroundColor:"black", maxHeight: '7vh', transform:"translateX(4)"}} /> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active mx-4" aria-current="page" to="/" style={{fontSize:"18px"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{fontSize:"18px"}}>About</Link>
        </li>
        
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
    
      {/* <i className="fa-solid fa-heart mx-1 "></i> */}
     
      <i className="fa-solid fa-cart-shopping mx-2 text-white" onClick={getCart}><p className='mx-2' style={{display: 'inline-block', paddingTop:"2vh", fontSize:"13px"}}>Cart</p></i>
      { !localStorage.getItem('token')?<div className='hide'>
      
      <p className="nisha mx-1 text-white" style={{paddingTop:"2vh"}} onClick={ () => { toLogin()}}> <i className="fa-solid fa-user mx-2" ></i>SIGN IN</p>
      {/* <button type="button" className="btn btn-primary mx-1" onClick={ () => { toSignup()}}>Signup</button> */}

      </div>:  
      <div className="dropdown-center">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {nameset}
      </button>
      <ul className="dropdown-menu" style={{minWidth:"inherit"}}>
        <li>
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/login" onClick={toLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
     



}
    </div>
    </div>
  
</nav>
    </div>
  )
}

export default Navbar

