import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <>
            <div>Portfolio</div>
            <ul>
                <li><Link to='weather'>Weather</Link></li>
                <li><Link to='shop'>Shop</Link></li>
                <li><Link to='parttime'>Parttime</Link></li >
                <li><Link to='zepeto'>Zepeto</Link></li >
            </ul>
        </>
    )
}


