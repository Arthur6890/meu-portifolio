import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"

type LanguagesSpokenProps = {
	darkMode?: boolean
	progress: number
	language: string
	proficiency: string
}

export function LanguagesSpoken({ darkMode, progress, language, proficiency }: LanguagesSpokenProps) {

	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		darkMode ? setIsDark(true) : setIsDark(false)
	}, [darkMode])


	const customStyle = {
		"--num": progress,
		"--mainCircle": isDark ? "#7100c7" : "#00ffff",
		"--backCircle": isDark ? "#222222" : "#3f3f3f",

	} as React.CSSProperties

	return (
		<div className={styles.percent} style={customStyle}>
			<Box sx={{ position: 'relative', display: 'inline-flex' }}>

				<CircularProgress variant="determinate" value={progress} className={styles.circle} />
				<CircularProgress variant="determinate" value={100} className={`${styles.circle} ${styles.circleBackground}`} />
				<Box className={styles.number} sx={{
					top: 30,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					flexDirection: "column",
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<h2>{progress}<span>%</span></h2>
					<p>{language} </p>
					<span className={styles.proficiency}>{proficiency} </span>
				</Box>
			</Box>
		</div>

	)
}
