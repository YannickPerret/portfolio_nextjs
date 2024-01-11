'use client';
import React, { useRef, useState } from 'react'
import Project from './project'
import style from '@styles/projects.module.scss'
import CategorySkill from './category/category'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ProjectsClient({ projects, tags }) {
    const [activeTag, setActiveTag] = useState([])
    const projectRef = useRef(null);

    const handleSelectedTag = (selectedTag) => {
        if (activeTag.some(tag => tag.id === selectedTag.id)) {
            setActiveTag(activeTag.filter(tag => tag.id !== selectedTag.id));
        } else {
            setActiveTag([...activeTag, selectedTag]);
        }
    }
    const filteredProjects = projects.filter(project =>
        activeTag.length === 0 ||
        activeTag.some(active => project.tags.some(projectTag => projectTag.id === active.id))
    );
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(projectRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);


    return (
        <section className={style.projects} ref={projectRef}>
            <div className={style.projects__container}>
                <header className={style.projects__header}>
                    <h2>Projects</h2>
                </header>
                <CategorySkill tags={tags} activeTags={activeTag} handleTagClick={handleSelectedTag} />

                <div className={style.projects__content}>
                    {filteredProjects.map((project, index) => (
                        <Project project={project} key={index} style={style} />
                    ))}
                </div>

            </div>
        </section>
    );
}

