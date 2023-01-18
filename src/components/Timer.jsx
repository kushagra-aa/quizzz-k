import React from 'react'

const Timer = ({ timeString }) => {

    return (
        <div className='timer-box'>
            Time Remaining:
            <span>
                {timeString}
            </span>
        </div>
    )
}

export default Timer