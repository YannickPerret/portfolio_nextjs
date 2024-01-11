import Link from "next/link"
import styles from "./contact.module.scss"
import React from "react"

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Contact Us</h2>
                    <p className={styles.description}>
                        Please fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input id="name" placeholder="Enter your name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" placeholder="Enter your phone number" type="tel" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message" />
                    </div>
                    <button>Submit</button>
                </div>
                <div className={styles.linksContainer}>
                    <Link href="#">
                        LinkedIn
                    </Link>
                    <Link href="#">
                        GitHub
                    </Link>
                </div>
            </div>
        </section>
    )
}