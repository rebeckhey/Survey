import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { summaryContext } from "../../../Context";
import SendMail from "../../SendMail";


const QuestionComponent = (props) => {
  const { setSummary, setAccessToRoute, contactInformation} = useContext(summaryContext);
  let navigate = useNavigate();
  console.log(props.allAnswers.score)
  const alt = props.allAnswers && props.allAnswers.map(e=>{
    return e.score.map(o=>{
      return o.name
    })
  })
console.log(props.allAnswers)
  const [nextBtn, setNextBtn]=useState({disabled:true})
 const [btnText, setBtnText]=useState("Next")
  useEffect(() => {
    if(props.answers.score.length===0){
      setNextBtn({disabled:true})
    }
    else{
      setNextBtn({disabled:false})
    }
    if(props.questionCounter.question===15){
      console.log("15 wiho")
    }
    if(props.questionCounter.question===19){
      setBtnText("Submit")
    }
    else{
      setBtnText("Next")
    }
  
 
  }, [props.questionCounter.question, props.answers.score ])
const sending=(score)=>{
const {companyname, phoneNumber, email}=contactInformation
SendMail(companyname, phoneNumber, email, score, alt)
navigate("/done");
}

  const nextQuestion =  () => {
      props.setQuestionCounter({ question: props.questionCounter.question + 1 });
    //DETTA SKER NÄR ANVÄNDAREN SKICKAR IN TESTET
    if(props.questionCounter.question===19){
      setAccessToRoute(true)
      //RÄKNR UT POÄNGEN 
      let arr =[]
      let score=""
      props.allAnswers.map(e=>{
      return e.score.map(er=>{
        arr.push(er.score)
       const sum= arr.reduce((partialSum, a) => partialSum + a, 0)
       console.log(sum)
       score=sum
      return score
    })
  
  })
  setSummary(score)
  sending(score)
    }
  };
  
  const previousQuestion = () => {
      props.setQuestionCounter({ question: props.questionCounter.question - 1 });
      if(props.questionCounter.question===0){
        props.setStartTest(true)
      }
      props.setRunTestButton({disabled:false})
  };
  const onChangeRadio=(e, q)=>{
    setNextBtn({disabled:false})
    let tempState = [...props.allAnswers];
    let tempElement = { ...tempState[props.questionCounter.question] }
    if(e.target.value==="checked1"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked5:false, checked6:false, checked7:false, checked8:false,  checked9:false,score:[{name:`*${q.alt}`, score: q.score}]}
    }
    if(e.target.value==="checked2"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked1:false, checked3:false, checked4:false, checked5:false, checked6:false, checked7:false, checked8:false,  checked9:false,score:[{name:`*${q.alt}`, score: q.score}]} //e.target.name
    }
    if(e.target.value==="checked3"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked1:false, checked4:false, checked5:false, checked6:false, checked7:false, checked8:false,  checked9:false,score:[{name:`*${q.alt}`, score: q.score}]}
    }
    if(e.target.value==="checked4"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked1:false, checked5:false, checked6:false, checked7:false, checked8:false,  checked9:false,score:[{name:`*${q.alt}`, score: q.score}]}
    }
    if(e.target.value==="checked5"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked1:false, checked6:false, checked7:false, checked8:false,  checked9:false,score:[{name:`*${q.alt}`, score: q.score}]}
    }
    if(e.target.value==="checked6"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked5:false, checked1:false, checked7:false, checked8:false,  checked9:false,score:[{name:`*${q.alt}`, score: q.score}]}
    }
    if(e.target.value==="checked7"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked5:false, checked1:false, checked6:false, checked8:false,  checked9:false,score:[{name:`*${q.alt}`, score: q.score}]}
    }
    if(e.target.value==="checked8"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked5:false, checked1:false, checked6:false, checked7:false, checked9:false, score:[{name:`*${q.alt}`, score: q.score}]}
    }
    if(e.target.value==="checked9"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked5:false, checked1:false, checked6:false, checked7:false, checked8:false, score:[{name:`*${q.alt}`, score: q.score}]}
    }
    tempState[props.questionCounter.question] = tempElement
    props.setAnswers(tempState)

  }
  const onChangeCheckbox = (e, q) => {
    let tempState = [...props.allAnswers];
    let tempElement = { ...tempState[props.questionCounter.question] }
    if(e.target.checked){
      tempElement = {...props.answers, [e.target.value]:e.target.checked, score:[...props.answers.score,{name:`+${q.alt}`, change:e.target.name, score: q.score}]}
      setNextBtn({disabled:false})
    }
    else{
        const scoreArr=[...props.answers.score]
        tempElement = {...props.answers, [e.target.value]:e.target.checked, score:scoreArr.filter(o => o.change !== e.target.name)} 
    }
    tempState[props.questionCounter.question] = tempElement
    props.setAnswers(tempState)
  };
  return (
    <div className="question-width row col-12 d-flex justify-content-center m-0">
      <div className="col-md-8 col-12" >
        <form className="px-4" action="" id="create-course-form" >
          <p  className="text-center question-headline">{props.questions.question}</p>
          {props.answers.radio ? props.questions.alternatives.map((q, i) => {
            return ( <div key={i} className="input-border-width form-check alt-bg ps-5 pt-2 pb-2 mb-2">
            <input 
            value={q.val} 
            className="form-check-input radio-input" 
            type="radio" 
            name="flexRadioDefault" 
            id={q.val}
            onChange={(e) => {onChangeRadio(e, q);}}
            checked={q.val==="checked1"? props.answers.checked1: q.val==="checked2"? props.answers.checked2: q.val==="checked3"? props.answers.checked3: q.val==="checked4"? props.answers.checked4: q.val==="checked5"? props.answers.checked5: q.val==="checked6"? props.answers.checked6: q.val==="checked7"? props.answers.checked7: q.val==="checked8"? props.answers.checked8: q.val==="checked9"? props.answers.checked9:false}
                            />
            <label className="ms-4 form-check-label label-color" htmlFor={q.val}>{q.alt}</label>
          </div>)
          }):
          props.questions.alternatives.map((q, i) => {
            return (
              <div key={i} className="alt-bg input-border-width form-check mb-2 ps-5 pt-2 pb-2">
                <input
                  className="form-check-input filled-in"
                  type="checkbox"
                  name={q.name}
                  value={q.val}
                  onChange={(e) => {
                    onChangeCheckbox(e, q);
                  }}
                  id={q.val}
                  checked={q.val==="checked1"? props.answers.checked1: q.val==="checked2"? props.answers.checked2: q.val==="checked3"? props.answers.checked3: q.val==="checked4"? props.answers.checked4: q.val==="checked5"? props.answers.checked5: q.val==="checked6"? props.answers.checked6: q.val==="checked7"? props.answers.checked7 : q.val==="checked8"? props.answers.checked8: q.val==="checked9"? props.answers.checked9: q.val==="checked10"? props.answers.checked10:false}
                
                />
                <label className="ms-4 form-check-label label-color" htmlFor={q.val}>
                  {q.alt}
                </label>
              </div>
            )
        })
        }
        </form>
        <div className="mt-5 text-end d-flex justify-content-between">
          <button
            type="button"
            onClick={previousQuestion}
            className="button-style btn"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextQuestion}
            className="button-style btn"
            disabled={nextBtn.disabled}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
