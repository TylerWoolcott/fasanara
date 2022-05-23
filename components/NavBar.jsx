import React, { useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import { IconContext } from "react-icons";

import logo from "../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter()

  return (
      <>
      <Head>
        <title>Fasanara is an alternative asset management company.</title>
        <meta name="robots" content="follow, index" />
        <meta content='Fasanara is an alternative asset management company.' name="description"></meta>
        <meta property="og:url" content={`https://www.fasanara.com/${router.asPath}`} />
        <link rel="canonical" href={`https://www.fasanara.com/${router.asPath}`} />
        <meta property="og:type" content='website' />
        <meta property="og:site_name" content="Fasanara" />
        <meta property="og:description" content='Fasanara is an alternative asset management company.' />
        <meta property="og:title" content='Fasanara is an alternative asset management company.' />
        <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <nav className="fixed flex items-center top-0 left-0 right-0 z-[900] px-[30px] h-[70px] bg-[#000] bg-opacity-80">
      <div className="w-full justify-between flex items-center flex md:flex-[1] flex-initial justify-center items-center">
        <Image src={logo} 
        alt="logo"  
        height={38}
        width={38}
        className="cursor-pointer drop-shadow" />
      </div>
      <ul className="text-[#eeebe5] md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Funds", "Insights", "Podcasts", "Media", "Seed"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      <IconContext.Provider value={{ color: "#eeebe5", className: "global-class-name" }}>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md black-glassmorphism animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Funds", "Insights", "Podcasts", "Media", "Seed"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="text-[#eeebe5] my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
      </IconContext.Provider>
    </nav>
      </>
  );
};

export default Navbar;

