import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full  bg-slate-900 text-gray-300 mt-24 px-2  py-8 ">
      {/* container */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-2  md:grid-cols-6 pb-2 border-b-2 border-gray-700">
        {/* section-1 */}
        <div className="flex flex-col">
          <h3 className=" text-xl text-slate-200 font-bold uppercase">
            Solution
          </h3>
          <ul className=" text-md font-semibold text-slate-400">
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        {/* section-1 end*/}

        {/* section 2  */}
        <div className="flex flex-col">
          <h3 className=" text-xl text-slate-200 font-bold uppercase">
            Support
          </h3>
          <ul className=" text-md font-semibold text-slate-400">
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API'S Status</li>
          </ul>
        </div>

        {/* section 2 end */}

        {/* section 3 */}
        <div className="flex flex-col">
          <h3 className=" text-xl text-slate-200 font-bold uppercase">
            Company
          </h3>
          <ul className=" text-md font-semibold text-slate-400">
            <li className="py-1">About</li>
            <li className="py-1">Blogs</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        {/* section 3 end */}

        {/* section 4 */}
        <div className="flex flex-col">
          <h3 className=" text-xl text-slate-200 font-bold uppercase">Legal</h3>
          <ul className=" text-md font-semibold text-slate-400">
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>

        {/* section 4 end */}

        {/* section 5 */}
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="uppercase text-xl font-bold text-slate-200 pb-3">
            Subscribe to our newsletter
          </p>
          <p className="capitalize text-md text-slate-200 pb-2 ">
            the latest news, articles, and resources, sent to your inbox weekly.{" "}
          </p>
          <form className="flex gap-3 pt-5">
            <input
              className="py-2 px-5 rounded-lg outline-none  text-gray-700"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="px-3">Subscribe</button>
          </form>
        </div>
        {/* section 5 end */}
      </div>
      {/* container end */}

      {/* icon section */}
      <div className='flex flex-col justify-between  items-center  sm:flex-row pt-4 px-16 pb-2 '>
        <p className=" text-sm"> @Lorem ipsum dolor sit amet. </p>
        <div className='flex gap-4 text-2xl text-slate-100 '>
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
        </div>
      </div>
      {/* icon section  end*/}
    </div>
  );
};

export default Footer;
