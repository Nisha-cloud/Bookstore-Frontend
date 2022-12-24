import React from 'react'
import c1 from '../Assets/c1.jpeg'
import c2 from '../Assets/c2.jpeg'
import c3 from '../Assets/c3.jpeg'
import c4 from '../Assets/c4.jpeg'
import c6 from '../Assets/horror.jpg'


const Category = () => {
  return (
    <div className='cont' style={{backgroundColor: 'light-blue', width: '100vw', maxHeight:"26vh"}}>


      <div className="container " style={{backgroundColor:"light-blue" , display:"flex" , justifyContent: "center"}}>

      <img src={c4} className="rounded-circle m-2 p-2" alt="Cinque Terre" style={{maxHeight:"16vh", maxWidth:"10vw"}}></img>
      <img src={c1} className="rounded-circle m-2 p-2" alt="Cinque Terre" style={{maxHeight:"16vh", maxWidth:"10vw"}}></img>
      <img src={c6} className="rounded-circle m-2 p-2" alt="Cinque Terre" style={{maxHeight:"16vh", maxWidth:"10vw"}}></img>
      <img src={c2} className="rounded-circle m-2 p-2" alt="Cinque Terre" style={{maxHeight:"16vh", maxWidth:"10vw"}}></img>
      <img src={c3} className="rounded-circle m-2 p-2" alt="Cinque Terre" style={{maxHeight:"16vh", maxWidth:"10vw"}}></img>
      {/* <img src={c5} className="rounded-circle" alt="Cinque Terre" style={{maxHeight:"25vh", maxWidth:"10vw"}}></img> */}
      </div>
    </div>
  )
}

export default Category
