import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-scroll';
import {
  FcHome,
  FcAbout,
  //FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
import './MobileNav.css'

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  }
  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? ( <AiOutlineMenuFold size={25} className='mobile-nav-icon' onClick={handleOpen} /> ) : ( <GiHamburgerMenu size={25} className='mobile-nav-icon' onClick={handleOpen} /> )}
            
            <span className='mobile-nav-title'>Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link">
              <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcAbout /> About
              </Link>
              </div>
              <div className="nav-link">
              <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcReadingEbook /> Education
              </Link>
              </div>
              
              <div className="nav-link">
              <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcBiotech /> Skills
              </Link>
              </div>
              <div className="nav-link">
                <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcVideoProjector /> Projects
                </Link>
              </div>
              {/*
              <div className="nav-link">
                <Link to='work' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcPortraitMode /> Work Experince
                </Link>
              </div>
              */}
              <div className="nav-link">
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcContacts /> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        )}
        
    </div>
    </>
  )
}

export default MobileNav