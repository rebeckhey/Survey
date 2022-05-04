import './App.css';
import StartTestComponent from './components/startTest/StartTestComponent';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Frame from './components/questionViews/Frame';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    
      <Routes>
        <Route exact path="/" element={<StartTestComponent/>}/>
        <Route exact path="/start" element={<Frame />}/>

      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
