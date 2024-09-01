import React from "react";
import Image from "next/image";
import Link from "next/link";

const ISM1 = () => {
  return (
    <>
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text my-[3vh]">ISM 1</h1>
        <Image
          src="/assets/images/software_development_image.jpg"
          className="mx-auto w-auto h-[400px] rounded-lg shadow-2xl shadow-[#5ec7ff]"
          alt="The Liberty High School ISM logo"
          width={350}
          height={400}
        ></Image>
        <p className="text-center p-[5vh] border-solid">
          Interested in my previous ISM work?{" "}
          <Link
            href="https://tuhinadas.wixsite.com/tuhina-das"
            target="_blank"
            className="underline"
          >
            Feel free to check it out here.
          </Link>
        </p>
      </div>
    </>
  );
};

export default ISM1;
