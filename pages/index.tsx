import type { NextPage } from "next";
import Head from "next/head";
import { MainComponent } from "../components/mainComponent";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Portfolio - Arthur Ramos Amaral</title>
				<meta name="description" content="Arthur's, software engineer, portfolio" />
				<meta name="theme-color" content="#4c00ff" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainComponent />
		</>
	);
};

export default Home;
