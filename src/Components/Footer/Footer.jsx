import React from 'react'
import "./Footer.css"
import logo from "../NavBar/NavBar_Images/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer>
        {/* <!-- first --> */}
        <div class="footer_first">
            <div class="data">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                    <h3>Location</h3>
                    <p>Pakistan</p>
                </div>
            </div>
            <div class="data">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <div>
                    <h3>Contact (whatsapp)</h3>
                    <p>+92 3071991737</p>
                </div>
            </div>
            <div class="data">
                <i class="fa-regular fa-envelope"></i>
                <div>
                    <h3>Email</h3>
                    <p>smashcode.dev@gmail.com</p>
                </div>
            </div>
        </div>

        <hr/>

        {/* <!-- second footer div --> */}
        <div class="footer_second">
            <div class="info">
                <img src={logo} alt="Smash Code"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quam at sed adipisci maxime eius. Eum
                    numquam perferendis itaque. Praesentium, earum! Deleniti aliquid tenetur at </p>
            </div>


            <div class="info">
                <h3>Quick Links</h3>
                <hr class="hr"/>
                <ul style={{padding: "0"}}>
                    <div class="list_links marginDiv">
                        <li><Link to="/home"><i class="fa-solid fa-house"></i> Home</Link></li>
                        <li><Link to="/about"><i class="fa-solid fa-user"></i> About</Link></li>
                        <li><Link to="/contact"><i class="fa-solid fa-phone"></i> Contact</Link></li>
                    </div>
                    <div class="list_links">
                        <li><Link to="/service"><i class="fa-brands fa-servicestack"></i> Services</Link></li>
                        <li><Link to="/project"><i class="fa-solid fa-diagram-project"></i> Projects</Link></li>
                        <li><Link to="/blog"><i class="fa-solid fa-blog"></i> Blogs</Link></li>
                    </div>
                </ul>
            </div>


            <div class="info">
                <h3>Social Links</h3>
                <hr class="hr"/>
                <ul class="last_div">
                    <div class="list_linksTwo marginDiv">
                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    </div>
                    <div class="list_linksTwo">
                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    </div>
                </ul>
            </div>
        </div>
    </footer>

    <div class="footer_third">
        <p>Copyright &copy; 2022, All Right Reserved <span><a href="#">Smash Code</a></span></p>
    </div>
    </>
  )
}

export default Footer
