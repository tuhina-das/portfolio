"use client";
import React, { useState } from "react";
import Link from "next/link";

const Dropdown = (props) => {
  const isResearch = props.isResearch;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full blue_text_style">
      <div className="relative inline-block">
        <button type="button" onClick={toggleDropdown}>
          {isResearch ? "Research" : "Projects"}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                {isResearch ? (
                  <a
                    href="/primary-sources"
                    className="blue_text_style block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Primary Sources
                  </a>
                ) : (
                  <a
                    href="/original-work"
                    className="blue_text_style block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Original Work
                  </a>
                )}
              </li>
              <li>
                {isResearch ? (
                  <a
                    href="/secondary-sources"
                    className="blue_text_style block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Secondary Sources
                  </a>
                ) : (
                  <a
                    href="/final-product"
                    className="blue_text_style block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Final Product
                  </a>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
