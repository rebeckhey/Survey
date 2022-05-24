import {createContext , useState} from "react";

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