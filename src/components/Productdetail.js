import React from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
import axios from 'axios'
 

const Productdetail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const mybook = location.state.response[0]
  const img1 = `https://bookstore-backend-production.up.railway.app/${mybook.productimg[0]}`
  console.log('this is location', mybook)

  const addtocart = async() => {
    const weburl = "https://bookstore-backend-production.up.railway.app/cart/"
    const token = localStorage.getItem('token')
    if(localStorage.getItem('token')){
    console.log('jdohjijh', token)
    const response =  await axios.post(weburl,{product: mybook._id}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log('nisha', response)
    navigate('/cart')
  }
  else{
    navigate('/login')
  }
}
  return (
    <div className='container my-4' style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div className="left">
        <img src={img1} alt="" style={{maxHeight: '45vh'}} />
      </div>
      
      <div className="card mx-2" style={{ display: "inline-block", maxWidth: "660px" }}>
        
        <div className="card-body">
          <h5 className="card-title">{mybook.title}</h5>
          <p className="card-text">{mybook.description}</p>
          <p className="card-text">₹{mybook.price-50}</p>
          {/* <a href="/" className="btn btn-primary mx-1" >Add to wishlist</a> */}
          <button className="btn btn-dark mx-1" onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
    </div>



  )
}

export default Productdetail
