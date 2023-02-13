import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <main className="home-main">
            <div className="home-background">
                <img src={require("../../assets/curiosity.jpeg")} alt="" className="background-img" />
                <p className="home-heading1"> Mandy Tsang </p>
                <p className="home-heading2">
                    <span> Full Stack Developer </span>
                    <span>  |  </span>
                    <span> Data Analyst </span>
                </p>
            </div>
        </main>
    )
}
export default Home;