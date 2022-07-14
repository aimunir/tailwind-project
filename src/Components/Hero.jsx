import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assests/cyber-bg.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between pb-12">
      <div className="grid md:grid-cols-2 max-w-{1240px} m-auto pt-10">
        <div className="flex flex-col justify-center ml-5 md:items-start w-full px-2 py-8">
          <p className="text-2xl font-semibold">
            Unique Sequencing & Production
          </p>
          <h1 className="text-4xl font-bold py-3 md:text-7xl">
            Cloud Management
          </h1>
          <p className="text-2xl font-semibold">This is our Tech brand.</p>
          <button className="capitalize mt-3 py-3 px-6 sm:w-[60%]">
            Get started
          </button>
        </div>
        <div>
          <img className="w-[80%] ml-[3%]" src={bgImg} alt="/" />
        </div>
        <div
          className="capitalize absolute flex flex-col py-3 px-5 md:min-w-{760px} bottom-[50px] mx-1 
       md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl  text-center shadow-xl sm:ml-auto"
        >
          <p className="font-bold  text-slate-600">data services</p>
          <div className="flex justify-between flex-wrap">
            <p className="flex px-4 py-2 text-slate-500">
              {" "}
              <CloudUploadIcon className="h-6 text-indigo-600" /> app security
            </p>
            <p className="flex px-4 py-2  text-slate-500">
              {" "}
              <DatabaseIcon className="h-6  text-indigo-600" /> dashboard
            </p>
            <p className="flex px-4 py-2  text-slate-500">
              {" "}
              <ServerIcon className="h-6  text-indigo-600" /> cloud
            </p>
            <p className="flex px-4 py-2  text-slate-500">
              {" "}
              <PaperAirplaneIcon className="h-6  text-indigo-600" /> api
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
