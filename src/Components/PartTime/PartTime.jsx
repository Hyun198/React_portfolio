import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'

export default function PartTime() {

    const [startTime, setStartTime] = useState('');
    const inputRef = useRef();

    const handleTime = (part) => {
        const inputValue = inputRef.current.value;
        if (inputValue) {
            const subtractedTime = moment(inputValue, 'HH:mm:ss').subtract(part, 'hours');
            const formattedTime = subtractedTime.format('HH:mm:ss');
            setStartTime(formattedTime);
        }
    }
    useEffect(() => {

    }, [inputRef.current])



    return (
        <>
            <h1>PartTime</h1>
            <div className="input-field">
                <input ref={inputRef} type="text" placeholder='시간을 입력하세요' />
                <br></br>
                <button onClick={() => handleTime(7)}>7 hour</button>
                <button onClick={() => handleTime(7.5)}>7.5 hour</button>
            </div>

            <p>계산된 시간: {startTime}</p>

        </>
    )
}
