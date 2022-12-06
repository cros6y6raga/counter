import React from "react";
import s from './Button.module.css'

type PropsType = {
    title: string,
    disabled: boolean
    click: () => void
}

export const Button = ({click, title, disabled}: PropsType) => {
    return (
        <button className={s.buttons} onClick={click} disabled={disabled}>{title}</button>
    )
}