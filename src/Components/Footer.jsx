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
      <div className="max-w-[1240px] mx-auto grid grid-cols-2  md:grid-cols-6 border-b-2 border-gray-700">
      
      {/* section-1 */}
      <div className="flex flex-col">
          <h3 className=" text-xl text-slate-200 font-bold">Solution</h3>
          <ul className=" text-md font-semibold text-slate-400">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
      {/* section-1 end*/}

      {/* section 2  */}
     
      {/* section 2 end */}

      {/* section 3 */}
     
      {/* section 3 end */}

      {/* section 4 */}


      {/* section 4 end */}


      {/* section 5 */}


      {/* section 5 end */}



      
       
      </div>

      {/* container end */}

      <div>
        {/* contact section  */}
      </div>


    </div>
  );
};

export default Footer;
