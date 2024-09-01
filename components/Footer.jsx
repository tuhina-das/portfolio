"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Foot = () => {
  return (
    <>
      {/* border-solid border-black border-50px nav_options_text relative bottom-0 w-full mx-auto justify-between min-h-[5vh] rounded-lg h-fit mt-[15vh] p-[2vh] bg-white */}
      <footer className="flex flex-col items-center text-center nav_options_text relative bottom-0 w-full mx-auto min-h-[5vh] h-fit p-[2vh] bg-white">
        <div className="w-[15vw] flex justify-between py-[2vh]">
          <Link href="mailto:tuhinakdas@gmail.com" target="_blank">
            <MdEmail
              style={{
                fontSize: "3vh",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/tuhina-k-das" target="_blank">
            <FaLinkedinIn
              style={{
                fontSize: "3vh",
              }}
            />
          </Link>
          <Link href="https://www.github.com/tuhina-das" target="_blank">
            <FaGithub
              style={{
                fontSize: "3vh",
              }}
            />
          </Link>
        </div>
        <p>©2024 by Tuhina Das.</p>
      </footer>
    </>
  );
};

export default Foot;
