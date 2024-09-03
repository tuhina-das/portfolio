import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaArrowUpLong } from "react-icons/fa6";

const Mentor = () => {
  return (
    <>
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text my-[3vh]">MENTOR</h1>
        <CgProfile
          style={{
            fontSize: "20vh",
            color: "#4c69d5",
          }}
        ></CgProfile>
        <FaArrowUpLong
          style={{
            fontSize: "4vh",
            color: "#8d62e0",
            marginTop: "2vh",
          }}
        ></FaArrowUpLong>
        <h1 className="text-4xl gradient_text mt-[1vh]">THIS COULD BE YOU!</h1>
        <h2 className="text-center p-[5vh] border-solid">
          Interested in working with me? Feel free to reach out to me via my
          email (tuhinakdas@gmail.com) or LinkedIn!
        </h2>
      </div>
    </>
  );
};

export default Mentor;
