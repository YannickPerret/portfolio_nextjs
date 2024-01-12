import Modal from '@/components/modal/Modal'
import React from 'react'
import ProjectModal from './ProjectModal'
import { getProject } from '@/query/projects.query'

export default async function Page({ params }) {
    const project = await getProject(params.id)

    return (
        <ProjectModal project={project} />
    )
}
