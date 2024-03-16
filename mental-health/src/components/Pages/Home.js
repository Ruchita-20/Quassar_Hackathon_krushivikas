import React from "react";
import "./Home.css" ;

export const Home = () => {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel">
          <img
            src="https://via.placeholder.com/300"
            alt="carousel-img1"
            className="carousel-img"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="carousel-img2"
            className="carousel-img"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="carousel-img3"
            className="carousel-img"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="carousel-img4"
            className="carousel-img"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="carousel-img5"
            className="carousel-img"
          />
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
    </div>
  );
};

export default Home;
