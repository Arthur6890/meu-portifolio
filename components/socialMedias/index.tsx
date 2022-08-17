import Link from 'next/link'
import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"
import styles from "./styles.module.scss"

export function SocialMedias() {
	return (
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
	)
}
