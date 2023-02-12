import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <main className="home-main">
            <div className="home-background">
                <img src={require("../../assets/curiosity.jpeg")} alt="" className="background-img" />
                <div className="home-text">
                    <h1 className="home-heading" style={{ paddingBottom: "10px"}}>Mandy Tsang</h1>
                    <h3>
                        <span>Full Stack Developer</span>
                        <span>  |  </span>
                        <span>Data Analyst</span>
                    </h3>
                </div>
            </div>
        </main>
    )
}
export default Home;