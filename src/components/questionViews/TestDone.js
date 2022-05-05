import React, { useContext } from "react";
import "./index.css";
import { summaryContext } from "../../Context";
import PlatinaResponse from "./done-responses/PlatinaResponse";

const TestDone = () => {
  const { summary } = useContext(summaryContext);
  return (
    <div className="first-frame">
      <div className="second-frame">
      <div className="third-frame">
       {
           summary >= 40 ?
           <PlatinaResponse/>
           :
           <h1>I'm sorry, you did'nt make it</h1>
       }
       
      </div>
      </div>
    </div>
  );
};

export default TestDone;
