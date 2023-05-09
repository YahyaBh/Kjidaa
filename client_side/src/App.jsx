import './App.css'
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Services from './Components/Services/Services'
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import Packs from './Components/Packs/Packs';
import NotFound from './Error/NotFound/NotFound';
import Reservation from './Components/Reservation/Reservation';
import About from './Components/About/About';


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
        <Route path='/nos-packs' element={<Packs />} exact />
        <Route path='/reservation' element={<Reservation />} exact />
        <Route path='/a-propos' element={<About />} exact />
        {/* <Route path='/blogs' element={<Packs />} exact />
        <Route path='/contact' element={<Packs />} exact /> */}


        <Route path='*' element={<NotFound />} exact />

      </Routes>

    </>
  )
}

export default App
