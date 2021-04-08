import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';

function ContactForm() { 

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_r3ivipc', 'template_u0tb0wk', e.target, 'user_019XuMKAXBTZRJ7ktDmiH')
        .then((result) => {
            console.log(result.text);
            alert('Your message was sent to our contact team. Thank you for getting in touch!');
        }, (error) => {
            console.log(error.text);
            alert('Your message could not be sent at this time. Please check your internet connection. If this problem persists, email us at contact@descendantsofearth.com instead.');
        });
        e.target.reset();
    }

    return (
        <div className='form-container'>
            <form className='contact-form' onSubmit={sendEmail}>
                <h2>Send Us A Message</h2> <br />
                <input type='text' name='name' placeholder='Your Name' /> <br />
                <input type='email' name='email' placeholder='Your Email' /> <br />
                <input type='text' name='subject' placeholder='Subect' /> <br />
                <textarea name='message' placeholder='Enter your message here.' cols='30' rows='10'/>  <br />
                <input type='submit' className='submit' value='Send Message' />
            </form>

            <script type="text/jsx" src='../ContactApp.js'> </script>
        </div>   
    )
}

export default ContactForm