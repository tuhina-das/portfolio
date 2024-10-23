"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResearchDropdown = () => {
    setIsResearchOpen(!isResearchOpen);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <>
      {/* <Nav /> */}
      <div className="nav_styles">
        {/* Logo */}
        <Link href="/">
          <h1 className="nav_logo_text">TUHINA DAS</h1>
        </Link>
        {/* Hamburger menu for mobile */}
        <button
          className=" blue_text_style lg:hidden p-2 rounded-md"
          onClick={toggleMobileMenu}
        >
          Menu
        </button>

        {/* Navbar */}
        <div className="hidden lg:flex space-x-5 justify-end w-[60%]">
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

      {isMobileMenuOpen && (
        <div className="lg:hidden relative inset-0 flex items-start justify-center mt-[5vh]">
          <div className="w-full">
            <div className="px-4">
              <div className="flex flex-col items-center w-full">
                <span className="nav_option_styles_mob blue_text_style w-full text-center">
                  <Link href="/" onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </span>
                <span className="nav_option_styles_mob blue_text_style w-full text-center">
                  <Link href="/about" onClick={toggleMobileMenu}>
                    About Me
                  </Link>
                </span>
                <span className="nav_option_styles_mob blue_text_style w-full text-center">
                  <Link href="/about-ISM" onClick={toggleMobileMenu}>
                    About ISM
                  </Link>
                </span>
                <span className="nav_option_styles_mob blue_text_style w-full text-center">
                  <Link href="/secondary-sources" onClick={toggleMobileMenu}>
                    Secondary Research
                  </Link>
                </span>
                <span className="nav_option_styles_mob blue_text_style w-full text-center">
                  <button
                    onClick={toggleProjectsDropdown}
                    className="w-full text-center"
                  >
                    Projects
                  </button>
                  {isProjectsOpen && (
                    <div className="nav_option_styles_mob blue_text_style w-full text-center">
                      <Dropdown isResearch={false} />
                    </div>
                  )}
                </span>
                <span className="nav_option_styles_mob blue_text_style w-full text-center">
                  <Link href="/mentor" onClick={toggleMobileMenu}>
                    Mentor
                  </Link>
                </span>
                <span className="nav_option_styles_mob blue_text_style w-full text-center">
                  <Link href="/ISM-1" onClick={toggleMobileMenu}>
                    ISM 1
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
