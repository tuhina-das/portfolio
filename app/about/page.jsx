"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* border-solid border-[5px] border-black */}
      <div className="mx-auto text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text mb-[5vh]">ABOUT ME</h1>
        <div className="flex">
          <Image
            // TODO: style image to have rounded corners + shadow
            src="/assets/images/professionalTuhina.jpg"
            width="400"
            height="400"
            alt="Photo of me in professional attire"
          />
          <p className="text-left p-[5vh] border-solid">
            There are many reasons why childhood is such a magical experience.
            Growing up, I was enchanted by the developing technology surrounding
            me: how it worked, the latest developments, and the beauty of a
            second world that gradually opened up with the evolution of the
            Internet. As I traverse high school, this love for technology has
            evolved into my passion for software development. Inherently an
            artist, I&aposve found my canvas in programming. I've engaged with
            numerous computer science courses at Liberty High School, immersed
            myself in summer workshops at multiple universities, and I'm
            currently furthering my technical education in software development
            as a student in Code2College, a career development organization for
            driven students interested in tech. ​ When I'm not working on a
            program, studying something new, or organizing my space, you can
            find me creating vivid illustrations, playing the piano, or
            wandering through the latest historical fiction novel I've gotten my
            hands on. ​ I'm eager to continue journeying forward and join the
            movement that develops technology for a brighter future.
          </p>
        </div>
      </div>
      <div className="text-center mx-[5vw] py-[10vh] bg-orange-300 bg-opacity-25 rounded-lg">
        <h1 className="text-3xl gradient_text">
          &quotCarpe diem!&quot - unknown
        </h1>
      </div>
    </>
  );
};

export default About;
