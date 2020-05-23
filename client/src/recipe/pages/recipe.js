import React from "react";

import "./recipe.css";
const Recipe = () => {
  return (
    <div className="page recipe__container odd-radius">
      <div className="recipe__wrapper">
        <div className="recipe__col recipe__col-one">
          <div className="recipe__col-one-top recipe__inner-col">
              I am column 1 TOP
              </div>
          <div className="recipe__col-one-bottom recipe__inner-col">
              I am column BOTTOM
              </div>
        </div>
        <div className="recipe__col recipe__col-two">I am column 2</div>
      </div>
    </div>
  );
};

export default Recipe;
