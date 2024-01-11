import Link from 'next/link'
import React from 'react'
import Tag from './category/tag'
import Image from 'next/image'

export default function Project({ project, style }) {
    return (
        <article className={style.projects__item}>
            <Link href={`/project/${project.slug}`} alt={project.title}>
                <div className={style.projects__body}>
                    <div className={style.projects__item__header}>
                        <Image src={project.image} alt={project.title} width={500} height={300} className={style.projects__item__header__image} />
                        <h3 className={style.projects__item__header__title}>{project.title}</h3>
                    </div>

                    <p className={style.projects__item__body}>{project.description}</p>

                </div>
                <footer className={style.projects__footer}>
                    <ul className={style.tags}>
                        {project.tags.filter((tag, index) => index < 7)
                            .map((tag, index) => (
                                <Tag tag={tag} key={index} style={style} />
                            ))}
                    </ul>
                </footer>
            </Link>
        </ article>
    )
}
{
    /*
    <div className={style.projects__item__link}>
                        <Link href={project.liveLink} target="_blank">Live Demo</Link>&nbsp;|&nbsp;
                        <Link href={project.github} target="_blank">GitHub</Link>
                    </div>
                    */
}