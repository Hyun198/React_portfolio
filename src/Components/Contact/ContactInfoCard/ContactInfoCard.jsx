import React from 'react'
import './ContactInfoCard.css'
export default function ContactInfoCard({ infoUrl, text }) {
    return (
        <div className='contact-details-card'>
            <div className="icon">
                <img src={infoUrl} alt={text} />
            </div>

            <p>{text}</p>
        </div>
    )
}
