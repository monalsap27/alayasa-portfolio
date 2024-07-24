import {  } from "../styles/About.css";

import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

function About() {
  return (
    <section id="about">
<div className="wrapper">
    <h3>
        About
    </h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nam neque labore deleniti similique itaque eaque, veniam aut et harum asperiores veritatis illo sint? Aspernatur beatae debitis in quis possimus.</p>
<h4>Programming Language & Tools</h4>
<div className="skills">
    <FaHtml5/>
    <FaReact/>
    <FaCss3/>
    <FaPhp/>
    <IoLogoJavascript/>
</div>
</div>
    </section>
  )
}

export default About
