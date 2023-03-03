import React from "react";
import {
  FaBars,
  FaGlobeAmericas,
  FaSistrix,
  FaUserCircle,
} from "react-icons/fa";

const Nave = () => {
  return (
    <>
      <div className="sticky top-0 transition-all md:grid md:grid-cols-3 items-center px-10 xl:px-20 py-4 z-50  border-b">
        <div className="flex text-red-600">
          <img
            className="w-8 h-8"
            src="http://localhost:3000/bubbles-air.svg"
            alt=""
          />
          <p>Airbab</p>
        </div>
        <div className="flex-1 flex xl:justify-center px-6 transition-all duration-300">
          <button className="flex-1 flex items-center justify-between border rounded-full p-2 w-[300px] shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center divide-x">
              <p
                className="text-gray-800 bg-transparent text-sm font-medium px-4"
                type="text"
              >
                Anywhere
              </p>
              <p
                className="text-gray-800 bg-transparent text-sm font-medium px-4"
                type="text"
              >
                Any week
              </p>
              <p className="text-gray-600 bg-transparent text-sm font-light px-4">
                Add guests
              </p>
            </div>
            <FaSistrix className="h-8 w-8 bg-[#e77388] text-white stroke-[3.5px] p-2 rounded-full"></FaSistrix>
          </button>
        </div>
        <div className="flex items-center justify-end">
          <div className="border border-transparent cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2">
            <a
              className="text-sm font-medium transition-all duration-300 text-gray-800"
              href="#"
            >
              Switch to hosting
            </a>
          </div>

          <div className="border border-transparent cursor-pointer hover:bg-gray-100 rounded-full p-3">
            <FaGlobeAmericas className="h-5 w-5 transition-all duration-300 text-gray-800"></FaGlobeAmericas>
          </div>
          <button className=" flex  gap-5 px-5 py-1  hover:shadow-md   rounded-full">
            <FaBars
              style={{ height: 32, width: 32, color: "#1f2937" }}
            ></FaBars>
            <FaUserCircle
              style={{ height: 32, width: 32, color: "#1f2937" }}
            ></FaUserCircle>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nave;
