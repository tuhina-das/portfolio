"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

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
          <span className="blue_text_style">
            <Link href="/">Home</Link>
          </span>
          <span className="blue_text_style">
            <Link href="/about">About Me</Link>
          </span>
          <span className="blue_text_style">
            <Link href="/about-ISM">About ISM</Link>
          </span>
          {/* <span className="blue_text_style">
            <Link href="/my-work">My Work</Link>
          </span> */}
          <span>
            <Dropdown isResearch={true}></Dropdown>
          </span>
          <span>
            <Dropdown isResearch={false}></Dropdown>
          </span>
          <span className="blue_text_style">
            <Link href="/mentor">Mentor</Link>
          </span>
          <span className="blue_text_style">
            <Link href="/ISM-1">ISM 1</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
