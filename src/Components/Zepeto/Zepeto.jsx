import React from 'react'
import { Link, useParams } from 'react-router-dom'
export const Zepeto = () => {
    const { id } = useParams()
    return (
        <>
            <h1>Zepeto {id}</h1>
        </>

    )
}
