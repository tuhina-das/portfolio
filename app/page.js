import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export const metadata = {
  title: "Tuhina Das",
  description: "Tuhina Das's Digital Portfolio",
};

/*
  TODO 9/1/24:
  - Responsive navbar
  - Responsive footer
  - Responsive pages overall
  - Home page visual
*/

export default function Home() {
  return (
    <>
      {/* Home Page Content */}
      <div className="mx-auto text-center max-w-5xl my-[30vh] px-3">
        <div className="mx-auto text-center max-w-5xl my-[30vh] px-3">
          {/* <div className="align-middle flex justify-between px-[2vw] mx-auto max-w-full border-solid border-[#2563eb] border-[1px] rounded-lg hadow-2xl shadow-[#48abe0] bg-white"> */}
          <h1 className="text-8xl gradient_text">Hi, I&apos;m Tuhina Das!</h1>
          {/* <IoSearch
              style={{
                fontSize: "10vh",
                color: "#2563eb",
              }}
            ></IoSearch>
          </div> */}
          <div className="mt-[3vh]">
            <h2 className="text-3xl font-semibold">
              I&apos;m a high school student studying
            </h2>
            <h2 className="text-3xl mx-2 gradient_text">
              {" "}
              full-stack web development.
            </h2>
          </div>
        </div>

        <div className="py-[10vh] bg-orange-300 bg-opacity-25 rounded-lg">
          <h1 className="text-3xl gradient_text">
            &quot;Carpe diem!&quot; - unknown
          </h1>
        </div>
      </div>
    </>
  );
}
