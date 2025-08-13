import React from 'react'

function AboutUs() {
  return (
    <>
      <section id='AboutUs'>
       <div className="first-box">
          <h3 className='boxes-h3'>О нас</h3>
          <h5 className='boxes-h5'>/LUNIX companies 2023 создана для предоставления высококачественных услуг в области разработки мобильных и веб-приложений.</h5>
        </div> 
        <div className="small-box">
          <div className="small-box-inside">
            <div className="oneimg">
          <img className='around' src="/public/img/aroundimg.png" alt="" />
            <img className='inside-img' src="/public/img/insideimg.png" alt="" />

            </div>
            <img className='uklon' src="/public/img/uklon.png" alt="" />
            <h3 className='uklon-text'>Мобильное приложение</h3>
          </div>
          <div className="small-box-inside">
            <div className="oneimg">
            <img className='around' src="/public/img/aroundimg.png" alt="" />
            <img className='inside-web' src="/public/img/insideweb.png" alt="" />

            </div>
            <img className='uklon' src="/public/img/uklon.png" alt="" />
            <h3 className='uklon-text'>Мобильное приложение</h3>
          </div>
          <div className="small-box-inside-last">
          <div className="oneimg">
            <img className='around' src="/public/img/aroundimg.png" alt="" />
            <img className='inside-pc' src="/public/img/insidepc.png" alt="" />
            </div>              
            <img className='uklon' src="/public/img/uklon.png" alt="" />
            <h3 className='uklon-text'>Мобильное приложение</h3>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default AboutUs
