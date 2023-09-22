import React, { useState } from 'react'
import './navbar.css';
import { Link} from 'react-scroll';
import menu from '../../assets/menu.png'



const Navbar = () => {
  const[showMenu,setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
    <div className='logo'>Portfolio.</div>
     <div className='desktopMenu'>
     
                                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem"  >Home</Link>
                                    <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem" >Project</Link>
                                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem" >About</Link>
                                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem" >Contact</Link>
                            

        </div> 
        <img src={menu} alt='menu'className='menu' onClick={()=>setShowMenu(!showMenu)}></img>
    <div className='navMenu' style={{display:showMenu? 'flex':'none'}}> 
     
                                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem1"onClick={()=>setShowMenu(false)}  >Home</Link>
                                    <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem1" onClick={()=>setShowMenu(false)}>Project</Link>
                                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem1"onClick={()=>setShowMenu(false)} >About</Link>
                                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuItem1" onClick={()=>setShowMenu(false)}>Contact</Link>
                            
        </div> 
        
    </nav>
  )
}


export default Navbar