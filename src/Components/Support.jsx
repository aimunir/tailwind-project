import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import SupportImg from "../assests/support.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay "
          src={SupportImg}
          alt=""
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 uppercase text-center text-3xl text-slate-300">
            Support
          </h2>
          <h3 className="capitalize text-center text-5xl text-gray-200 font-bold py-6">
            Finding Right Them
          </h3>
          <p className="capitalize text-center text-slate-300 text-3xl py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            delectus laudantium dolor, voluptates neque error cupiditate optio
            laborum earum maiores, alias recusandae. Consectetur repellendus
            iusto illum pariatur vero commodi minus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3  relative text-black gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20">
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <PhoneIcon className="w-16 p-2 rounded-lg mt-[-4rem] bg-indigo-600 text-white" />
              <h3 className="text-2xl text-gray-600 mt-5">Sales</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                possimus saepe nemo dolore rem obcaecati, nulla dignissimos in,
                nobis placeat esse. Vero hic placeat fugiat ipsa blanditiis
                accusantium dolor at.
              </p>
            </div>
            <div className="flex px-8 text-center bg-indigo-200 rounded-b-xl">
              {" "}
              <p className='text-slate-500 text-lg'>Contact Us </p>
              <ArrowSmRightIcon className="w-6 ml-2 text-indigo-600" />{" "}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <PhoneIcon className="w-16 p-2 rounded-lg mt-[-4rem] bg-indigo-600 text-white" />
              <h3 className="text-2xl text-gray-600 mt-5">Sales</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                possimus saepe nemo dolore rem obcaecati, nulla dignissimos in,
                nobis placeat esse. Vero hic placeat fugiat ipsa blanditiis
                accusantium dolor at.
              </p>
            </div>
            <div className="flex px-8 text-center bg-indigo-200 rounded-b-xl">
              {" "}
              <p className='text-slate-500 text-lg'>Contact Us </p>
              <ArrowSmRightIcon className="w-6 ml-2 text-indigo-600" />{" "}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <PhoneIcon className="w-16 p-2 rounded-lg mt-[-4rem] bg-indigo-600 text-white" />
              <h3 className="text-2xl text-gray-600 mt-5">Sales</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                possimus saepe nemo dolore rem obcaecati, nulla dignissimos in,
                nobis placeat esse. Vero hic placeat fugiat ipsa blanditiis
                accusantium dolor at.
              </p>
            </div>
            <div className="flex px-8 text-center bg-indigo-200 rounded-b-xl">
              {" "}
              <p className='text-slate-500 text-lg'>Contact Us </p>
              <ArrowSmRightIcon className="w-6 ml-2 text-indigo-600" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
