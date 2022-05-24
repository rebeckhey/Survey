import './App.css';
// import StartTestComponent from './components/startTest/StartTestComponent';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Frame from './components/questionViews/Frame';
import TestDone from './components/questionViews/TestDone';
import {SummaryProvider} from './Context'
import PrivateRoute from './components/ProtectedRoute';

function App() {
  return (
        <SummaryProvider>
    <div className="App">
    <BrowserRouter>
    
    
      <Routes>
        {/* <Route exact path="/" element={<StartTestComponent/>}/> */}
        <Route exact path="/" element={<Frame />}/>
        <Route path="/" element={<PrivateRoute />}>
        <Route exact path="/done" element={<TestDone />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
        </SummaryProvider>
  );
}

export default App;
