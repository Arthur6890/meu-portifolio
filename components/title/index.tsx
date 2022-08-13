import React from "react";
import styles from "./styles.module.scss";

type TitleProps = {
	darkMode?: boolean;
};

export function Title({ darkMode }: TitleProps) {
	return <div className={`${styles.main} ${darkMode ? styles.dark : null}`}>
		<h2 className={`${styles.name} ${darkMode ? styles.darkText : null}`}>Arthur P. Ramos Amaral</h2>
	</div>;
}
