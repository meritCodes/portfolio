import React from 'react'
import './aboutme.css'
import Header from '../Headers/Header'
const AboutMe = () => {
  return (
    <div className='w-[95%]' id='about-container'>
          <Header title="About Me" />
          <div className=''>
              <p>
                  I'm Merit, a software engineer based in Nigeria with a growing focus on DevOps and full-stack development. 
                  My journey started in frontend development, and it's since expanded into backend systems, automation, and 
                  infrastructure — I care as much about how software runs as I do about how it looks.
              </p>
              <p>
                      Day to day, I build with React, React Native, and Node.js, styling interfaces with Tailwind CSS and shaping 
                      APIs with Express. I enjoy the full arc of a project: designing a clean, responsive UI, wiring it to a solid 
                      backend, and thinking through how it'll actually get deployed and kept running.
              </p>
              <p>
                      I'm currently deepening my DevOps skills — CI/CD pipelines, containerization with Docker, and orchestration 
                      with Kubernetes — because I believe great engineers understand the whole lifecycle of their code, not just 
                      the part that ships features. Alongside that, I've been building real, working projects: automation bots, 
                      fintech tools exploring crypto and DeFi mechanics, and personal apps that solve problems I actually run into.
              </p>
              <p>
                      What drives me is curiosity paired with follow-through — I like learning by building, debugging things until 
                      I actually understand why they broke, and shipping things that work end to end.
              </p>
          </div>
    </div>
  )
}

export default AboutMe
