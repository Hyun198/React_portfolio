import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

export default function Contact() {
    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>

            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        infoUrl="../images/mail.svg"
                        text="hwn123@naver.com"
                    />
                    <ContactInfoCard
                        infoUrl="../images/github-mark.svg"
                        text="https://github.com/Hyun198"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm


                    />


                </div>
            </div>
        </section>
    )
}
