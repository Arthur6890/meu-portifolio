import React, { useState } from "react";
import { AboutMe } from "../aboutMe";
import { Me } from "../me";
import { SwitchButton } from "../switchButton";
import { Title } from "../title";
import styles from "./styles.module.scss";


export function MainComponent() {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={`${styles.main} ${darkMode ? styles.darkMode : ""}`}>
			<div className={styles.container}>
				<div className={styles.header}>
					<Title darkMode={darkMode} />
					<SwitchButton onClick={handleDarkMode} darkMode={darkMode} />
				</div>
				<div className={styles.flexBoxDiv}>
					<Me darkMode={darkMode} />
					<AboutMe darkMode={darkMode} />
				</div>

			</div>
		</div>
	);
}
