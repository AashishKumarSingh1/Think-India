import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import Team from "../Home/Team";
export default function About() {
    const updates = [
        "Think India Website Welcomes You",
        "Think India Updates",
        "Recent Updates",
        "Created with love by Aashish Kumar Singh",
        "Thank you for visiting this website",
      ];
  return (
    <>
      <div className="relative select-none">
        <div
          className="fixed top-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-md top-navbar "
          style={{ zIndex: "50" }}
        >
          <ul className="flex justify-around space-x-4 gap-7 relative z-[100]">
            {updates.map((update, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-300 underline-offset-8 transition border-b-orange-300 border-l-4 order-red-300 p-1 text-nowrap morph text-start pl-4 border-rose-500"
              >
                {update}
              </li>
            ))}
          </ul>
        </div>
</div>
      <div
        className="rounded-3xl w-full md:w-auto shadow-lg  p-8 m-auto mt-4"
      >
        <Link to="/" className="text-3xl font-semibold  text-white">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:text-nowrap rounded-3xl text-center m-auto w-auto items-center md:w-auto border-2 border-transparent hover:border-indigo-700 cursor-pointer hover:text-indigo-500 transition-all ease-in-out hover:border-b-4 border-rose-400 text-wrap">
          {/* <Link to="/" className="text-3xl font-semibold  text-white"> */}
            Visit to Home Page
          {/* </Link> */}
        </div>
        </Link>
      </div>

      {/* <div
        className="rounded-3xl md:w-auto shadow-lg bg-gradient-to-r from-white via-slate-200 to-white animate-gradient-x p-8 m-auto mt-[10vh] w-[50vw]"
      >
        <div className="p-6 text-nowrap rounded-3xl text-center m-auto w-auto items-center md:w-auto cursor-pointer transition-all ease-in-out text-2xl font-semibold text-black animate-pulse">
          Updating Soon....
        </div>
      </div> */}
    <div
        className="ml-12 mt-7  p-4  border-l-4 border-sky-500 mb-4 "
        data-aos="fade-right"
      >
        <h1>
          <span className="text-white text-3xl font-semibold cursor-pointer hover:text-sky-500">
            Updating Soon....
          </span>
        </h1>
      </div>

      <div className="mt-[0]">
        <Footer />
      </div>
    </>
  );
}
