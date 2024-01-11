import React from 'react'
import ProjectsClient from './projectsClient'
import { getProjects } from '@/query/projects.query'
import { getTags } from '@/query/tags.query'


export default async function Projects() {
    const projects = await getProjects()
    const tags = await getTags()

    return (
        <ProjectsClient projects={projects} tags={tags} />
    )
}

