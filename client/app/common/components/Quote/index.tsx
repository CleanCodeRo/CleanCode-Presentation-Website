'use client';

import React from "react";
import { TITLE, CONTENT, BUTTON } from "@constants/quote";
import CallToAction from "../CallToAction";

const Quote = () => {
  return (
    <CallToAction
      title={TITLE}
      content={CONTENT}
      buttonText={BUTTON}
      buttonLink={"/share-ideas"}
    />
  );
};

export default Quote;
