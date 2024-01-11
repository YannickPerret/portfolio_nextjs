import React from 'react'

export default function Tag({ tag, style }) {
    return (
        <li className={style.tags__item} style={{ background: tag.color }}>#{tag.name}</li>
    )
}
