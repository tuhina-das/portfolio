import React from "react";
import Image from "next/image";
import Link from "next/link";

const OriginalWork = () => {
  return (
    <>
      <title>Original Work</title>
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text my-[3vh]">ORIGINAL WORK</h1>
        {/* replace w/ project image */}
        <Image
          src="/assets/images/OW_ss.png"
          className="mx-auto w-auto h-[400px] rounded-lg shadow-2xl shadow-[#5ec7ff]"
          alt="Me in a professional suit"
          width={350}
          height={400}
        />
        <p className="text-center p-[5vh] border-solid">
          For my project, I decided to build a website detecting plagiarized
          work using cosine similarity. The website features creators&apos;
          original work and a knock-off. Check out the project below:
        </p>
        <div className="bg-blue-500 w-[75%] p-[3vw] text-white flex items-center justify-center h-24 rounded-lg font-bold text-lg">
          <Link
            href="https://github.com/tuhina-das/cnn-image-similarity"
            target="_blank"
            className="underline"
          >
            <h1 className="cursor-pointer hover:underline transition duration-300 ease-in-out">
              Using Cosine Similarity to Detect Potential Plagiarism in Creative
              Products (GitHub)
            </h1>
          </Link>
          <div className="h-[50%]"></div>
        </div>
      </div>
    </>
  );
};

export default OriginalWork;
