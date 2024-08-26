"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Foot = () => {
  return (
    <>
      <footer className="relative bottom-0 w-full mx-auto flex justify-between min-h-[5vh] rounded-lg h-fit p-[2vh] bg-white">
        <div>
          <p>Contact me:</p>
          <p>tuhinakdas@gmail.com</p>
        </div>
        <div>Let's connect:</div>
        <div>Github:</div>
        ©2024 by Tuhina Das.
      </footer>
    </>
  );
};

export default Foot;
