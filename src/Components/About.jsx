import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className='max-w-[1240px] mx-auto'>
        {/* about header */}
        <div className='text-center'>
          <h2 className="capitalize text-5xl font-sans font-bold">
            trusted by developers all over the world
          </h2>
          <p className='text-3xl py-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptates tempore beatae voluptate mollitia ratione explicabo
            temporibus harum, blanditiis incidunt!
          </p>
        </div>
        {/* about header end */}

        {/* about components */}

        <div className="grid md:grid-cols-3 text-center gap-4">
          <div className=" border py-8 rounded-xl shadow-lg">
            <p  className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">completion</p>
          </div>

          <div className="border py-8 rounded-xl shadow-lg">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>

          <div className="border py-8 rounded-xl shadow-lg ">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
        {/* about components end */}
      </div>
    </div>
  );
};

export default About;
