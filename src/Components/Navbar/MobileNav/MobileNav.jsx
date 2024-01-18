import React from 'react'
import './MobileNav.css'
import logo_icon from "../Assets/logo.jpg"
import { Link } from 'react-router-dom'

export default function MobileNav({ isOpen, toggleMenu }) {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <img src={logo_icon} className='logo' alt="" />
                    <ul>
                        <li>
                            <Link to="/" className='menu-item'>Home</Link>
                        </li>

                        <li>
                            <Link to="/portfolio" className='menu-item'>portfolio</Link>
                        </li>

                        <li>
                            <Link to="/about" className='menu-item'>Skills</Link>
                        </li>

                        <li>
                            <Link to="/contact" className='menu-item'>Contact me</Link>
                        </li>

                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </div>


            {/*  <Routes>
                <Route path="/portfolio/*" element={
                    <Routes>
                        <Route path="/" element={<Portfolio />} />
                        <Route path="/weather" element={<Weather />} />
                        <Route path="/parttime" element={<PartTime />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="zepeto">
                            <Route index element={<ZepetoList />} />
                            <Route path=":id" element={<Zepeto />} />
                        </Route>
                    </Routes>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
        </>
    )
}
