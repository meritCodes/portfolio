import React, { useState } from 'react'
import profilePix from '../assets/pp.jpeg'
import { Mail } from 'lucide-react';
import contact from '../assets/details'
import './sidebar.css'
const SideBar = () => {
    const [isShowDetails, setIsShowDetails] = useState(false)
    const handleContactDetails = () =>{
        setIsShowDetails(prev => !prev)
    }
  return (
    <div id='sidebarContainer' >
        <div style={{display:"flex", alignItems:"center"}} className='profile md:flex-col'>
            <div className='image-box'>
                <img src={profilePix} alt="" style={{width:"75px", height:"75px", borderRadius:"50%"}} />
            </div>
            <div className='gap-2.5 flex flex-col'>
                <h3>Onogbotsere Merit</h3>
                <p>Web developer & DevOps</p>
            </div>
            
        </div>
        
                <div id='contact-details' className={`md:flex ${isShowDetails ? "flex" : "hidden"}`}>
                    <div className="horLine"></div>
            {
                contact.map(contact => <div key={contact.id} id='contact-child'>
                    
                    <div>

                        {<contact.icon style={{color:"goldenrod"}}/>}
                    </div>
                    <div className='icon-class'>
                        <h5>{contact.name.toUpperCase()}</h5>
                        <p>{contact.desc}</p>
                    </div>
                </div>)
            }
            <div className="horLine"></div>
            <p>linkedin</p>
            <p>twitter</p>
        </div>
            
        <button className='text-[goldenrod] md:hidden flex' id='show-contact' onClick={handleContactDetails}>{isShowDetails?"hide details":"show details"}</button>
    </div>
  )
}

export default SideBar
