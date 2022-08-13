import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProfilePhoto from "https://github.com/arthur6890.png"
import styles from "./styles.module.scss"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

type MeProps = {
	darkMode?: boolean
}

export function Me({ darkMode }: MeProps) {
	return (
		<div className={`${styles.main} ${darkMode ? styles.dark : null}`}>
			<div className={styles.profilePhoto}>
				<img src="https://github.com/arthur6890.png" alt="Arthur's profile photo" />
			</div>
			<div className={styles.position}>
				<h2>
					Software Engineer
				</h2>
			</div>

			<div className={styles.socialMedias}>
				<Link href={"https://www.linkedin.com/in/arthur-ramos-b09093177/"}>
					<a target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
						<BsLinkedin />
					</a>
				</Link>

				<Link href={"https://www.instagram.com/arthur_ramos_1/"}>
					<a target="_blank" rel="noopener noreferrer" className={styles.instagram}>
						<BsInstagram />
					</a>
				</Link>

				<Link href={"https://github.com/arthur6890"}>
					<a target="_blank" rel="noopener noreferrer" className={styles.github}>
						<BsGithub />
					</a>
				</Link>
			</div>
		</div>
	)
}
