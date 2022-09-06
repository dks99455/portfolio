import './index.scss';
import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_pboswui',
        'template_poj5qnv',
        refForm.current,
        'bm5mb7ZMTSY8bJq0r',
        'S9oJcZXvffdRYVidT7Pqu'
      )
      .then(
        () => {
          console.log(refForm.current)
          alert('Message successfully sent!')
//          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Contact me'.split('')}
            idx={15}
          />
        </h1>
        <p>
          LOREM IPSUM ATGEFAEWFAWEFAEW
        </p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required />
              </li>
              <li>
                <input placeholder='Subject' type='text' name='subject' required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact