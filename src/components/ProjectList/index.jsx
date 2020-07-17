import React, { useState } from "react";

export default function ProjectList() {
  const [companies, setCompanies] = useState([
    {
      name: "SupplyCompass",
      logo:
        "https://public-uploads.supplycompass.com/assets/platform/logo/logo-full.svg",
      screenshot:
        "https://sc-wordpress-assets.s3.amazonaws.com/uploads/2020/06/collabbrandteam.png",
      description:
        "is an end-to-end fashion software that re-imagines how brands and manufacturers find each other and work together.",
    },
    {
      name: "Param.ai",
      logo: "https://www.param.ai/wp-content/uploads/2020/02/logo-1.png",
      screenshot:
        "https://www.param.ai/wp-content/uploads/2020/02/branded-1024x611.png",
      description:
        "is a predictive intelligence recruitment solution. Param helps companies to automate most of the hiring tasks using artificial intelligence.",
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="container mx-auto py-4">
      <h1 className="text-4xl mt-16 font-bold text-center">Experience</h1>
      <div className="mx-auto p-16 sm:p-24 lg:p-48">
        <div
          className="relative rounded-lg block md:flex items-center bg-white shadow-xl"
          style={{ minHeight: "19rem" }}
        >
          <div
            className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            style={{ minHeight: "19rem" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={companies[selectedIndex].screenshot}
              alt=""
            />
            <div className="absolute inset-0 w-full h-full yellow-bg opacity-75" />
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
              <img
                className="w-4/6"
                src={companies[selectedIndex].logo}
                alt={companies[selectedIndex].name}
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-center rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:py-12">
              <p className="text-gray-600">
                <span className="text-gray-900">
                  {companies[selectedIndex].name}
                </span>{" "}
                {companies[selectedIndex].description}
              </p>
              <a
                className="flex items-baseline mt-3 text-blk hover:underline"
                href=""
              >
                <span>Learn more</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </a>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          <button
            onClick={() => {
              setSelectedIndex((prevState) => {
                if (prevState > 0) {
                  return prevState - 1;
                }
              });
            }}
            className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline"
          >
            <span className="block" style={{ transform: "scale(-1)" }}>
              &#x279c;
            </span>
          </button>
          <button
            onClick={() => {
              setSelectedIndex((prevState) => {
                if (prevState < companies.length) {
                  return prevState + 1;
                }
              });
            }}
            className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline"
          >
            <span className="block" style={{ transform: "scale(1)" }}>
              &#x279c;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
