import React , {useState } from 'react'
import axios from 'axios'
// import { useState, useNavigate } from 'react'
// import { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Login = () => {


    const navigate = useNavigate()
    const initial = [{
        email: "",
        password: ""
    }]
    const [lcredentials, setLcredentials] = useState(initial)

    const onSubmit = async(e)=>{

        e.preventDefault()
        console.log("jklhghgjg")
        axios.post('https://bookstore-backend-production.up.railway.app/userroute/users/login', {
            email: lcredentials.email, password: lcredentials.password
          })
          .then(function (response) {
            console.log(response);
            localStorage.setItem('token', response.data.token)
            navigate('/')
          })
          .catch(function (error) {
           } )

    }

    const onChange = (e) => {
        setLcredentials({...lcredentials, [e.target.name]:e.target.value})
    
      }
  return (
    <div className='container' style={{paddingTop: "6vh"}}>
      <form onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-dark">SIGN IN</button>
  
</form>

<div className='accc' style={{paddingTop:"2vh"}}>
<p>New Customer? <Link to="/signup">Register</Link></p>

</div>
    </div>
  )
}

export default Login
