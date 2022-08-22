import React from 'react'
import { styled } from '@mui/material/styles';
import { BsSunFill, BsMoonStars } from "react-icons/bs"
import Switch from '@mui/material/Switch';
import styles from "./styles.module.scss"

type SwitchButtonProps = {
	darkMode: boolean
	onClick?(): void
}

const MaterialUISwitch = styled(Switch)(({ darkMode }: SwitchButtonProps) => ({
	width: 42,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(16px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: darkMode ? '#ffffff' : '#ffffff',
				opacity: 1,
				border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#ffffff',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color:
				darkMode
					? "#ffffff"
					: "#ffffff"
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: darkMode ? 0.7 : 0.3,
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		background: darkMode ? 'linear-gradient(90deg, #00aed9 0%, #47007a 100%);' : 'linear-gradient(90deg, #ffc000 0%, #ff8c6a 50%, #fb7ac2 100%);',
		opacity: 1,
		transition: "all 0.3s"
	},
}));



export function SwitchButton({ onClick, darkMode }: SwitchButtonProps) {

	const customStyle = {
		"--sunVisibility": darkMode ? "hidden" : "visible",
		"--moonVisibility": darkMode ? "visible" : "hidden",

	} as React.CSSProperties

	return (
		<div className={styles.wrapper} style={customStyle}>
			<BsMoonStars className={`${styles.moon} ${darkMode ? styles.active : null}`} />
			<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={onClick} darkMode={darkMode}
			/>
			<BsSunFill className={`${styles.sun} ${darkMode ? null : styles.active}`} />
		</div>
	)
}
