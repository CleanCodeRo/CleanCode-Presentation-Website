"use client";

import React from "react";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import style from "@components/Contact/style.module.scss";
import ProjectForm from "@components/ProjectForm";
const ShareIdeas = () => {
  return (
    <>
      <Head>
        <title>Share Ideas</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, support, or more information about our services."
        />
      </Head>
      <Navbar />
      <section className={style.contactComponent}>
        <div className={style.TitleAndDescription}>
          <div className={style.contactTitle}>
            Don’t wait -{" "}
            <span className={style.highlight}>share your ideas with us.</span>
          </div>
          <div className={style.contactDescription}>
            Connect now to explore innovative software solutions and take the
            first step towards making your dream project a success!
          </div>
        </div>
        <div className={style.contactSubComponent}>
          <div className={style.contactForm}></div>
          <ProjectForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShareIdeas;
