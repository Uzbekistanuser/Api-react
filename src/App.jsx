import './App.css'
import AboutUs from './pages/AboutUs'
import Main from './pages/Main'
import ContactUs from './pages/ContactUs'
import Group from './pages/Group'
import Navbar from './components/Navbar'
import Prices from './pages/Prices'
import Services from './pages/Services'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { useState } from 'react'
import mainback from '../public/img/mainback.png'
import aboutback from '../public/img/aboutback.png'
import groupback from '../public/img/groupback.png'
import servicesback from '../public/img/servicesback.png'
import pricesback from '../public/img/pricesback.png'
import contactback from '../public/img/contactback.png'
function App() {
  const [arrowPadding , setarrowPadding] = useState("5.5vh")
  const [sidebarLeft, setSidebarLeft] = useState("-10vw")
  const [colorchange, setcolorChange] = useState("blue")
  function scrollFunc(sidebar,amount, color) {
   setSidebarLeft(sidebar);
   setarrowPadding(amount);
   setcolorChange(color);
  }
    return (
    <div style={{
      background:`url(${mainback}) no-repeat`,
      backgroundSize:`1988px 982px`,

    }}>
    <Navbar scrollFunc={scrollFunc} setSidebarLeft={setSidebarLeft} />
    <SideBar arrowPadding={arrowPadding} sidebarLeft={sidebarLeft} scrollFunc={scrollFunc}/>
    
    <Main/>
    <div style={{
      background:`url(${aboutback}) no-repeat`,
      backgroundSize:`1988px 982px`
    }}>
    <AboutUs/>
    </div>
    <div style={{
      background:`url(${groupback}) no-repeat`,
      backgroundSize:`1988px 982px`
    }}>
    <Group/>
    </div>
    <div style={{
      background:`url(${servicesback}) no-repeat`,
      backgroundSize:`1988px 982px`
    }}>
    <Services/>

    </div>
    <div style={{
      background:`url(${pricesback}) no-repeat`,
      backgroundSize:`1988px 982px`
    }}>
    <Prices/>
    </div>
    <div style={{
      background:`url(${contactback}) no-repeat`,
      backgroundSize:`1988px 982px`
    }}>
    <ContactUs/>
    </div>
    <Footer colorchange={colorchange}/>
    </div>
  )
}

export default App
