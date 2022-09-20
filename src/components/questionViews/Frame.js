import React, {useState} from "react";
import "./index.css";
import ProgressBar from "./ProgressBar";
import Intro from "./questions/Intro";
import {questions} from "./questions/QuestionObject"
import QuestionComponent from "./questions/QuestionComponent";
const Frame = () => {
  const [startTest, setStartTest]=useState(true)
  const [questionCounter, setQuestionCounter]=useState({question:null})
  const [answers, setAnswers]=useState([
    {id:1, checked1:false, checked2:false,  checked3:false, score: [], radio:true},
    {id:2, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:3, checked1:false, checked2:false,  checked3:false, checked4:false, score: [], radio:true},
    {id:4, checked1:false, checked2:false,  checked3:false, score: [], radio:true},
    {id:5, checked1:false, checked2:false,  checked3:false,  score: [], radio:true},
    {id:6, checked1:false, checked2:false,  score: [], radio:true},
    {id:7, checked1:false, checked2:false, checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:8, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:9, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], checked6:false, checked7:false, checked8:false, checked9:false, checked10:false,radio:false}, 
    {id:10, checked1:false, checked2:false,  checked3:false,  score: [], radio:true},
    {id:11, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], checked6:false, checked7:false, checked8:false, radio:false},
    {id:12, checked1:false, checked2:false,  checked3:false, checked4:false, score: [], radio:true},
    {id:13, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:14, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:15, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:16, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:17, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, score: [], radio:true},
    {id:18, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, checked6:false, checked7:false, score: [], radio:true},
    {id:19, checked1:false, checked2:false,  checked3:false, checked4:false, score: [], radio:true},
    {id:20, checked1:false, checked2:false,  checked3:false, checked4:false, checked5:false, checked6:false, checked7:false, checked8:false, checked9:false, score: [], radio:true},
])
const [runTestButton, setRunTestButton]=useState({disabled:true})

  return (
    <div className="first-frame">
      <div className="second-frame">
        {
          startTest ? 
          <div className="third-frame" style={{display:"flex", paddingBottom:"3rem", paddingTop:"3rem"}}>
          <Intro setRunTestButton={setRunTestButton} runTestButton={runTestButton}setStartTest={setStartTest} setQuestionCounter={setQuestionCounter}/> 
          </div>
          :
          <div className="third-frame" style={{ paddingBottom:"5rem"}}>
          
            <ProgressBar  questionCounter={questionCounter}/>
          <QuestionComponent setStartTest={setStartTest} setRunTestButton={setRunTestButton} answers={answers[questionCounter.question]} allAnswers={answers} setAnswers={setAnswers} setQuestionCounter={setQuestionCounter} questionCounter={questionCounter} questions={questions[questionCounter.question]}/>
          </div>
        }
         
        </div>
      </div>

  );
};

export default Frame;
