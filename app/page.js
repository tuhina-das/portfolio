import Image from "next/image";

export const metadata = {
  title: "Tuhina Das",
  description: "Tuhina Das's Digital Portfolio",
};

export default function Home() {
  return (
    <>
      <div className="nav_styles">
        {/* Logo */}
        <h1 className="nav_logo_text">TUHINA DAS</h1>
        {/* Navbar */}
        <div className="flex space-x-5 justify-end w-[60%]">
          <span className="nav_options_text">Home</span>
          <span className="nav_options_text">About</span>
          <span className="nav_options_text">My Work</span>
          <span className="nav_options_text">My Research</span>
          <span className="nav_options_text">Mentor</span>
        </div>
      </div>
      {/* Home Page Content */}
      <div className="mx-auto text-center max-w-5xl my-[30vh] px-3">
        <h1 className="text-8xl gradient_text">Hi, I&apos;m Tuhina Das!</h1>
        <div className="mt-[3vh]">
          <h2 className="text-3xl font-semibold">
            I'm a high school student studying
          </h2>
          <h2 className="text-3xl mx-2 gradient_text">
            {" "}
            full-stack web development.
          </h2>
        </div>
      </div>
    </>
  );
}
