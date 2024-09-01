import React from "react";
import Image from "next/image";

const aboutISM = () => {
  return (
    <>
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text my-[3vh]">ABOUT ISM</h1>
        <Image
          src="/assets/images/ism_logo.webp"
          className="mx-auto w-auto h-[400px] rounded-[120%] shadow-2xl shadow-[#5ec7ff]"
          alt="The Liberty High School ISM logo"
          width={350}
          height={400}
        ></Image>
        <p className="text-center p-[5vh] border-solid">
          ISM is a selective course offered in Frisco ISD that stands for
          Independent Study and Mentorship Program and helps students develop
          their professional profiles, speaking and interviewing skills, and
          expand their knowledge on a career. This class allows students to
          explore a topic or field of interest and find a mentor themselves to
          work with over the course of the year to eventually produce a final
          product, based on the knowledge and experience gained. Throughout the
          course, students will be able to grow as both students and
          professionals while being exposed to a professional environment.
        </p>
      </div>
    </>
  );
};

export default aboutISM;
