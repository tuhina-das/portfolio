"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* border-solid border-[5px] border-black */}
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text mb-[5vh]">ABOUT ME</h1>
        <div className="lg:flex items-center mx-[2vh]">
          <Image
            // TODO: style image to have rounded corners + shadow
            src="/assets/images/professionalTuhina.jpg"
            className="mx-auto w-auto h-[400px] rounded-lg shadow-2xl shadow-[#5ec7ff]"
            alt="Me in a professional suit"
            width={350}
            height={400}
          />
          <p className="lg:text-left md-sm:text-center p-[5vh] border-solid">
            There are many reasons why childhood is such a magical experience.
            Growing up, I was enchanted by the developing technology surrounding
            me: how it worked, the latest developments, and the beauty of a
            second world that gradually opened up with the evolution of the
            Internet. As I traverse high school, this love for technology has
            evolved into my passion for software development. Inherently an
            artist, I&apos;ve found my canvas in programming. I&apos;ve engaged
            with numerous computer science courses at Liberty High School,
            immersed myself in summer workshops at multiple universities, and
            I&apos;m currently furthering my technical education in software
            development as a student in Code2College, a career development
            organization for driven students interested in tech. ​ When I&apos;m
            not working on a program, studying something new, or organizing my
            space, you can find me creating vivid illustrations, playing the
            piano, or wandering through the latest historical fiction novel
            I&apos;ve gotten my hands on. ​ I&apos;m eager to continue
            journeying forward and join the movement that develops technology
            for a brighter future.
          </p>
        </div>
        <div className="w-[15vw] flex justify-between">
          <Link href="mailto:tuhinakdas@gmail.com" target="_blank">
            <MdEmail
              style={{
                fontSize: "3vh",
              }}
            />
          </Link>
          <Link href="linkedin.com/in/tuhina-k-das" target="_blank">
            <FaLinkedinIn
              style={{
                fontSize: "3vh",
              }}
            />
          </Link>
          <p>Resume</p>
        </div>
      </div>
      <div className="text-center mx-[5vw] p-[10vh] bg-orange-300 bg-opacity-25 rounded-lg">
        <h1 className="text-3xl font-semibold">
          I aspire to{" "}
          <p className="text-3xl gradient_text">pioneer tech solutions</p> that
          address today&apos;s mental health and educational challenges,
          <p className="text-3xl gradient_text">
            shaping a brighter and more equitable tomorrow.
          </p>
        </h1>
      </div>
    </>
  );
};

export default About;
