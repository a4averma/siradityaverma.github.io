import React from "react";
import Logo from "../../assets/logo.svg";

export default function Hero(props) {
  return (
    <section className="yellow-bg p-16">
      <div className="text-center py-4 lg:px-4">
        <div
          className="p-2 items-center leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex text-white rounded-full bg-blk uppercase px-2 py-1 text-xs font-bold mr-3">
            Caution!
          </span>
          <span className="font-semibold mr-2 text-left text-blk flex-auto">
            Work in progress
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
      <section className="w-9/12 mx-auto flex justify-between items-center">
        <div className="w-4/12">
          <img className="w-64 h-64 object-contain" src={Logo} alt="AV" />
        </div>
        <h1 className="text-5xl w-8/12 font-bold">
          Hey, I'm Aditya. I'm a software engineer living and working in
          Hyderabad, Telangana. I love design systems and shipping quality
          products.
        </h1>
      </section>
    </section>
  );
}
