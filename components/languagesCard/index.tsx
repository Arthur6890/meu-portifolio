import { Rating } from '@mui/material'
import React from 'react'
import { IconType } from 'react-icons'
import styles from "./styles.module.scss"


type LanguagesCardProps = {
	fullIcon: IconType,
	language: string,
	color: string,
	ratingValue: number
}

export function LanguagesCard({ fullIcon, language, color, ratingValue }: LanguagesCardProps) {

	const customStyleLanguageCard = {
		"--iconColor": color,

	} as React.CSSProperties

	function returnFullIcon() {
		return (
			<div>
				{React.createElement(fullIcon)}
			</div>
		)
	}

	return (
		<div className={styles.main} style={customStyleLanguageCard}>
			<div className={styles.language}>
				{React.createElement(fullIcon)}
				<span className={styles.languageName}>{language} </span>
			</div>

			<div className={styles.rating}>
				<span className={styles.ratingText}>skill level: (1-10)</span>
				<Rating name="read-only" value={ratingValue} precision={1} icon={returnFullIcon()} max={ratingValue} readOnly />
				<span className={styles.ratingText}>{ratingValue}</span>
			</div>
		</div>
	)
}
