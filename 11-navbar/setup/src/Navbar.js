import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className='logo'/>
          <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className={`${showLinks? 'links-container show-container': 'links-container'}`}>
          <ul className='links'>
            {links.map((link) => {
              const {id, url, text} = link;
              return(
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
