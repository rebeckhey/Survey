import React from "react";
import "./index.css";

const StartTestComponent = () => {
  return (
    <div className="first-div">
      <div className="second-div">
        <hr className="first-hr"/>
        <div className="third-div">
          <div ><img className="image"src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?cs=srgb&dl=pexels-felix-mittermeier-957024.jpg&fm=jpg" alt=""/></div>
         <div className="right-div">
         <h1 className="headline">Green <span className="black-span">Business?</span> </h1>
          <h3 className="underline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed iaculis ipsum. 
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed iaculis ipsum. Pellentesque sed semper nulla, ac placerat diam.
          </h3>
          <button type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/start';
      }} className="button-style" style={{ marginTop:"2rem" }}>Start!</button>
           </div> 
        </div>
           <hr className="second-hr"/>
      </div>
    </div>
  );
};

export default StartTestComponent;
