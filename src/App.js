import './App.css';
import StartTestComponent from './components/startTest/StartTestComponent';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Frame from './components/questionViews/Frame';
import TestDone from './components/questionViews/TestDone';
import {SummaryProvider} from './Context'

function App() {
  return (
        <SummaryProvider>
    <div className="App">
    <BrowserRouter>
    
    
      <Routes>
        <Route exact path="/" element={<StartTestComponent/>}/>
        <Route exact path="/start" element={<Frame />}/>
        <Route exact path="/done" element={<TestDone />}/>
       
      </Routes>
    </BrowserRouter>
    </div>
        </SummaryProvider>
  );
}

export default App;
