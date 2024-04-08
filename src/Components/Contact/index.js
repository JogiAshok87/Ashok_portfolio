
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

import './index.css'

const Contact = () =>{
    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs
          .sendForm('service_jslfqzw', 'template_0n84pbl', form.current, {
            publicKey: 'MKY0v0LZ0FOoimde3',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
    }
    return(
         <div className='contact-bg'>
            <h1>Contact <span>Me</span></h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='input-box'>
                    <input type="text" name="user_name" placeholder='Full Name' required/>
                    <input type="text" name="user_email" placeholder='Email Address' required/>
                </div>
                <div className='input-box'>
                    <input type="number" name="user_mobile_no" placeholder='Mobile Number' required/>
                    <input type="text" name="user_subject" placeholder='Email Subject' required/>
                </div>
                <textarea cols="30" rows="10" name="user_message" placeholder='Your Message' required></textarea>
                <button type="submit"  className='send-me-btn'>Send Me</button>
            </form>
         </div>
    )
}

export default Contact