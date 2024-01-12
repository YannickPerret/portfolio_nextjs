'use client';
import React from 'react'
import { useRouter } from "next/navigation";
import style from './modal.module.scss'


export default function Modal({ onChange, children }) {
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                <button onClick={onChange} className={style.modal__close}>X</button>

                {children}
            </div>
        </div>
    )
}
