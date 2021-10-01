import React from 'react'
import { useState } from 'react'

const Navbar = () => {
   const [collapse,setCollapse]= useState(false)
    const handleCollapse=()=>{
        setCollapse(collapse=>!collapse)
    }
    let collapseClasses=collapse ? 'navbar-collapse':'collapse navbar-collapse'
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container text-uppercase">
    <a className="navbar-brand text-white" href="#">React</a>
    <button className="navbar-toggler"onClick={handleCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars"></i>
    </button>
    <div className={collapseClasses} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link  " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">how work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
    )
}

export default Navbar
