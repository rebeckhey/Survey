import React, {useContext} from "react";
import "./index.css";
import Response from "./done-response/Response";
import { summaryContext } from "../../Context";

const TestDone = () => {
  const {summary}=useContext(summaryContext)
  const goldText="Your business achieved gold certificate!"
  const silverText="Your business achieved silver certificate!"
  const bronzeText="Your business achieved bronze certificate!"
  const copperText="Your business achieved copper certificate!"
  const noneText="We're sorry! Your business did not achieved a certificate"
  return (
    <div className="first-frame">
      <div className="second-frame">
      <div className="third-frame mt-5 mb-5">
        {
          summary>=40?
          <Response text={goldText}/>:
          summary >= 30 && summary <39?
          <Response text={silverText}/>:
          summary >= 20 && summary <29?
          <Response text={bronzeText}/>:
          summary >= 10 && summary <19?
          <Response text={copperText}/>:
          summary <10 ?
          <Response text={noneText}/>:
          null
        }
      </div>
      </div>
    </div>
  );
};

export default TestDone;
