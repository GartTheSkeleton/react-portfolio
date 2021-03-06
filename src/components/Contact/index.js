import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid){
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="body-element">
          <h2>Contact me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='column'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={formState.name} onBlur={handleChange}/>
                </div>
                <div className='column'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={formState.email} onBlur={handleChange}/>
                </div>
                <div className='column'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={formState.message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;