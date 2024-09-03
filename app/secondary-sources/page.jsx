import React from "react";
import Image from "next/image";
import Link from "next/link";

const SecondarySources = () => {
  return (
    <>
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text my-[3vh]">SECONDARY SOURCES</h1>
        <div className="w-[90vw] p-[3vh] rounded-2xl shadow-2xl shadow-[#5ec7ff] bg-white">
          <div className="flex align-middle">
            <Image
              src="/assets/images/ism_logo.webp"
              className="mx-auto w-auto h-[200px] rounded-[120%] px-[3vh] m-[4vh]"
              alt="The Liberty High School ISM logo"
              width={250}
              height={300}
            ></Image>
            <div className="text-left p-[2vh] m-[4vh]">
              <h1 className="pb-[2vh]">SOURCE&apos;S TITLE HERE</h1>
              <p className="pb-[2vh]">
                This section will have a short summary of the source and what I
                learned, as well as a page link to read more about the source in
                depth. Next to each description will be an image related to the
                source. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Link href="" className="underline text-blue-700">
                Click here to learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondarySources;
