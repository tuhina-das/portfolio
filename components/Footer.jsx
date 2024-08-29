"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Foot = () => {
  return (
    <>
      <footer className="nav_options_text relative bottom-0 w-full mx-auto justify-between min-h-[5vh] rounded-lg h-fit mt-[15vh] p-[2vh] bg-white">
        <div>
          <p>Contact me:</p>
          <p>tuhinakdas@gmail.com</p>
        </div>
        <div>Let&aposs connect:</div>
        <div>Github:</div>
        ©2024 by Tuhina Das.
      </footer>
    </>
  );
};

export default Foot;
