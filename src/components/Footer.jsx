import React from 'react'

function Footer({colorchange}) {
  return (
    <>
      <div className="footer">
      <footer className='footer'>
        <div className="mini-logo">
          <h2 className='logo-changer'>LNX</h2>
          <h6 className='mini-log'>LUNIX </h6>
          <h6 className='mini'>since 2023</h6>
        </div>
        <div className="moreinfo">
          <div className="first">
            <h3 className='footer-h3'>Деятельность в <span style={{
              color:colorchange
            }}>Uzbekistan</span></h3>
            <h5 className='footer-h5'>Город <span style={{
              color:colorchange
            }}>Toshkent</span></h5>

          </div>
            <div className="second">
            <h3 className='footer-h3'>Время работы <span style={{
              color:colorchange
            }}>Круглосуточно</span></h3>
            <h5 className='footer-h5'>Время сдачи работы <span style={{
              color:colorchange
            }}>Минимальна</span></h5>
              
            </div>
        </div>
      </footer>
      </div>
    </>
  )
}

export default Footer
