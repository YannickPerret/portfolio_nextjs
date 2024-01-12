import React from 'react'
import style from './tag.module.scss'

export default function Tag({ tags }) {
    console.log(tags)
    return (
        <ul className={style.tags}>
            {tags.map((tag, index) => (
                <li className={style.tags__item} style={{ background: tag.color }}>#{tag.name}</li>
            ))}
        </ul>
    )
}
