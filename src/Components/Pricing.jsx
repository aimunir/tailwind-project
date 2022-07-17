import React from "react";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className="w-full  my-30">
      <div className="w-full h-[550px] absolute bg-slate-900 mix-blend-overlay"></div>

      <div className="relative">
        <div className="text-center">
          <h1 className="uppercase pt-14 text-3xl font-semibold text-slate-300 ">
            pricing
          </h1>
          <h2 className="capitalize text-5xl font-bold my-4 text-slate-200 px-8">
            {" "}
            the right price for your Research
          </h2>
          <p className="text-2xl my-5 mx-8 text-slate-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            voluptatum inventore dolores quo provident non velit eum maiores
            voluptas quam!
          </p>
        </div>
      </div>

      {/* box container */}
      <div className="grid md:grid-cols-2  my-10 mx-[8%] relative">
        <div className=" my-8 ml-10 py-8 pl-7 bg-white  rounded-xl shadow-2xl">
          <span className="bg-indigo-500 rounded-xl text-gray-900 text-md px-3 uppercase ">
            Standard
          </span>
          <div>
            <p className="text-5xl my-3 text-gray-800">
              $49.99<span className="text-sm text-gray-600">/mo</span>{" "}
            </p>
          </div>
          <div>
            <p className="my-5 text-2xl text-slate-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, distinctio?
            </p>
            <div className="">
              <p className="flex py-1   text-black text-lg">
                {" "}
                <CheckIcon className="w-7  text-green-600" /> Lorem, ipsum
                dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7  text-green-600" /> Lorem, ipsum
                dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7 text-green-600" /> Lorem, ipsum dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7 text-green-600" /> Lorem, ipsum dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7 text-green-600" /> Lorem, ipsum dolor.{" "}
              </p>

              <div className="mt-4 ml-5">
                <button className="flex  py-3 px-10 gap-2 font-bold">
                  Get Started{" "}
                  <span>
                    {" "}
                    <ArrowRightIcon className="w-5 text-center pt-[3px] " />{" "}
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>


                                         {/* premium */}
                                         <div className=" my-8 ml-10 py-8 pl-7 bg-white  rounded-xl shadow-2xl">
          <span className="bg-indigo-500 rounded-xl text-gray-900 text-md px-3 uppercase ">
            premium
          </span>
          <div>
            <p className="text-5xl my-3 text-gray-800">
              $99.99<span className="text-sm text-gray-600">/mo</span>{" "}
            </p>
          </div>
          <div>
            <p className="my-5 text-2xl text-slate-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, distinctio?
            </p>
            <div className="">
              <p className="flex py-1   text-black text-lg">
                {" "}
                <CheckIcon className="w-7  text-green-600" /> Lorem, ipsum
                dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7  text-green-600" /> Lorem, ipsum
                dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7 text-green-600" /> Lorem, ipsum dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7 text-green-600" /> Lorem, ipsum dolor.{" "}
              </p>
              <p className="flex py-1 text-black text-lg">
                {" "}
                <CheckIcon className="w-7 text-green-600" /> Lorem, ipsum dolor.{" "}
              </p>

              <div className="mt-4 ml-5">
                <button className="flex  py-3 px-10 gap-2 font-bold">
                  Get Started{" "}
                  <span>
                    {" "}
                    <ArrowRightIcon className="w-5 text-center pt-[3px] " />{" "}
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
                                         {/* premium  end*/}

      </div>

      {/* box container end  */}
    </div>
  );
};

export default Pricing;
