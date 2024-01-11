import React from 'react'
import style from './category.module.scss'

export default function CategorySkill({ tags, activeTags, handleTagClick }) {
    return (
        <div className={style.categorySkill}>
            <ul className={style.categorySkill__list}>
                {tags.map((tag) => (
                    <li
                        key={tag.id}
                        onClick={() => handleTagClick(tag)}
                        style={{ background: tag.color }}
                        className={`${style.tag__item} ${activeTags.some(activeTag => activeTag.id === tag.id) ? style.active : ''}`}
                    >
                        {tag.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

