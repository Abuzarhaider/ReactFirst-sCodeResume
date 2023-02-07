import React from 'react'
import "./Project.css"
import sampleImg from "./Project_Images/sampleImg.png"

const Project = () => {
  return (
    <>
    {/* <!-- MANIN Area Project --> */}
    <main>
        <div class="projects_title">
            <h3>Explore our</h3>
            <h1>Projects</h1>
            <hr/>
            <p>Here are some samples of our done projects delievered to our clients.</p>
        </div>


        {/* <!-- buttons --> */}
        <div class="projects_btn">
            <h2>All Projects</h2>
            <div class="btn mainBtn">
                <ul>
                    <li><a class="active" href="#">Web Developement</a></li>
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">Content Writing</a></li>
                </ul>
            </div>
            <div class="btn subBtn">
                <ul>
                    <li><a class="active" href="#">Landing page</a></li>
                    <li><a href="#">Frontend</a></li>
                    <li><a href="#">NFT</a></li>
                    <li><a href="#">Functionality</a></li>
                    <li><a class="last_subBtn" href="#">Full stack</a></li>
                </ul>
            </div>
        </div>
    </main>



    {/* <!-- CARDS Start --> */}
    <div class="card_main">

        {/* <!-- Card --> */}
        <div class="card one">
            <div class="card_text">
                <h2>Rhenyz</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe rerum molestias harum ut pariatur
                    voluptas maiores officia magni fuga, consequatur temporibus fugit dolorem ipsa, doloribus illum,
                    beatae consequuntur expedita dolorum.</p>
            </div>

            <div class="card_img">
                <img src={sampleImg}/>
            </div>

            <div class="card_link">
                <a href="">Visit Site</a>
            </div>
        </div>

        {/* <!-- Card --> */}
        <div class="card two">
            <div class="card_text">
                <h2>2584 Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe rerum molestias harum ut pariatur
                    voluptas maiores officia magni fuga, consequatur temporibus fugit dolorem ipsa, doloribus illum,
                    beatae consequuntur expedita dolorum.</p>
            </div>

            <div class="card_img">
                <img src={sampleImg}/>
            </div>

            <div class="card_link">
                <a href="">Visit Site</a>
            </div>
        </div>

        {/* <!-- Card --> */}
        <div class="card three">
            <div class="card_text">
                <h2>Sebrapage</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe rerum molestias harum ut pariatur
                    voluptas maiores officia magni fuga, consequatur temporibus fugit dolorem ipsa, doloribus illum,
                    beatae consequuntur expedita dolorum.</p>
            </div>

            <div class="card_img">
                <img src={sampleImg}/>
            </div>

            <div class="card_link">
                <a href="">Visit Site</a>
            </div>
        </div>

        {/* <!-- Card --> */}
        <div class="card four">
            <div class="card_text">
                <h2>Automation</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe rerum molestias harum ut pariatur
                    voluptas maiores officia magni fuga, consequatur temporibus fugit dolorem ipsa, doloribus illum,
                    beatae consequuntur expedita dolorum.</p>
            </div>

            <div class="card_img">
                <img src={sampleImg}/>
            </div>

            <div class="card_link">
                <a href="">Visit Site</a>
            </div>
        </div>

        {/* <!-- Card --> */}
        <div class="card five">
            <div class="card_text">
                <h2>Kitab</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe rerum molestias harum ut pariatur
                    voluptas maiores officia magni fuga, consequatur temporibus fugit dolorem ipsa, doloribus illum,
                    beatae consequuntur expedita dolorum.</p>
            </div>

            <div class="card_img">
                <img src={sampleImg}/>
            </div>

            <div class="card_link">
                <a href="">Visit Site</a>
            </div>
        </div>

        {/* <!-- Card --> */}
        <div class="card six">
            <div class="card_text">
                <h2>EBookLP</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe rerum molestias harum ut pariatur
                    voluptas maiores officia magni fuga, consequatur temporibus fugit dolorem ipsa, doloribus illum,
                    beatae consequuntur expedita dolorum.</p>
            </div>

            <div class="card_img">
                <img src={sampleImg} />
            </div>

            <div class="card_link">
                <a href="">Visit Site</a>
            </div>
        </div>

    </div>
    {/* <!-- card end --> */}
    </>
  )
}

export default Project
