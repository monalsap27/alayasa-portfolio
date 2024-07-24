import portfolio1 from "../assets/portfolio1.png";

import {  } from "../styles/Portfolio.css";

import { portfolioList } from "../data/DataPortfolio";

import {Link} from "react-router-dom";


function Portfolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>
                Portfolio
            </h3>
            <div className="grid">

{
    portfolioList.map((list) => {
        return (

                <div className="item" key={list.id}>

                    <Link to={`/portfolio/${list.id}`}>
                        <img src={list.Image} alt="" />
                    </Link>

                   
                </div>
        )
    })
}

            </div>
        </div>
    </section>
  )
}

export default Portfolio
