'use client'
import Modal from '@/components/modal/Modal'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/projectModal.module.scss'
import { Github, ExternalLink } from 'lucide-react'
import Tag from '@/components/tags/tag'
import Link from 'next/link'


export default function ProjectModal({ project }) {
    const router = useRouter()
    return (
        <Modal onChange={() => { router.back() }}>
            <div className={styles.projectModal}>
                <div className={styles.left}>
                    <div className={styles.header}>
                        <h2 className={styles.projectTitle}>Project Presentation</h2>
                    </div>
                    <div className={styles.grid}>
                        <img
                            alt="Project Image"
                            className={styles.projectImage}
                            height={500}
                            src="https://picsum.photos/500/600"
                            width={600}
                        />

                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.textSection}>
                        <h3>{project.title}</h3>
                        <p className={styles.textSection__description}>
                            {project.description}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos nesciunt, ullam, veniam unde maiores corrupti harum architecto natus deleniti totam. Vitae doloribus non, optio sit quia ab aliquam odit.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet voluptate, sequi ducimus vitae optio odio culpa laboriosam, esse explicabo itaque dolorum numquam molestiae ratione aliquam dolore natus obcaecati iure?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam, animi libero ab, nam cupiditate eius aliquam rem fugiat voluptatum quis laborum culpa. Eos numquam quia laboriosam optio rem quaerat.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quia numquam, a deleniti, itaque dolore illo sint hic aliquam explicabo harum, voluptatum earum quos ab vero ad molestiae quo nihil!
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem vitae, sit delectus illum, fugit voluptatum accusantium incidunt molestias aliquam, magnam ipsam neque quas asperiores nostrum nam repudiandae cupiditate animi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque excepturi aliquam distinctio maxime, saepe hic tenetur necessitatibus eos voluptas omnis obcaecati laboriosam officiis, sed debitis, provident atque voluptate quasi?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam voluptatibus explicabo nostrum dolorem molestiae quos totam enim voluptates accusamus similique quam tenetur voluptatem repellendus, vero quibusdam facilis accusantium reiciendis!
                        </p>
                        <div className={styles.links}>
                            <Link href="#">
                                <Github size={25} />
                                Github
                            </Link>
                            <Link href="#">
                                <ExternalLink size={25} />
                                Website
                            </Link>
                        </div>
                    </div>
                    <div className={styles.divider}>
                        <div className={styles.tags}>
                            <Tag tags={project.tags} />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
