import React from "react";
// import {Checked} from 'lucide-react'

import { BadgeCheck } from "lucide-react";
import { checklistItems } from "../constants";

import codeImg from "../assets/code.jpg";
const Workflow = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-4xl lg:text-7xl text-center mt-6 tracking wide">
        Accelerate you{" "}
        <span className="  bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
          {""}coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap ">
        <div className="p-2 w-full lg:w-1/2  flex-start flex">
          <img src={codeImg} alt="code" />
        </div>
        <div className=" pt-12 w-full lg:w-1/2 ">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400  mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center  rounded-full ">
                {/* <Checked/> */}
                <BadgeCheck />
              </div>
              <div>
                <h5 className="mt-1 mb-3 text-xl">{item.title}</h5>
                <p className="text-mb text-neutral-500">{item.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
