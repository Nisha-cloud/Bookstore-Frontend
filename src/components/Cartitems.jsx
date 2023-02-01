import axios from 'axios'
import React from 'react'

const Cartitems = (props) => {
    console.log('abc', props)
    const img1 = props.Product.product.productimg[0]
    const realimg = `https://bookstore-backend-production.up.railway.app/${img1}`
    const id = props.Product.product._id
    console.log("bird", id)
    const removeCItem = async() => {
        const token = localStorage.getItem('token')
        
        console.log("chritmas0", token)
        console.log("hvucuycc", id)
        const weburl = `https://bookstore-backend-production.up.railway.app/cart/deleteCartItem/${id}`

        
        axios.patch(weburl, {}, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then((data) => {
            console.log("merry", data)

        }).catch((error) => {
            console.log(error)

        })

    }
    return (
        <div className="container">
        <div className='mmain'>
            <div class="card" style={{ width: '18rem' }}>
                <img src={realimg} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.Product.product.title}</h5>
                    {/* <p class="card-text">{props.Product.product.description}</p> */}
                    <p class="card-text">Quantity: {props.Product.quantity}</p>
                    <p class="card-text">Price: ₹{props.Product.product.price}</p>

                    <button  class="btn btn-dark" onClick={() => {removeCItem()}}>Remove from cart</button>
                </div>
            </div>
            
        </div>
        </div>

    )
}

export default Cartitems
