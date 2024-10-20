import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaArrowUpLong } from "react-icons/fa6";

const Mentor = () => {
  return (
    <>
      <title>Mentor</title>
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text my-[3vh]">MY MENTOR</h1>
        <Image
          src="/assets/images/kyle.png"
          className="mx-auto w-auto h-[400px] rounded-lg shadow-2xl shadow-[#5ec7ff]"
          alt="The Liberty High School ISM logo"
          width={350}
          height={400}
        ></Image>
        <h2 className="text-center p-[5vh] border-solid">
          Kyle currently works at Apple as a Frontend Software Engineer in
          Sunnyvale, California where he specializes in web development
          technologies. He graduated from UCLA in 2021 majoring in Applied
          Mathematics with a Computing Specialization. In his free time, Kyle
          volunteers with Code2College as an instructor, teaching high school
          students the same concepts he applies in his day-to-day. He also
          enjoys running, hiking, and anything else outdoor and fitness related.
        </h2>
      </div>
    </>
  );
};

export default Mentor;
