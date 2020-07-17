import React from 'react'
import './Display.css'

interface Display
{
    value: number | string
}

export default (props: Display) =>
{
    return (
        <div className="display">
            {props.value}
        </div>
    )
}
