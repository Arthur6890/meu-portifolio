import React from 'react'
import { Card } from './card'
import { AiOutlinePhone, AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai"
import { hrefsContent } from './hrefs'
import styles from "./styles.module.scss"

export function Contacts() {
	return (
		<div className={styles.main}>
			<Card icon={AiOutlinePhone} cardName='Phone' cardContent='+55 (31) 99610-3374' href={hrefsContent[0].tel} />
			<Card icon={AiOutlineMail} cardName='E-mail' cardContent='arthur.ramos.amaral@hotmail.com' href={hrefsContent[0].email} color='blue' />
			<Card icon={AiOutlineEnvironment} cardName='City' cardContent='Belo Horizonte, Minas Gerais, Brazil' href={hrefsContent[0].maps} color='red' />
		</div>
	)
}
