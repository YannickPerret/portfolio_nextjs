'use client'
import React from 'react'
import { MoveUp } from 'lucide-react'
import style from './moveUp.module.scss'
import { useState, useEffect } from 'react'
export default function UpArrow() {
    //set visiblity to 1 when scroll after 15% of the page
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 0.90 * window.innerHeight) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const handleUpArrow = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (!visible) {
        return null
    }
    else {
        return (
            <div className={style.moveUp} onClick={handleUpArrow}>
                <MoveUp size={30} />
            </div>
        )
    }

}
