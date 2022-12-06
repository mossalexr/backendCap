import React from 'react'
import '../index.css'

const Contact = () => {
  return (
    <div className='bg'>
  <section className="mt-0 px-4">
    <h2 className="h1-responsive font-weight-bold text-center pt-4 homeHead pb-1">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5 att">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
      a matter of hours to help you.</p>
    <div className="row">
      <div className="col-md-12 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input type="text" id="name" name="name" className="form-control bg-secondary" />
                <label htmlFor="name" className='att'>Your name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input type="text" id="email" name="email" className="form-control bg-secondary" />
                <label htmlFor="email" className='att'>Your email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <input type="text" id="subject" name="subject" className="form-control bg-secondary" />
                <label htmlFor="subject" className='att'>Subject</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form">
                <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea bg-secondary" defaultValue={""} />
                <label htmlFor="message" className='att'>Your message</label>
              </div>
            </div>
          </div>
        </form>
        <div className="text-center text-md-left pb-5">
          <button className="btn btn-primary" onclick="document.getElementById('contact-form').submit();" >Send</button>
        </div>
        <div className="status" />
      </div>
    </div>
  </section>
</div>

  )
}

export default Contact