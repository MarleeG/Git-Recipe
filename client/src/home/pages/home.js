import React from "react";
import Button from '../../shared/UIElements/Button';

import "./home.css";

const Home = () => {
  return (
    <div className="page odd-radius home__container">
      <div className="home__wrapper center">
          
        <div className="home__header-wrap">
          <h1 className="font-sac">Get Recipe</h1>
        </div>

        <div className="home__introduction-wrap">
          <p className="font-amatic">
            Enter your ingredients and get a recipe that caters to your
            crazings!
          </p>
        </div>

        <Button text='BEGIN'/>


      </div>
    </div>
  );
};

export default Home;
