import { Rating } from '@mui/material'
import React from 'react'
import { IconType } from 'react-icons'
import styles from "./styles.module.scss"


type LanguagesCardProps = {
	fullIcon: IconType,
	halfIcon: IconType,
	language: string,
	color: string,
	ratingValue: number
}

export function LanguagesCard({ fullIcon, halfIcon, language, color, ratingValue }: LanguagesCardProps) {

	const customStyle = {
		"--iconColor": color,

	} as React.CSSProperties

	function returnFullIcon() {
		return (
			<div>
				{React.createElement(fullIcon)}
			</div>
		)
	}

	function returnHalfIcon() {
		return (
			<div>
				{React.createElement(halfIcon)}
			</div>
		)
	}

	return (
		<div className={styles.main} style={customStyle}>
			<div className={styles.language}>
				{React.createElement(fullIcon)}
				<span className={styles.languageName}>{language} </span>
			</div>

			<div className={styles.rating}>
				<span className={styles.ratingText}>skill level:</span>
				<Rating name="read-only" value={ratingValue} precision={0.5} icon={returnFullIcon()} emptyIcon={returnHalfIcon()} max={10} readOnly />
			</div>
		</div>
	)
}
