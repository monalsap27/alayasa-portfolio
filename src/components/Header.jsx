import profilePicture from "../assets/profile-picture.png";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {  } from "../styles/Header.css";

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} alt="" />
            <h3>Aulia Saputri</h3>
            <p>IT Programmer - Web Developer</p>
            <div className="socialMedia">
                <a href=""><FaInstagram /></a>
                <a href=""><FaLinkedin /></a>
            </div>
        </div>
    </header>
  )
}

export default Header
