import React from "react";

import "./recipe.css";
const Recipe = () => {
  return (
    <div className="page recipe__container odd-radius">
      I am the recipe page
      <div className="recipe__wrapper">
        <div className="recipe__col recipe__col-one">
            I am column 1
        </div>
        <div className="recipe__col recipe__col-two">
            I am column two
        </div>
      </div>
    </div>
  );
};

export default Recipe;
