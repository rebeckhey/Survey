import React from "react";


const Intro = (props) => {
  // const [runTestButton, setRunTestButton]=useState({disabled:true})
const companynameInput = (e)=>{
  // eslint-disable-next-line eqeqeq
  if(!e.target.value==""){
    props.setRunTestButton({disabled:false})
  }
  // eslint-disable-next-line eqeqeq
  if(e.target.value==""){
    props.setRunTestButton({disabled:true})
  }

  props.setCompanyName({...props.setCompanyName, companyname: e.target.value})
}
const startingTest =()=>{
  props.setStartTest(false)
  props.setQuestionCounter({question:0})
}
console.log(props.companyname.companyname)
  return (
    <div
    className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        verticalAlign: "center",
        width:"70%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3 className="headline text-center mb-5">
          Before <span className="black-span">we</span> begin
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", color:"white" }}>
        <h3 className="underline text-center mb-5">
          If you meet the requirements as environmentally friendly, we carry out
          a cerfificate and therefore need your companyname
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <input
          style={{ width: "15em" }}
          type="text"
          id="formControlLg"
          placeholder="your companyname"
          defaultValue={props.companyname.companyname}
          className="form-control form-control-lg"
          onChange={companynameInput}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={startingTest} disabled={props.runTestButton.disabled} style={{ width: "20em", marginTop:"3rem" }} type="button" className="btn button-style">
          Run test
        </button> 
      </div>
    </div>
  );
};

export default Intro;
