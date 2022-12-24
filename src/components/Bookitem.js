import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Bookitem = (props) => {
  const navigate = useNavigate()
  const onClick = async() => {
    const id = props.book._id
    const weburl = `https://bookstore-backend-production.up.railway.app/product/get/${id}`
    const response =  await axios.get(weburl)
    console.log("this is res get", response)
    navigate('/productdetail', {state:{response:response.data}})
  }
    console.log("hungry",props)
    console.log(props.book.productimg)
    const animg = props.book.productimg

    const dimg = `https://bookstore-backend-production.up.railway.app/${animg}`
    const desc = props.book.description
    var length = 73
    const kam = desc.substring(0, length-1)


  return (
    <>
        

    <div className="card mx-2 my-2" onClick={onClick} style={{width: "22rem", maxHeight:"78vh"}}>
  <img src={dimg} className="card-img-top" alt="..." style={{maxHeight: "42vh"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.book.title}</h5>
    <p className="card-text">{kam} ...</p>
    <h6 className="card-price">₹{props.book.price-50}</h6>
    <h6 className="card-price"><del>₹{props.book.price}</del></h6>
    {/* <i className="fa-regular fa-heart" style={{display: "inline-block"}}></i> */}
    </div>
    
  </div>
   
      
    
    </>
  )
}

export default Bookitem
