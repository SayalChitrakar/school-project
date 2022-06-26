import React from "react";
import { Link } from "react-router-dom";
import "./../css/navbar.css";

const Navbar = ()=>{

    return(

       <nav className = "navContainer navbar navbar-expand-lg fixed-top navbar-light container-fluid ">

           <Link to="/" className = "navbar-brand" > Rose Mount </Link>

           <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                   aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>

           <div className =" linkContainer collapse navbar-collapse" id="navbarSupportedContent" >

               <ul className = "navbar-nav mr-auto">
                   <li className="nav-item">
                       <Link to ="/" className = "nav-link" > Home</Link>
                   </li>

                   <li className="nav-item">
                       <Link to ="/about" className = "nav-link"> About</Link>
                   </li>
                   <li className="nav-item">
                        <Link to ="/" className = "nav-link" > Home</Link>
                   </li>
                   <li className="nav-item">
                       <Link to ="/contact" className = "nav-link"> Contact Us</Link>
                   </li>
                   <li className="nav-item">
                       <Link to ="/gallery" className = "nav-link"> Gallery</Link>
                   </li>

               </ul>
           </div>

       </nav>
    )

}
export default Navbar;