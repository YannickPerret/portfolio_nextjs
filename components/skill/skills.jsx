'use client'
import React, { useEffect, useRef } from 'react'
import SkillsItem from './skills_item'
import style from '@styles/skill.module.scss'
import { BookOpen } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skillsMap = [
    {
        logo: '/images/skills/html.png',
        title: 'HTML',
        description: 'HyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup LanguageHyperText Markup Language',
        level: '90%',
        color: '#e44d26',
        keyPoints: [
            'HTML5',
            'SEO',
            'Accessibility',
            'Semantic HTML'
        ]
    },
    {
        logo: '/images/skills/css3.png',
        title: 'CSS3',
        description: 'Cascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style SheetsCascading Style Sheets',
        level: '90%',
        color: '#264de4',
        keyPoints: [
            'CSS3',
            'SASS',
            'Bootstrap',
            'Responsive Design',
            'CSS Grid',
            'Flexbox'
        ]
    },
    {
        logo: '/images/skills/javascript.png',
        title: 'JavaScript',
        description: 'JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript ',
        level: '90%',
        color: '#f0db4f',
        keyPoints: [
            'JavaScript',
            'ES6',
            'TypeScript',
            'React',
            'NextJS',
            'NodeJS',
            'Express',
            'MySQL',
            'MongoDB',
            'Git'
        ]
    },
    {
        logo: '/images/skills/javascript.png',
        title: 'React',
        description: 'React React React React React React React React React React React React React React React React React React React ',
        level: '90%',
        color: '#61dbfb',
        keyPoints: [
            'React',
            'NextJS',
            'Redux',
            'React Router',
            'React Hooks',
            'React Context',
            'React Testing Library',
            'Jest'
        ]
    },
    {
        logo: '/images/skills/javascript.png',
        title: 'NextJS',
        description: 'NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS NextJS ',
        level: '90%',
        color: '#000000',
        keyPoints: [
            'NextJS',
            'SSR',
            'Static Generation',
            'Server Side Rendering',
            'API Routes'
        ]
    },
    {
        logo: '/images/skills/nodejs.png',
        title: 'NodeJS',
        description: 'NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS ',
        level: '90%',
        color: '#68a063',
        keyPoints: [
            'NodeJS',
            'Express',
            'MySQL',
            'MongoDB',
            'Git'
        ]
    },
    {
        logo: '/images/skills/mysql.png',
        title: 'MySQL',
        description: 'MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL MySQL ',
        level: '90%',
        color: '#00758f',
        keyPoints: [
            'MySQL',
            'MongoDB',
            'Git'
        ]
    },
    {
        logo: '/images/skills/mysql.png',
        title: 'MongoDB',
        description: 'MongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDBMongoDB MongoDB',
        level: '90%',
        color: '#4ea94b',
        keyPoints: [
            'MongoDB',
            'Git'
        ]
    },
    {
        logo: '/images/skills/nodejs.png',
        title: 'Express',
        description: 'Express Express Express Express Express Express Express Express Express Express Express Express Express Express Express ',
        level: '90%',
        color: '#000000',
        keyPoints: [
            'Express',
            'MySQL',
            'MongoDB',
            'Git'
        ]
    },
    {
        logo: '/images/skills/git.png',
        title: 'Git',
        description: 'Git Git Git Git Git Git Git Git Git Git Git Git Git Git Git Git Git Git Git Git ',
        level: '90%',
        color: '#f34f29',
        keyPoints: [
            'Git',
            'GitHub',
            'GitLab'
        ]
    }
]

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
                {skillsMap.map((skill, index) => (
                    <SkillsItem key={index} {...skill} style={style} />
                ))}
            </div>

        </section >
    )
}
