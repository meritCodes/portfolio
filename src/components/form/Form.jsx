import React, {useState} from 'react'
import './form.css'
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser'
const Form = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState("")
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs.send(
      "service_33nxt0n",     // your Service ID
      "template_rz20l2c",    // your Template ID
      formData,
      "xUHeaRwH03bFfW_Xt"   // your Public Key
    )
    .then(() => {
      setStatus("Message sent!")
      setFormData({ name: "", email: "", message: "" })
    })
    .catch((err) => {
      console.error(err)
      setStatus("Something went wrong. Try again.")
    })
  }
  return (
    <div >
      <h2 id='contact-title'>Contact Form</h2>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-7.5'>
        <div className='flex gap-7.5'>
            <input type="text" name="name" id="name" placeholder='Full Name' className='w-[50%] rounded-lg' value={formData.name} onChange={handleChange}/>
            <input type="email" name="email" id="email" placeholder='email' className='w-[50%] rounded-lg py-2.5' value={formData.email} onChange={handleChange}/>
        </div>
        <div>
            <textarea name="message" id="" className='w-full rounded-lg' placeholder='Your Message' value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className='flex gap-2 justify-end mt-auto' id='btn'>
          <Send className='text-[goldenrod]'/>
          <button className='text-[goldenrod]'>Send Message</button>
        </div>
        {status && <p>{status}</p>}
      </form>
    </div>
  )
}

export default Form
