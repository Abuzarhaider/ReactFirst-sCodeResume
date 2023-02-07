import React from 'react'
import "./NavBar.css"
import logo from "./NavBar_Images/logo.png"
import { Link } from 'react-router-dom'

const NavBar = () => {

    function show() {
        let check = document.querySelector("#check");
        let menu = document.querySelector(".nav_menu");

        if (check.checked === true) {
            menu.style.left = "0";
        }
        else {
            menu.style.left = "-100vh"
        }
    }

  return (
    // <!-- navigation bar -->
    <nav>
        <div class="nav_main">
            <div class="logo">
                <Link to="/home"><img src={logo} alt="Smash Code"/></Link>
            </div>
            <div class="nav_menu">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div class="nav_contact">
                <Link to="/contact">
                    <p>Contact</p>
                </Link>
            </div>
            <div class="nav_bars">
                <input type="checkbox" id="check" onClick={show}/>
                <label class="bars" for="check"><i class="fa-solid fa-bars"></i></label>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
