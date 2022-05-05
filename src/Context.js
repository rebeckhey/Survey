import {createContext , useState} from "react";
// import TestDone from "./components/questionViews/TestDone";
// import QuestionComponent from "./components/questionViews/questions/QuestionComponent";
// import ReactDOM from "react-dom/client";

export const summaryContext = createContext()

export const SummaryProvider = (props) => {
const [summary, setSummary]=useState('empty')
    return (
        <summaryContext.Provider value={{summary, setSummary}}>
            {props.children}
        </summaryContext.Provider>
    )
}