import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="w-full bg-black text-white flex flex-col justify-center items-center">
        {/* wel */}
        <div className="flex  ">
          <span>Hey,Welcome to OnlineHoja</span>
          <span>
            <RiCustomerService2Fill />
          </span>
        </div>
        {/* we build */}
        <h1 className="text-4xl">We Build & Design Web InterFaces.</h1>
        <h3>Make Your Dream Online With OnlineHoja</h3>
        <span className="text-white/30">
          OnlineHoja is helping companies monitor, track and take action on
          their environmental impact.
        </span>
        <button className="btn bg-gradient-to-r from-pink-800 to-red-600 border-red-900 hover:bg-gradient-to-r  ">
          START PROJECT WITH ONLINEHOJA
        </button>
      </div>
    </>
  );
};

export default Home;
