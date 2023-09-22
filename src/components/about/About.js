import React from 'react'
import "./About.css"
import expressjs from "../../assets/expressjs.png"
import reactjs from "../../assets/reactjs.png"
import mongodb from "../../assets/mongodb.png"
import nodejs from "../../assets/nodejs.png"
import htmljs from "../../assets/htmljs.png"
import cssjs from "../../assets/cssjs.png"
import jsjs from "../../assets/jsjs.png"

const About = () => {
  return (
   <section id='about'>
        <h1 className='title'>About</h1>
        <span className='des'>I am skilled web Developer , To succeed a challenging position where I can contribute<br/> my skills as software professional for growth of Organization and myself.</span>
    <div className='cont'>
      <div className='container'>
       <img src={htmljs} alt='htmljs' className='cont1'/>
       <p className='p'>HTML</p>
       </div>
       <div className='container'>
       <img src={cssjs} alt='cssjs' className='cont1'/>
       <p className='p'>CSS</p>
       </div>
       <div className='container'>
       <img src={jsjs} alt='jsjs' className='cont1'/>
       <p className='p'>JavaScript</p>
       </div>
       <div className='container'>
       <img src={reactjs} alt='reactjs' className='cont1'/>
       <p className='p'>ReactJS</p>
       </div>
       <div className='container'>
       <img src={nodejs} alt='nodejs' className='cont1'/>
       <p className='p'>NodeJS</p>
       </div>
       <div className='container'>
       <img src={expressjs} alt='expressjs' className='cont1'/>
       <p className='p'>ExpressJS</p>
       </div>
       <div className='container'>
       <img src={mongodb} alt='momgodb' className='cont1'/>
       <p className='p'>MongoDB</p>
          </div>
    </div>
    <button className='res'>Resume</button>
    </section>
  )
}

export default About