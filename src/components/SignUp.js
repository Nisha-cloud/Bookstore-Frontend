import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const SignUp = () => {
  const initial= [{
    name: "",
    email: "",
    password: ""

}]
  const [credentials, setCredentials] = useState(initial)
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("jklhghgjg")
    axios.post('https://bookstore-backend-production.up.railway.app0/userroute/users', {
        name: credentials.name, email: credentials.email, password: credentials.password
      })
      .then(function (response) {
        console.log(response);
        if(response.status === 201){
          localStorage.setItem('token', response.data.token)
          navigate('/')
          console.log('jhdoijuhg')
        }
        
        
      })
      .catch(function (error) {
        console.log(error);
      });
console.log("25", localStorage.getItem('token'))
     

  }
  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]:e.target.value})

  }
    

  return (
    <div className='container' style={{paddingTop: "6vh"}}>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-dark">SIGN UP</button>
</form>
<div className='acc' style={{paddingTop: "2vh"}}>
  <p>Have an account? <Link to="/login">Login</Link></p>
</div>
    </div>

  )
}


export default SignUp
