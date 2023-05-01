import './App.css'
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Services from './Components/Services/Services'


function App() {

  return (
    <>



      <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/nos-service' element={<Services/>} exact />
      </Routes>

    </>
  )
}

export default App
