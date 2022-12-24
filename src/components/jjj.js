import React , {useState, useNavigate} from 'react'
import axios from 'axios'

const Login = () => {
 
    const initial = [{
        email: "",
        password: ""
    }]
    const [lcredentials, setLcredentials] = useState(initial)
    console.log(lcredentials)
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("jklhghgjg")
        axios.post('http://localhost:5000/userroute/users/login', {
            email: lcredentials.email, password: lcredentials.password
          })
          .then(function (response) {
            console.log(response);
            localStorage.setItem('token', response.data.token)
          })
          .catch(function (error) {
            console.log(error);
          });

    console.log("25", localStorage.getItem('token'))
         
    
      }
      const onChange = (e) => {
        setLcredentials({...lcredentials, [e.target.name]:e.target.value})
    
      }
      // navigate('/')
        
  return (
    <div>
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
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
