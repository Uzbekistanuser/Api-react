import React from 'react'

function Navbar({scrollFunc}) {
  return (
    <>
      <div className='navbar'>
        <div className="left-text">
        <h3 className='Lunix-nav'>LUNIX companies | <span className='Uzb'> Uzbekistan</span></h3>
        </div>
        <div className="nav-list">
          <a href="#Main" onClick={()=>scrollFunc("-100vw" , "5.5vh" , "yellow")}>Главный</a>
            <a href="#Group"onClick={()=>scrollFunc("0","22.6vh", "red")}>Команда</a>
            <a href="#Prices"onClick={()=>scrollFunc("0","50.3vh","blueviolet")}>Цены</a>
            <a href="#AboutUs" onClick={()=>scrollFunc("0","8.7vh", "aqua")}>О нас</a>
            <a href="#Services"onClick={()=>scrollFunc("0","36.4vh", "orange")}>Услуги</a>
            <a href="#ContactUs"onClick={()=>scrollFunc("0","64.3vh", "green")}>Связаться с нами</a>
            
        </div>
        <div className="languages">
            <select name="" id="">
                <option value="0" className='option'>Ruscha</option>
                <option value="1" className='option'>O'zbekcha</option>
            </select>
        </div>
        </div>
    </>
  )
}

export default Navbar
