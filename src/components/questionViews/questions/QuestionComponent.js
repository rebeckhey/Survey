import React, {useState, useEffect} from "react";

const QuestionComponent = (props) => {
  const [nextBtn, setNextBtn]=useState({disabled:true})
  useEffect(() => {
    if(props.answers.score.length===0){
      setNextBtn({disabled:true})
    }
    else{
      setNextBtn({disabled:false})
    }
  }, [props.questionCounter.question, props.answers.score ])
  

  const nextQuestion = () => {
    props.setQuestionCounter({ question: props.questionCounter.question + 1 });
    
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
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked5:false, score:[{name:e.target.name, score: q.score}]}
    }
    if(e.target.value==="checked2"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked1:false, checked3:false, checked4:false, checked5:false, score:[{name:e.target.name, score: q.score}]}
    }
    if(e.target.value==="checked3"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked1:false, checked4:false, checked5:false, score:[{name:e.target.name, score: q.score}]}
    }
    if(e.target.value==="checked4"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked1:false, checked5:false, score:[{name:e.target.name, score: q.score}]}
    }
    if(e.target.value==="checked5"){
        tempElement = {...props.answers, [e.target.value]:e.target.checked, checked2:false, checked3:false, checked4:false, checked1:false, score:[{name:e.target.name, score: q.score}]}
    }
    tempState[props.questionCounter.question] = tempElement
    props.setAnswers(tempState)

  }
  const onChangeCheckbox = (e, q) => {
    let tempState = [...props.allAnswers];
    let tempElement = { ...tempState[props.questionCounter.question] }
    if(e.target.checked){
      tempElement = {...props.answers, [e.target.value]:e.target.checked, score:[...props.answers.score,{name:e.target.name, score: q.score}]}
      setNextBtn({disabled:false})
    }
    else{
        const scoreArr=[...props.answers.score]
        tempElement = {...props.answers, [e.target.value]:e.target.checked, score:scoreArr.filter(o => o.name !== e.target.name)} 
    }
    tempState[props.questionCounter.question] = tempElement
    props.setAnswers(tempState)
  };
console.log(props.allAnswers)
// props.allAnswers && props.allAnswers.map(e=>{
//     return e.score.map(er=>{
//         return console.log(er.score)
//     })
// })
  return (
    <div className="row col-12 d-flex justify-content-center m-0">
      <div className="col-8">
        <form className=" bg-white px-4" action="" id="create-course-form">
          <p className="question-headline">{props.questions.question}</p>
          {props.answers.radio ? props.questions.alternatives.map((q, i) => {
            return ( <div key={i} className="form-check">
            <input 
            value={q.val} 
            className="form-check-input" 
            type="radio" 
            name="flexRadioDefault" 
            id="flexRadioDefault1" 
            onChange={(e) => {onChangeRadio(e, q);}}
            checked={q.val==="checked1"? props.answers.checked1: q.val==="checked2"? props.answers.checked2: q.val==="checked3"? props.answers.checked3: q.val==="checked4"? props.answers.checked4: q.val==="checked5"? props.answers.checked5: q.val==="checked6"? props.answers.checked6: q.val==="checked7"? props.answers.checked7: q.val==="checked8"? props.answers.checked8:false}
                            />
            <label className="ms-4 form-check-label" htmlFor="flexRadioDefault1">{q.alt}</label>
          </div>)
          }):
          props.questions.alternatives.map((q, i) => {
            return (
              <div key={i} className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={q.name}
                  value={q.val}
                  onChange={(e) => {
                    onChangeCheckbox(e, q);
                  }}
                  id="flexCheckDefault"
                  checked={q.val==="checked1"? props.answers.checked1: q.val==="checked2"? props.answers.checked2: q.val==="checked3"? props.answers.checked3: q.val==="checked4"? props.answers.checked4: q.val==="checked5"? props.answers.checked5: q.val==="checked6"? props.answers.checked6: q.val==="checked7"? props.answers.checked7 : q.val==="checked8"? props.answers.checked8: q.val==="checked9"? props.answers.checked9: q.val==="checked10"? props.answers.checked10:false}
                
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
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
            // disabled={BackBtnState}
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextQuestion}
            className="button-style btn"
            disabled={nextBtn.disabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
