// import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import { Contacts } from '../contacts'
import { SocialMedias } from '../socialMedias'
import { LanguagesSpoken } from '../languagesSpoken'
import { Alert, Snackbar } from '@mui/material'
import Slide, { SlideProps } from '@mui/material/Slide';


type MeProps = {
	darkMode?: boolean
}

type TransitionProps = Omit<SlideProps, 'direction'>;


function Transition(props: TransitionProps) {
	return <Slide {...props} direction="up" />;
}

export function Me({ darkMode }: MeProps) {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	}

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={`${styles.main} ${darkMode ? styles.dark : null}`}>
			<div className={styles.profilePhoto}>
				<img src="https://github.com/arthur6890.png" alt="Arthur's profile photo" />
			</div>
			<div className={styles.position}>
				<h2>
					Software Engineer
				</h2>
			</div>

			<SocialMedias />
			<Contacts />

			<div className={styles.languagesSpoken}>
				<LanguagesSpoken darkMode={darkMode} progress={100} language="portuguese" proficiency="Native" />
				<LanguagesSpoken darkMode={darkMode} progress={75} language="english" proficiency="advanced" />
				<LanguagesSpoken darkMode={darkMode} progress={5} language="french" proficiency="beginner" />
			</div>

			<Link href={"/docs/CV.pdf"} >
				<a target="_blank" rel="noopener noreferrer" className={`${styles.downloadCv} ${darkMode ? styles.darkCv : null}`} download onClick={handleClick}>
					Download my resume
				</a>
			</Link>

			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={Transition}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant={darkMode ? "standard" : "filled"}>
					Your download will start in a couple of seconds!
				</Alert>
			</Snackbar>
		</div>
	)
}
