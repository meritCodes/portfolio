import React from 'react'
import {Smartphone } from 'lucide-react';
import { MdOutlineDesignServices } from "react-icons/md";
import { SiSolidity } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { VscAzureDevops } from "react-icons/vsc";
import './skills.css'

const Skills = () => {

    const skills = [
        {
            id:0,
            name: "Web Design",
            skillDes: "The most modern and high-quality design made at a professional level",
            icon: MdOutlineDesignServices
        },
        {
            id:1,
            name: "Web Development",
            skillDes: "High-quality development of sites at the professional level.",
            icon: IoLogoReact
        },
        {
            id:2,
            name: "Mobile App Development",
            skillDes: "Professional development of applications for iOS and Android.",
            icon: Smartphone
        },
        {
            id:3,
            name: "Web3 Development",
            skillDes: "professional development for web3 applications",
            icon: SiSolidity
        },
        {
            id:4,
            name: "CI/CD",
            skillDes: "professional ci/cd",
            icon: VscAzureDevops
        }
    ]
  return (
    <div className='w-[95%]' id='skillsContainer'>
        <h2 className='text-white text-2xl' id='whatIDo'>What I Do</h2>
        <div className='grid md:grid-cols-2 gap-4 grid-cols-1'>
            {
                skills.map(skill =>
                    <div key={skill.id} className='flex gap-3 items-center border border-solid rounded-xl' id='skillsBox'>
                        <skill.icon size={70} className='text-[goldenrod]'/>
                        <div className=''>
                            <h4 className='text-white'>{skill.name}</h4>
                            <p>{skill.skillDes}</p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Skills
