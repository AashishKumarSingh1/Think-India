import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "../../assets/ThinkIndiaLogo.jpg";
import HomeLogo from "../../assets/ThinkIndiaHome.jpg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PhoneImage from "../../assets/PhoneThinkIndiaLogo.jpg";
import checkImage from "../../assets/ThinkIndiacheckImage.png";
import image from "../../assets/ThinkIndiaMetaverse_1.png";

export default function Navigation() {
  const updates = [
    "Think India Website Welcomes You",
    "Think India Updates",
    "Recent Updates",
    "Created with love by Aashish Kumar Singh",
    "Thank you for visiting this website",
  ];

  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarmiddleHeight, setNavbarmiddleHeight] = useState(0);
  const [isStuck, setIsStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsStuck(true);
    } else {
      setIsStuck(false);
    }
  };

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector(".top-navbar");
      if (navbar) {
        const height = navbar.offsetHeight;
        setNavbarHeight(height);
      }
    };
    const updateNavbarmiddleHeight = () => {
      const navbarmiddle = document.querySelector(".middle");
      if (navbarmiddle) {
        const middleheight = navbarmiddle.offsetHeight;
        setNavbarmiddleHeight(middleheight);
      }
    };

    updateNavbarHeight();
    updateNavbarmiddleHeight();
    window.addEventListener("resize", updateNavbarHeight);
    window.addEventListener("resize", updateNavbarmiddleHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      window.removeEventListener("resize", updateNavbarmiddleHeight);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const ScrollProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const totalHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const scrollPercent = (scrollPosition / totalHeight) * 100;
        setScrollPercent(scrollPercent);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <>
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="h-[0.02rem] bg-[#0e0e0e] w-full">
            <div
              className="h-[0.09rem] bg-sky-500"
              style={{ width: `${scrollPercent}%` }}
            ></div>
          </div>
        </div>

        <div
          className="fixed left-0 w-full z-50"
          style={{ top: `${navbarHeight}px` }}
        >
          <div className="h-[0.02rem] bg-[#0e0e0e] w-full">
            <div
              className="h-[0.09rem] bg-sky-500"
              style={{ width: `${scrollPercent}%` }}
            ></div>
          </div>
        </div>
      </>
    );
  };
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

        <div className="hidden md:flex md:justify-center md:fixed md:top-0 md:w-full md:z-[100] md:bg-black">
          <img
            src={Logo}
            alt="Think India"
            className={`z-[100] transition-all absolute h-44 p-3 bg-black cursor-pointer rounded-full ${
              isStuck ? "fixTop" : ""
            }`}
            style={{
              marginTop: `${navbarHeight}px`,
              borderRadius: "0 0 50% 50%",
              height: isStuck ? `${navbarmiddleHeight}px` : "",
            }}
          />
        </div>

        <div
          className="middle section bg-slate-500 fixed items-center justify-between text-black font-bold text-xl lg:text-3xl xl:text-4xl p-4 sm:p-4 w-full transition-all ease-in-out bg-opacity-20 backdrop-blur-xl flex "
          style={{ marginTop: `${navbarHeight}px`, zIndex: "50" }}
        >
          <div className="left-Text text-sky-800 border-l-4 pl-3 border-rose-600">
            <h2 className="animate-pulse">
              <span className="moving">Namaste User</span>
              <br />
              <span className="animate-bounce text-nowrap">
                Think India Welcomes you
              </span>
            </h2>
          </div>

          <button
            onClick={toggleMenu}
            className="animate-pulse lg:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 flex justify-center bg-gray-800 border-gray-900 text-white hover:bg-gray-700 z-[106] mr-2"
            aria-label="Open Menu"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="lg:right-text lg:flex lg:items-center lg:justify-end lg:w-full hidden lg:text-2xl lg:p-4">
            <div className="flex items-center space-x-6 text-gray-400 underline-offset-4">
              <a href="#ThinkIndia" className="hover:text-blue-500">
                About Us
              </a>
              <a href="#Team" className="hover:text-blue-500">
                Team
              </a>
              <a href="#Updates" className="hover:text-blue-500">
                Updates
              </a>
            </div>
          </div>

          {menuOpen && (
            <div
              className={`fixed top-0 left-0 h-auto w-2/3 bg-slate-800 text-white p-4 z-[150] transform transition-transform duration-300`}
              style={{
                marginTop: `${navbarmiddleHeight}`,
                width: "80vw",
                height: "100vh",
              }}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <h2 className="text-blue-500 border-b-4 text-center font-bold  border-rose-600 ">
                Think India <br />
                N.I.T. Patna
              </h2>
              <ul className="space-y-4 mt-12">
                <li className="cursor-pointer border-l-4 pl-4 border-sky-700 hover:text-blue-300">
                  <a href="#ThinkIndia" onClick={toggleMenu}>
                    About Us
                  </a>
                </li>
                <li className="cursor-pointer border-l-4 pl-4 border-sky-700 hover:text-blue-300">
                  <a href="#Team" onClick={toggleMenu}>
                    Team
                  </a>
                </li>
                <li className="cursor-pointer border-l-4 pl-4 border-sky-700 hover:text-blue-300">
                  <a href="#Updates" onClick={toggleMenu}>
                    Updates
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <ScrollProgressBar />
        <div
          className="w-full bg-slate-900"
          style={{ height: `${navbarHeight + navbarmiddleHeight}px` }}
        ></div>
        <div
          className="w-full"
          style={{
            height: `${
              window.innerHeight - navbarHeight - navbarmiddleHeight
            }px`,
            marginTop: `${navbarHeight + navbarmiddleHeight}`,
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{ height: "100%" }}
          >
            <div
              className="p-1 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 via-yellow-500 via-red-500 via-green-500 to-pink-500  animate-gradient-x"
              style={{ borderRadius: "0 0 50% 50%" }}
            >
              <img
                src={checkImage}
                alt="Think India Home"
                className="max-h-screen block rouned-xl w-full aspect-square rounded-2xl cursor-pointer"
                style={{
                  height: `${
                    window.innerHeight - navbarHeight - navbarmiddleHeight
                  }px`,
                  borderRadius: "0 0 50% 50% ",
                  zIndex: "10",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
