import React from 'react'
import Header from '../components/Headers/Header'
import Form from '../components/form/Form'
import './contact.css'

const Contact = () => {
  return (
    <div className='w-[95%]' id='contact-container'>
      <Header title='Contact'/>
      <Form />
    </div>
  )
}

export default Contact
