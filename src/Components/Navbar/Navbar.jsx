import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../../pages/About';

import Portfolio from '../../pages/Portfolio/Portfolio';
import Weather from '../../Components/Weather/Weather';
import Shop from '../../Components/Shop/Shop';
import PartTime from '../../Components/PartTime/PartTime';
import ZepetoList from '../../Components/Zepeto/ZepetoList';
import Zepeto from '../../Components/Zepeto/Zepeto';
import '../Navbar/Navbar.css'

import logo_icon from './Assets/logo.jpg'
import MobileNav from './MobileNav/MobileNav';

export default function Navbar() {

    const [openMenu, setOpenmenu] = useState(false);

    const toggleMenu = () => {
        setOpenmenu(!openMenu);
    };


    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className='logo' src={logo_icon} />
                    <ul>
                        <li>
                            <Link to="/" className='menu-item'>Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className='menu-item'>portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about" className='menu-item'>About</Link>
                        </li>

                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>


            <Routes>
                <Route path="/" element={<Home />} />
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
            </Routes>
        </>
    )
}
