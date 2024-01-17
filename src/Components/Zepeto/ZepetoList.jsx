import React from 'react'
import { Link } from 'react-router-dom'
export const ZepetoList = () => {

    return (
        <>
            <h1>Zepeto</h1>

            <Link to="/zepeto/1">Zepeto 1</Link>
            <br />
            <Link to="/zepeto/2">Zepeto 2</Link>
            <br />

        </>
    )
}
