import {createContext , useState} from "react";
// import TestDone from "./components/questionViews/TestDone";
// import QuestionComponent from "./components/questionViews/questions/QuestionComponent";
// import ReactDOM from "react-dom/client";

export const summaryContext = createContext()

export const SummaryProvider = (props) => {
const [summary, setSummary]=useState('empty')
const [contactInformation, setContactInformation]=useState({companyname:"", phoneNumber:"", email:"", approved:false })
const [accessToRoute, setAccessToRoute]=useState(false)
    return (
        <summaryContext.Provider value={{summary, setSummary, accessToRoute, setAccessToRoute, contactInformation, setContactInformation}}>
            {props.children}
        </summaryContext.Provider>
    )
}