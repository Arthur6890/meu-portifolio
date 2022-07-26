import type { NextPage } from "next";
import Head from "next/head";
import { MainComponent } from "../components/mainComponent";
import { MyProfile } from "../components/myProfile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portifólio - Arthur Ramos Amaral</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainComponent />
    </>
  );
};

export default Home;
