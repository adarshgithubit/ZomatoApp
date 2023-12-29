
import './App.css'
import Cusine from './Cusine';
import HomePage from './HomePage'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
 

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={ <HomePage/>}></Route>
      <Route path='/cusine' element={<Cusine/>}></Route>
    </Routes>
   </Router>
 
   
   </>
  )
}

export default App
