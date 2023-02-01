import React from 'react'
// import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Cartitems from './Cartitems'
import { useNavigate } from 'react-router-dom'

const Cart = (props) => {
const navigate = useNavigate()
// const location = useLocation()
const cartiteminitial = []
const [cartitem , setCartitem] = useState(cartiteminitial)
const getCart = async() => {
  const token = localStorage.getItem('token')
  const weburl = 'https://bookstore-backend-production.up.railway.app/cart/single-cart'
  await axios.get(weburl, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => {
    setCartitem(response.data.data.products)
  }).catch((error) => {
  })
}
const initial = []
const [hide, setHide] = useState('none')
const [show, setShow] = useState('')

const[detail, setDetail] = useState(initial)

const token = localStorage.getItem('token')
  const weburl = 'https://bookstore-backend-production.up.railway.app/order/checkout'
const checkout = async() => {
  
const result = await axios.post(weburl,{}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
          })

setDetail(result.data.order)



  setTimeout(() => {
    

    setHide('')
    setShow('none')
  }, 1000);
 


}

const placeorder = async() => {
  const token = localStorage.getItem('token')
  const weburl = 'https://bookstore-backend-production.up.railway.app/order/place-order'
  axios.post(weburl, {}, {
    headers: {
      'Authorization': `Bearer ${token}`

    }
  }).then((response) => {
    console.log("cat", response)
    navigate('/confirmation')

  }).catch((error) => {
    console.log(error)

  })

}




const amountToBePaid = detail.amountToBePaid
console.log('hsbchsvhv' , amountToBePaid)


const grandTotal = detail.grandTotal
const shippingPrice = detail.shippingPrice
const paymentStatus= detail.paymentStatus


    // console.log(props.book)
    useEffect((e) => {
      // Update the document title using the browser API
      getCart()
    })
    return (
      <div className="fullbody" style={{minHeight:"80vh"}}>
        <div className='mmain' style={{display: "flex", justifyContent: "space-around", padding:"8vh"}}>
        <div className="mleft" >
        {
          
          cartitem.map((element) => {
            return <Cartitems Product={element} />

          })
        }

        </div>
        
        <div className='m-right'>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <h5 class="card-title">Payment Status: {paymentStatus}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Grand Total: ₹{grandTotal}</h6>
                        <p class="card-text">Shipping Price: ₹{shippingPrice}</p>
                        <p class="card-text">Amount to be paid: ₹{amountToBePaid}</p>
                        <button class="btn btn-dark" style={{display:`${show}`}} onClick={() => {checkout()}}>Checkout</button>
                        <button class="btn btn-dark" style={{display:`${hide}`}} onClick={() => {placeorder()}}>Place order</button>
                        
                    </div>
                </div>
            </div>

            </div>
            </div>
        
    )
}

export default Cart
