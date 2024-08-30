"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Foot = () => {
  return (
    <>
      {/* border-solid border-black border-50px nav_options_text relative bottom-0 w-full mx-auto justify-between min-h-[5vh] rounded-lg h-fit mt-[15vh] p-[2vh] bg-white */}
      <footer className="text-center nav_options_text relative bottom-0 w-full mx-auto min-h-[5vh] h-fit mt-[15vh] p-[2vh] bg-white">
        <p>Contact me:</p>
        <p>tuhinakdas@gmail.com</p>
        <div>
          <p>Let&apos;s connect:</p>
        </div>
        <div>
          <p>Github:</p>
        </div>
        <p>©2024 by Tuhina Das.</p>
      </footer>
    </>
  );
};

export default Foot;
