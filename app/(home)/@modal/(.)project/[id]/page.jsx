import Modal from '@/components/modal/Modal'
import React from 'react'
import projectData from '@/dataset/projects.mjs'
import { useRouter } from 'next/navigation'

export default async function page({ params }) {
    console.log("dlfnskjnfksbj")
    const { id } = params
    const project = projectData.find(project => project.slug === id)
    const router = useRouter()
    return (
        <Modal onChange={() => { router.back() }}>
            <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
        </Modal>
    )
}
