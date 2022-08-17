import React from 'react'
import styles from "./styles.module.scss"

type AboutMeProps = {
	darkMode: boolean
}

export function AboutMe({ darkMode }: AboutMeProps) {
	return (
		<div className={`${styles.main} ${darkMode ? styles.dark : null}`}>
			<h2>teste</h2>


		</div>
	)
}
