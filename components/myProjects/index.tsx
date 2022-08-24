import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styles from "./styles.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineExternalLink } from "react-icons/hi"
import { AccordionData } from "./accordionData"

export function MyProjects() {
	return (
		<div>

			<h2 className={styles.title}>
				my main projects
			</h2>

			{AccordionData.map((item, index) => (
				<Accordion className={styles.accordion} key={index}>
					<AccordionSummary aria-controls="panel1a-content"
						id={index.toString()}
						className={styles.accordionHeader}>
						<span>
							{item.title} <Link href={item.link}>
								<a target="_blank" rel="noopener noreferrer">
									<HiOutlineExternalLink />
								</a>
							</Link>
						</span>
					</AccordionSummary>

					<AccordionDetails className={styles.accordionContent}>

						<div className={styles.accordionContentDiv}>
							<div className={styles.brand}>
								<Image src={item.brand} alt="logo" />
							</div>
							<span className={styles.accordionContentText}>
								{item.content}
							</span>
						</div>

					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}
