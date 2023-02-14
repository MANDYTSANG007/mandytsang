import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faGithub,
        url: "https://github.com/MANDYTSANG007",
    },
    {
        icon: faLinkedin,
        url: "https://linkedin.com",
    },
    {
        icon: faEnvelope,
        url: "mailto: h.man.tsang@gmail.com",
    }
]


const Home = () => {
    return (
        <main className="home-main">
            <div className="home-background">
                <img src={require("../../assets/curiosity.jpeg")} alt="" className="background-img" />
                <h1 className="home-heading1"> Mandy Tsang </h1>
                <h3 className="home-heading2">
                    <span> Full Stack Developer </span>
                    <span>  |  </span>
                    <span> Data Analyst </span>
                </h3>
                <div className="social-icons">
                    {socials.map((item) => (
                        <a className="icons" key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={item.icon} size="3x" />
                        </a>
                    ))}
                </div>

                <section className="about">
                    <article className="about-container">
                        <h1> About </h1>
                        <div className="intro-info">
                            <p>I am a full stack developer who loves to build apps.</p>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    )
}
export default Home;