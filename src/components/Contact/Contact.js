import React, { useRef } from 'react'
import "./Contact.css"
import linkedin from '../../assets/linkedin.png'
import git from '../../assets/git.png'
import email from '../../assets/email.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vnj0kri', 'template_nnxi7vr', form.current, 'MX5_hL3G7YVKN5_mG')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!!!!");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactP'>
        <div id='contact'>
            <h1 className='contactTitle'> Contact Me</h1>
            <span className='des'>Please fill the below form for work opportunities</span>
            <form className='contactF' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your name' name='from_name'/>
            <input type='email' className='email' placeholder='Your email'name='your_email'/>
            <textarea className='msg' name='message' rows={5} placeholder='Message'></textarea>
            <button className='btn'value="send" type='Submit'>Submit</button>
            <div className='limk'>
              <a href='https://www.linkedin.com/in/ritika-revankar-09b601244/'>
                <img src={linkedin} alt='linkedin' className='contactI1'/>
              </a>
              <a href='https://github.com/ritu2425'>
                <img src={git} alt='gi' className='contactI'/>
                </a>
                <a href='mailto:2425riturevankar@gmail.com'>
                <img src={email} alt='cemail' className='contactI'/>
                </a>
            </div>
            </form>
             

        </div>
    </section>
  )
}

export default Contact