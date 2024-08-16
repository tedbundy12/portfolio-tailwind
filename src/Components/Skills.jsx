import React from "react";

import js from "../assets/javascript.svg";
import html from "../assets/html.svg";
import reacticon from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import node from '../assets/node.svg'
import mongo from '../assets/mongo.svg'

function Skills() {
  return (
    <div className="px-2">
      <p className="text-main font-kanit text-center text-[25px] font-medium mb-5">
        Knowledge of Languages, frameworkes, etc.
      </p>

      <table className="w-[850px] h-auto bg-[#234D75] m-0 m-auto rounded-md text-main font-kanit font-normal text-[18px]">
        <thead>
          <tr className="">
            <th className="border-b border-r border-skill-border px-8 text-center border-[#4783bb] border-2 border-b-2">
              Language / Framework
            </th>
            <th className="border-b border-skill-border px-[180px] text-center border-[#4783bb] border-2 border-b-2">
              Skill Level
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="border-b border-r border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] font-bold relative">
              JavaScript
              <img
                src={js}
                alt=""
                className="w-[30px] h-[30px] absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 mr-1"
              />
            </td>
            <td className="border-b border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] bg-[#b53d3988] text-[#e77e7b] font-bold">
              High
            </td>
          </tr>
          <tr>
            <td className="border-b border-r border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] font-bold relative">
              HTML CSS
              <img
                src={html}
                alt=""
                className="w-[30px] h-[30px] absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 mr-1"
              />
            </td>
            <td className="border-b border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] bg-[#b53d3988] text-[#e77e7b] font-bold">
              High
            </td>
          </tr>
          <tr>
            <td className="border-b border-r border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] font-bold relative">
              React JS
              <img
                src={reacticon}
                alt=""
                className="w-[25px] h-[25px] absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 mr-1.5"
              />
            </td>
            <td className="border-b border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] bg-[#cca02888] text-[#e3da96] font-bold">
              Medium
            </td>
          </tr>
          <tr>
            <td className="border-b border-r border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] font-bold relative">
              Tailwind CSS
              <img
                src={tailwind}
                alt=""
                className="w-[25px] h-[25px] absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 mr-1.5"
              />
            </td>
            <td className="border-b border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] bg-[#b53d3988] text-[#e77e7b] font-bold">
              High
            </td>
          </tr>
          <tr>
            <td className="border-b border-r border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] font-bold relative">
              Node JS
              <img
                src={node}
                alt=""
                className="w-[25px] h-[25px] absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 mr-1.5"
              />
            </td>
            <td className="border-b border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] bg-[#6b3cc888] text-[#b69de6] font-bold">
              Basics
            </td>
          </tr>
          <tr>
            <td className="border-b border-r border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] font-bold relative">
              MongoDB
              <img
                src={mongo}
                alt=""
                className="w-[25px] h-[25px] absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 mr-1.5"
              />
            </td>
            <td className="border-b border-skill-border px-0 text-center border-[#4783bb] border-2 border-b-2 h-[10px] bg-[#cca02888] text-[#e3da96] font-bold">
              Medium
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Skills;
