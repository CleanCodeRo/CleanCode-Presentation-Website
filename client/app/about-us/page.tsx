"use client";

import Head from "next/head";
import OurProcess from "@components/OurProcess";
import MissionVision from "@components/MissionVision";
import AboutUsHero from "@components/AboutUsHero";
import WeBelieve from "@components/WeBelieve";


const AboutUs = () => {

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta
                    name="description"
                    content="Learn more about our company and values."
                />
            </Head>
            <AboutUsHero/>
            <OurProcess/>
            <MissionVision/>
            <WeBelieve/>
        </>
    );
};

export default AboutUs;
