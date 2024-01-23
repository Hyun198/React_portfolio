import React from 'react'
import '../Home/Home.css'
import html_icon from './Assets/html.png'
import javascript_icon from './Assets/js.png'
import css_icon from './Assets/css.png'
import react_icon from './Assets/react.png'
import profile from './Assets/profile.jpg'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <>
            <section className='home-container'>
                <div className='home-content'>
                    <h2>It's Time to fly</h2>
                    <p>
                        <span>Passionate FrontEnd Devleoper </span> <br />
                        Transforming iDeas into Semaless Visually Stunning Web Solutions
                    </p>
                </div>
                <div className='home-img'>
                    <div>
                        <img src={profile} alt="" className="profile" />
                    </div>

                    <div>
                        <div className='tech-icon'>
                            <img src={react_icon} alt="" className="" />
                        </div>
                        <div className='tech-icon'>
                            <img src={html_icon} alt="" className="" />
                        </div>
                        <div className='tech-icon'>
                            <img src={javascript_icon} alt="" className="" />
                        </div>
                        <div className='tech-icon'>
                            <img src={css_icon} alt="" className="" />
                        </div>
                    </div>
                </div>
            </section>
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}

