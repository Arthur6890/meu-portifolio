import React, { useState } from "react";
import { Me } from "../me";
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
				<Title darkMode={darkMode} />
				<div className={styles.flexBoxDiv}>
					<Me darkMode={darkMode} />
				</div>
			</div>
			<button onClick={() => handleDarkMode()}>clica</button>
		</div>
	);
}
