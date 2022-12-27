import axios from 'axios'
import React, { useState } from 'react'

const UserProfile = () => {
    const uinitial =[{
        name: "",
        email: "",
        password: "",
        cnfpswd: ""
    }]
    const [ucredentials, Setucredentials] = useState(uinitial)
    const prsname = localStorage.getItem('prsname')
    const prsnemail = localStorage.getItem('prsnemail')
    const updateProfile = async(e) => {
        e.preventDefault()

        localStorage.removeItem('prsname')
        localStorage.removeItem('prsnemail')

        const token = localStorage.getItem('token')
        const weburl = 'https://bookstore-backend-production.up.railway.app/userroute/users/me'
        await axios.patch(weburl, {
            name:ucredentials.name,
            email:ucredentials.email
        }, {
            headers: {
                'Authorization': `Bearer ${token}`

            }
        }).then((response) => {
            console.log('aniket', response)
            localStorage.setItem('prsname' , response.data.name)
            localStorage.setItem('prsnemail' , response.data.email)


        }).catch((error) => {
            console.log(error)
        })

    }
    const onChange = (e) => {
        Setucredentials({...ucredentials, [e.target.name]:e.target.value})

    }
  return (
    <div className="container" style={{paddingTop: "6vh", height:"80vh"}}>
    <form onSubmit={updateProfile}>
         <div class="mb-3">
    <label htmlFor="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name" onChange={onChange} defaultValue={prsname}/>
  </div>
  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name="email" onChange={onChange} defaultValue={prsnemail} aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label htmlFor="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name="password" onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label htmlFor="cnfpswd" class="form-label"> Confirm Password</label>
    <input type="text" class="form-control" id="cnfpswd" name="cnfpswd" onChange={onChange}/>
  </div>
  
  <button type="submit" class="btn btn-dark">UPDATE</button>
</form>
</div>
  )
}

export default UserProfile
