import React from 'react'

function ContactUs() {
  return (
    <>
      <section id='ContactUs'>
      <div className="first-box">
          <h3 className='boxes-h3'>Свяжитесь с нами</h3>
          <h5 className='boxes-h5'>Мы всегда рады новым проектам и сотрудничеству. Свяжитесь с нами, и мы обсудим ваши идеи.</h5>
        </div>
        <div className="second-box-contact">
          <div className="small-boxes-contact">
            <div className="contact-box">
            <img src="/public/img/contact-email.png" alt="" />
            <a>name_company@email.com</a>
            </div>
            <div className="contact-box">
            <img src="/public/img/contact-phone.png" alt="" />
            <a>+998 | 90 123 45 67</a>
            </div>
            <div className="contact-box">
            <img src="/public/img/contact-tg.png" alt="" />
            <a>@user_telegram</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
