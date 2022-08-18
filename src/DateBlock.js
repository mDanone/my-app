import "./DateBlock.css"

import { useEffect, useState } from 'react';


function DateBlock(){

    let [date, setDate] = useState(new Date())
    
    // Set current time
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanupt(){
            clearInterval(timer)
        }
    })
    
    // Show current time
    return (
        <div className="output-time-container">
            <p className="time-output">{date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateBlock