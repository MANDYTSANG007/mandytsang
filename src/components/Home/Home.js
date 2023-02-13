import React from "react";
import "./Home.css";

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