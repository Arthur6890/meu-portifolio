import React from 'react'
import { LanguagesCard } from '../languagesCard'
import styles from "./styles.module.scss"
import { data } from "../languagesCard/data"
import { MyProjects } from '../myProjects'

type AboutMeProps = {
	darkMode: boolean
}

export function AboutMe({ darkMode }: AboutMeProps) {

	const customStyleAboutMe = {
		"--clr": darkMode ? "#7100c7" : "#00ffff",
		"--accordionBackground": darkMode ? "#161616" : "#555555",
		"--accordionHeaderBackground": darkMode ? "#242424" : "#2b2b2b",
		// "--accordionHeaderBackground": darkMode ? "aqua" : "green",
		"--accordionContentBackground": darkMode ? "#1a1a1a" : "#303030",
		"--titleAfter": darkMode ? "yellow" : "aqua",


	} as React.CSSProperties

	return (
		<div className={`${styles.main} ${darkMode ? styles.dark : null}`} style={customStyleAboutMe}>
			<div className={styles.aboutMe}>
				<h2>
					About me
				</h2>
				<h4>
					{"	Hi! My name is Arthur, I'm 21 years old and I'm a student of Information Systems at UFMG. I've always been a person who fights for his dreams and doesn't give up easily, because as the son of a black woman, I grew up with my mother as an inspiration in the fight for my space in society and the world. As my resume says, I am an extremely calm person, easy to get along with, and very open-minded, who is always looking for new challenges and opportunities, who is always looking for personal and professional growth, and who never stops dreaming. Well, this is me, a simple, dreamy boy looking for his place among the greats!"}

				</h4>

				<h2>
					{"Languages & frameworks"}
				</h2>

				<div className={styles.languagesGrid}>
					{data.map((item, index) => (
						<LanguagesCard fullIcon={item.fullIcon} color={item.color} language={item.language} ratingValue={item.ratingValue} key={index} />
					))}
				</div>
			</div>

			<MyProjects />

		</div>
	)
}
