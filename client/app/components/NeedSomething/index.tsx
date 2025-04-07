'use client';

import React from "react";
import { TITLE, SUBTITLE, CONTENT } from "@constants/needSomething";
import CallToAction from "@components/CallToAction";

const NeedSomething = () => {
  return (
    <CallToAction 
      title={TITLE} 
      subtitle={SUBTITLE} 
      content={CONTENT} 
      buttonText="JUST CONTACT US" 
    />
  );
};

export default NeedSomething;