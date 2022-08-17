import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons'
import styles from "./styles.module.scss"

type CardProps = {
	icon: IconType,
	cardName: string,
	cardContent: string;
	href: string
	color?: 'green' | 'red' | 'blue';
}


export function Card({ icon, cardName, cardContent, href, color = "green" }: CardProps) {
	return (
		<Link href={href}>
			<div className={styles.main}>
				<div className={`${styles.icon} ${styles[color]}`}>
					{React.createElement(icon)}
				</div>
				<div className={styles.texts}>
					<p className={styles.cardName}>{cardName} </p>
					<p className={styles.cardContent}>{cardContent} </p>
				</div>
			</div>
		</Link>
	)
}
