import React from "react";

export default function Navbar(props) {
  return (
    <nav className="flex items-center p-4 text-xl flex-wrap">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <span className="text-blk text-white font-bold uppercase tracking-wide">
          Aditya Verma
        </span>
      </a>
      <button
        className="text-blk text-lg inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i className="material-icons">menu</i>
      </button>
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blk items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>About</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blk items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Experience</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blk items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
