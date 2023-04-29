import './App.css'
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <>



      <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/nos-service' element={<Home/>} exact />
      </Routes>

    </>
  )
}

export default App
