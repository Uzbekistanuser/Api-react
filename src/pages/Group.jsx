import React from 'react'

function Group() {
  return (
    <>
      <section id='Group'>
      <div className="first-box">
          <h3 className='boxes-h3'>Наша команда</h3>
          <h5 className='boxes-h5'>В Компании <span className='group-span'>Lunix CO</span>работает команда высококвалифицированных <br /> специалистов, каждый из которых вносит свой уникальный вклад в <span className='group-span'>успех</span> <br />  компании.</h5>
        </div>
        <div className="second-box">
          <img className='pc-purple' src="/public/img/pc-img.png" alt="" />
          <div className="information-job">
            <div className="front-job">
              <img className='group-img' src="/public/img/front-job.png" alt="" />
              <div className="job-text">
                <h4 className='jobs-text-h4'>Frontend Developer</h4>
                <h5 className='jobs-text-h5'>2 года опыта</h5>
              </div>
            </div>

            <div className="soft-job">
              <img className='group-img' src="/public/img/soft-job.png" alt="" />
              <div className="job-text">
                <h4 className='jobs-text-h4'>Softwae Engineer</h4>
                <h5 className='jobs-text-h5'>2 года опыта</h5>
              </div>
              </div>

            <div className="back-job">
              <img className='group-img' src="/public/img/back-job.png" alt="" />
              <div className="job-text">
                <h4 className='jobs-text-h4'>Backend Developer</h4>
                <h5 className='jobs-text-h5'>2 года опыта</h5>
              </div>
              </div>

            <div className="mob-job">
              <img className='group-img' src="/public/img/mob-job.png" alt="" />
              <div className="job-text">
                <h4 className='jobs-text-h4'>Mobile developer</h4>
                <h5 className='jobs-text-h5'>2 года опыта</h5>
              </div>
              </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Group
