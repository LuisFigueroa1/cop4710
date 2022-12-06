
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import './App.css';
import firebaseConfig from './firebase'
import Home from './Pages/Home';
import Create from './Pages/Create';
import TakeSurvey from './Pages/TakeSurvey';
import ViewSurvey from './Pages/ViewSurvey';
import Results from './Pages/Results';
import LoginPage from './Pages/Login';



function App() {
  initializeApp(firebaseConfig)

  return (
    <BrowserRouter  >
     <Routes>
     <Route exact path="/" element ={<LoginPage/>}/> 
      <Route exact path="/home" element ={<Home/>}/> 
      <Route exact path="/create" element ={<Create/>}/> 
      <Route exact path="/survey/:surveyName" element={<TakeSurvey/>} />
      <Route exact path="/mysurveys" element={<ViewSurvey/>} />
      <Route exact path="/viewsurvey/:surveyName" element={<Results/>} />
     </Routes>
  </BrowserRouter>
  );
}

export default App;
