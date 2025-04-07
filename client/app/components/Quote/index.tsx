'use client';

import React from "react";
import { TITLE, CONTENT, BUTTON } from "@constants/quote";
import CallToAction from "@components/CallToAction";

const Quote = () => {
  return (
    <CallToAction 
      title={TITLE} 
      content={CONTENT} 
      buttonText={BUTTON} 
    />
  );
};

export default Quote;
