/* Home.js */

import React from "react";
import "./Home.css";
import C1 from"../../Images/c1.jpg";
import C2 from"../../Images/c2.jpg";
import C3 from"../../Images/c3.jpg";
import Footer from "./Footer";
import vision from ".//vision_prev_ui.png";
import mission from ".//mission_prev_ui.png";
export const Home = () => {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={C1} className="d-block w-100" alt="carousel-img1" />
            </div>
            <div className="carousel-item">
              <img src={C2} className="d-block w-100" alt="carousel-img2" />
            </div>
            <div className="carousel-item">
              <img src={C3} className="d-block w-100" alt="carousel-img3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="info-container">
        <h1>Welcome to KrushiVikas</h1>
        <p>
          KrushiVikas is your one-stop destination for all things related to
          agriculture. Whether you are a farmer, an enthusiast, or someone
          looking to learn more about agriculture, we provide valuable insights,
          tools, and resources to help you thrive in the agricultural sector.
          Explore our website to discover the latest trends, technologies, and
          best practices in farming, crop management, livestock rearing, and
          much more.
        </p>
      </div>
      <div className="vision-mission-container">
        <div className="vision-card">
          <h2>Vision</h2>
          <img src={vision} alt="Vision" />
          <p>Our vision is to revolutionize agriculture by leveraging technology and innovation to create sustainable farming practices.</p>
        </div>
        <div className="mission-card">
          <h2>Mission</h2>
          <img src={mission} alt="Mission" />
          <p>Our mission is to empower farmers with knowledge, tools, and resources to enhance productivity, profitability, and environmental stewardship.</p>
        </div>
      </div><br></br>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Home;
