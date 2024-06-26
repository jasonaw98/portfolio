import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close, resume} from '../assets'

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);

  return (
   <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
      <Link to="/" className='flex items-center gap-2' onClick={() => {setActive(""); window.scrollTo(0, 0)}}>
        {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
        <p className=' text-[19px] font-bold cursor-pointer flex bg-clip-text text-transparent bg-gradient-to-r  from-pink-500 to-violet-500'>Jason Aw |&nbsp;
        <span className='sm:block hidden'> Blockchain Developer</span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        <a href={`https://docs.google.com/document/d/1oEXGzW--eptZe6lKES0xDf436Kd9_7Jl7_Y_fiyW21Q/edit?usp=drive_link`} target="_blank" className='text-secondary text-[18px] font-medium hover:text-white'>Resume</a>
        {navLinks.map((link) => (
          <li key={link.id} className={`${Active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
        src={toggle ? close : menu}
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={() => settoggle(!toggle)}/>
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
        <a href={`https://docs.google.com/document/d/1oEXGzW--eptZe6lKES0xDf436Kd9_7Jl7_Y_fiyW21Q/edit?usp=drive_link`} target="_blank" className='text-secondary text-[18px] font-medium hover:text-white'>Resume</a>
        {navLinks.map((link) => (
          <li key={link.id} className={`${Active === link.title ? 'text-white' : 'text-secondary'} font-poppins text-[16px] font-medium cursor-pointer`} onClick={() => {settoggle(!toggle); setActive(link.title)}}>
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
      </div>
   </nav>
  )
}

export default Navbar
