"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Nav = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="nav_styles">
        {/* Logo */}
        <Link href="/">
          <h1 className="nav_logo_text">TUHINA DAS</h1>
        </Link>
        {/* Navbar */}
        <div className="flex space-x-5 justify-end w-[60%]">
          <span className="nav_options_text">
            <Link href="/">Home</Link>
          </span>
          <span className="nav_options_text">
            <Link href="/about">About Me</Link>
          </span>
          <span className="nav_options_text">
            <Link href="/about-ISM">About ISM</Link>
          </span>
          {/* <span className="nav_options_text">
            <Link href="/my-work">My Work</Link>
          </span> */}
          <span className="nav_options_text">
            <Link href="/research">Research</Link>
          </span>
          <span className="nav_options_text">
            <Link href="/mentor">Mentor</Link>
          </span>
          <span className="nav_options_text">
            <Link href="/ISM-1">ISM 1</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
