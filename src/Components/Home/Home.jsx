import React from 'react'
import '../Home/Home.css'
import html_icon from './Assets/html.png'
import javascript_icon from './Assets/js.png'
import css_icon from './Assets/css.png'


export default function Home() {
    return (
        <section className='home-container'>
            <div className='home-content'>
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate FrontEnd Devleoper | Transforming iDeas into Semaless Visually Stunning Web Solutions
                </p>
            </div>
            <div className='home-img'>
                <div>
                    <div className='tech-icon'>
                        <img src={html_icon} alt="" className="" />
                        <img src={javascript_icon} alt="" className="" />
                        <img src={css_icon} alt="" className="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

