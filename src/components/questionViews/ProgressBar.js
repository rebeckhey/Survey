import React, {useRef, useEffect} from "react";
import "./index.css";

const ProgressBar = (props) => {
  console.log(props.questionCounter)
  const first = useRef(null)
  const second = useRef(null)
 useEffect(() => {
  console.log(props.questionCounter.question)
  if(props.questionCounter.question===0){
    
    first.current.classList.remove("active")
  }
  if(props.questionCounter.question===1){
    
    first.current.classList.add("active") 
  }
  if(props.questionCounter.question===2){
    second.current.classList.add("active")
  }
   
  
 }, [props.questionCounter])
 
  return (
    <>
      <div className="container">
        <div className="row">
          <ul id="progress-bar" className="progressbar">
            <li className="active">1</li>
            <li ref={first}>2</li>
            <li ref={second}>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
