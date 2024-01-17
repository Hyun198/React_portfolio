import React from 'react'
import { useParams } from 'react-router-dom'

export default function Zepeto() {
    const { id } = useParams()
    return (
        <>
            <h1>Zepeto {id}</h1>
        </>

    )
}
