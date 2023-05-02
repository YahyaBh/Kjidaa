import './App.css'
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Services from './Components/Services/Services'
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    Aos.init({
      once: true
    })

  }, [])

  return (
    <>



      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/nos-service' element={<Services />} exact />
      </Routes>

    </>
  )
}

export default App
