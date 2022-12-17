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
		<>
			<h2 className={styles.title}>
				my main projects
			</h2>
			<h3 className={styles.subTitle}>
				All the source codes are available on my
				<Link href={"https://github.com/Arthur6890"}>
					<a target="_blank">
						Github Account
					</a>
				</Link>
			</h3>
			<span className={styles.exception}> (except for the Flash Website which why is explained on the respective card)</span>



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
							<div className={styles.technologyUsed}>
								<span className={styles.technologyUsedTitle}>
									Languages/Frameworks:
								</span>
								<span className={styles.technologyName}>
									{item.technologyUsed}
								</span>
							</div>
						</div>

					</AccordionDetails>
				</Accordion>
			))}
		</>
	)
}
