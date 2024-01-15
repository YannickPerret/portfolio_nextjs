'use client'
import React, { useEffect, useRef } from 'react'
import SkillsItem from './skills_item'
import style from '@styles/skill.module.scss'
import { BookOpen } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import skills from '../../dataset/skills.mjs'


export default function Skills() {
    const skillsRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        gsap.fromTo(skillsRefs.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0, // Se déplace vers sa position originale
                duration: 2,
                scrollTrigger: {
                    trigger: skillsRefs.current,
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none"
                }
            }
        );

    }, []);


    return (
        <section className={style.skills} ref={skillsRefs}>
            <header className={style.skills__header}>
                <h2><BookOpen /> Skills</h2>
            </header>
            <div className={style.skills__container}>
                {skills.map((skill, index) => (
                    <SkillsItem key={index} {...skill} style={style} />
                ))}
            </div>

        </section >
    )
}
