import React from 'react'

export default function Stars({ number = 10, style }) {
    return (
        <div className={style.hero__stars}>
            {Array.from({ length: number }).map((star, index) => (
                <div className={style.hero__star} key={index}></div>
            ))}
        </div>
    )
}
