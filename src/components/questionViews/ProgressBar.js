import React, {useRef, useEffect} from "react";
import "./index.css";

const ProgressBar = (props) => {
  console.log(props.questionCounter)
  const progress1 = useRef(null)
  const progress2 = useRef(null)
  const progress3 = useRef(null)
  const progress4 = useRef(null)
  const progress5 = useRef(null)
  const progress6 = useRef(null)
  const progress7 = useRef(null)
  const progress8 = useRef(null)
  const progress9 = useRef(null)
  const progress10 = useRef(null)
  const progress11 = useRef(null)
  const progress12 = useRef(null)
  const progress13 = useRef(null)
  const progress14 = useRef(null)
  const progress15 = useRef(null)
  const progress16 = useRef(null)
  const progress17 = useRef(null)
  const progress18 = useRef(null)
  const progress19 = useRef(null)
  // const progress2 = useRef(null)
 useEffect(() => {
  console.log(props.questionCounter.question)
  if(props.questionCounter.question >= 1){
    progress1.current.classList.add("active")
  }
  else{
    progress1.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 2){
    progress2.current.classList.add("active")
  }
  else{
    progress2.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 3){
    progress3.current.classList.add("active")
  }
  else{
    progress3.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 4){
    progress4.current.classList.add("active")
  }
  else{
    progress4.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 5){
    progress5.current.classList.add("active")
  }
  else{
    progress5.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 6){
    progress6.current.classList.add("active")
  }
  else{
    progress6.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 7){
    progress7.current.classList.add("active")
  }
  else{
    progress7.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 8){
    progress8.current.classList.add("active")
  }
  else{
    progress8.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 9){
    progress9.current.classList.add("active")
  }
  else{
    progress9.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 10){
    progress10.current.classList.add("active")
  }
  else{
    progress10.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 11){
    progress11.current.classList.add("active")
  }
  else{
    progress11.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 12){
    progress12.current.classList.add("active")
  }
  else{
    progress12.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 13){
    progress13.current.classList.add("active")
  }
  else{
    progress13.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 14){
    progress14.current.classList.add("active")
  }
  else{
    progress14.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 15){
    progress15.current.classList.add("active")
  }
  else{
    progress15.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 16){
    progress16.current.classList.add("active")
  }
  else{
    progress16.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 17){
    progress17.current.classList.add("active")
  }
  else{
    progress17.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 18){
    progress18.current.classList.add("active")
  }
  else{
    progress18.current.classList.remove("active")
  }
  if(props.questionCounter.question >= 19){
    progress19.current.classList.add("active")
  }
  else{
    progress19.current.classList.remove("active")
  }
  
 }, [props.questionCounter])
 
  return (
    <>
      <div className="container">
        <div className="row">
          <ul id="progress-bar" className="progressbar">
            <li className="active">1</li>
            <li ref={progress1}>2</li>
            <li  ref={progress2}>3</li>
            <li ref={progress3}>4</li>
            <li ref={progress4}>5</li>
            <li ref={progress5}>6</li>
            <li ref={progress6}>7</li>
            <li ref={progress7}>8</li>
            <li ref={progress8}>9</li>
            <li ref={progress9}>10</li>
            <li ref={progress10}>11</li>
            <li ref={progress11}>12</li>
            <li ref={progress12}>13</li>
            <li ref={progress13}>14</li>
            <li ref={progress14}>15</li>
            <li ref={progress15}>16</li>
            <li ref={progress16}>17</li>
            <li ref={progress17}>18</li>
            <li ref={progress18}>19</li>
            <li ref={progress19}>20</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
