import React from 'react'
import './Button.css'

interface Button
{
    label: string,
    click: Function,
    double?: boolean,
    triple?: boolean,
    operation?: boolean
}

export default (props: Button) =>
    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}
        onClick={e => props.click(props.label)}>
        {props.label}
    </button>
