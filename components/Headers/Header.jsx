import React from 'react'
import '../Headers/header.css'
const Header = (props) => {
  return (
    <div className='p'>
      <h1 className='text-white text-4xl font-bold' id='headerTitle'>
        {props.title}
      </h1>
      <hr className='w-[3vw]' id='hrline'/>
    </div>
  )
}

export default Header
