import emailjs from '@emailjs/browser'
import { useState } from 'react'
import './Forms.css'

function Contact() {


  const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.id]: event.target.value })
    if (event.target.value === '') {
      setFormState({ ...formState, [event.target.id]: '' })
    }
  }

  const handleMessage = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_5loa6mu',
        'template_6rqagiq',
        formState,
        '-g6CgSoAgcOI1wfb6'
      )
      .then(
        function (response) {
          alert(
            `${formState.name}, Thank you for reaching out! Someone will respond shortly!`
          )
        },
        function (error) {
          alert('Sorry:', error)
        }
      )
    setFormState(initialState)
  }

  return (
    <div className="contact_card">
      <div className='contact_form'>
      <div id="contact-form">
       <form onSubmit={handleMessage} method="post" action="/">
      <div>
          <label for="name">
            <span class="required">Name:</span> 
            <input onChange={handleChange} type="text" id="name" name="name" value={formState.name} placeholder="Your Name" required="required" tabindex="1" />
          </label> 
      </div>
      <div>
          <label for="phone">
            <span>Phone Number (optional):</span> 
            <input onChange={handleChange} type="text" id="phone" name="phone" value={formState.phone} placeholder="Your Name" tabindex="1" />
          </label> 
      </div>
      <div>
          <label for="email">
            <span class="required">Email Address:</span>
            <input onChange={handleChange} type="email" id="email" name="email" value={formState.email} placeholder="Your Email" tabindex="2" required="required" />
          </label>  
      </div>
      <div>             
          <label for="subject">
          <span class="required">Subject:</span>
            <select onChange={handleChange} id="subject" name="subject" tabindex="4">   
              <option value="needs information about staying">Staying at Discovery House</option> 
              <option value="wants to donate food">Donating Food</option>
              <option value="wants to serve meals">Serving Meals</option>
              <option value="wants to volunteer">Volunteering Time</option>
              <option value="sent a general message">Other</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="message">
            <span class="required">Message:</span> 
            <textarea onChange={handleChange} id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required" value={formState.message}></textarea> 
          </label>  
      </div>
      <div>              
        <button onClick='handleMessage()' name="submit" type="submit" id="submit" >SEND</button> 
      </div>
      </form>
  </div> 
      </div>
    </div>
  )
}

export default Contact