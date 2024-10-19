import React from "react";
import Layout from '../Components/Layout';
import { Link } from "react-router-dom";
import Banner from "../assets/b1.png";
import "../Styles/HomeStyle.css";

const Home = () => {
  return (
    <div>

<Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>The Taste Trail</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
    </div>
  
  );
};

export default Home;