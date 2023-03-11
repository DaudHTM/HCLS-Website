import React,{Component} from 'react';
import "../CSS/contact.css";
import {NetlifyForm, Honeypot} from 'react-netlify-forms';


function Contact() {


  return (
    
    <div className="contactContainer" id='contact'>
     
        <div className="backgroundImgContact"> 
            <div className="contactTextContainer">
            <p3>REACH OUT TO US!</p3>

            <p1>Contact</p1>
            </div>
        </div>
    <div className="contactFormContainer">
    <div className="left contactInfor">

    </div>

    <div className="right form">
  <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field' className="form">
    {({ handleChange, success, error }) => (
      <>
      <div className="formsContainer">
        <Honeypot />
        {success && <p>Thanks for contacting us!</p>}
        {error && (
          <p>Sorry, we could not reach our servers. Please try again later.</p>
        )}
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='name'>Email:</label>
          <input type='text' name='name' id='name' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            type='text'
            name='message'
            id='message'
            rows='4'
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="submitButton"  type='submit'>Submit</button>
        </div>
        </div>
      </>
    )}
  </NetlifyForm>
  </div>
  </div>


    </div>
  )
}

export default Contact
