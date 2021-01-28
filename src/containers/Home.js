import React from "react"
import '../App.css';
import NavBar from '../components/NavBar'
 
function Home(props) {
  return (
    <div>
    <div className="nav-div">
      <NavBar />
    </div>
    <div className="header">
      <h1 className="animated bounceInDown">Rosie's Portfolio</h1>
      <h2 className="animated bounceInDown">Welcome to my page!</h2>
    </div>
    </div>
  )
}
 
export default Home;