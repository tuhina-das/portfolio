"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div classnName="mx-auto text-center max-w-5xl my-[30vh] px-3">
      <Image
        src="/assets/images/professionalTuhina.jpg"
        width="300"
        height="300"
      />
    </div>
  );
};

export default About;
