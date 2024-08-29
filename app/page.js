import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tuhina Das",
  description: "Tuhina Das's Digital Portfolio",
};

/*
  TODO 8/27/24:
  - Make mobile-friendly
  - Fix footer
  - Add cover img for home page
  - 
*/

export default function Home() {
  return (
    <>
      {/* Home Page Content */}
      <div className="mx-auto text-center max-w-5xl my-[30vh] px-3">
        <div className="mx-auto text-center max-w-5xl my-[30vh] px-3">
          <h1 className="text-8xl gradient_text">Hi, I&apos;m Tuhina Das!</h1>
          {/* <h1 className="text-8xl gradient_text">Coming Soon!</h1> */}
          <div className="mt-[3vh]">
            <h2 className="text-3xl font-semibold">
              I&apos;m a high school student studying
            </h2>
            <h2 className="text-3xl mx-2 gradient_text">
              {" "}
              full-stack web development.
            </h2>
            {/* <h2 className="text-3xl font-semibold">
            Stay tuned for the big reveal 🫶
          </h2> */}
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
