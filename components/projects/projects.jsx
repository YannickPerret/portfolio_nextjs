import React from 'react'
import Project from './project'
import style from '@styles/projects.module.scss'

export default function Projects() {

    const projects = [
        {
            title: 'Prffdfdfdf',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in.',
            image: '/images/projects/project1.png',
            link: 'https://www.google.com',
            github: 'https://www.google.com',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Prffdfdfdf',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in.',
            image: '/images/projects/project1.png',
            link: 'https://www.google.com',
            github: 'https://www.google.com',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Prffdfdfdf',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in.',
            image: '/images/projects/project1.png',
            link: 'https://www.google.com',
            github: 'https://www.google.com',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Prffdfdfdf',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in.',
            image: '/images/projects/project1.png',
            link: 'https://www.google.com',
            github: 'https://www.google.com',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Prffdfdfdf',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in.',
            image: '/images/projects/project1.png',
            link: 'https://www.google.com',
            github: 'https://www.google.com',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
    ]


    return (
        <section className={style.projects}>
            <div className={style.projects__container}>
                <header className={style.projects__header}>
                    <h3>Projects</h3>
                </header>

                <div className={style.projects__content}>
                    {projects.map((project, index) => (
                        <Project project={project} key={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}
