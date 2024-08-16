import React from "react";

import About from "./About";
import Talents from "./Talents";
import Education from "./Education";
import Skills from "./Skills";
import Header from "./Header";

function Content() {
  return (
    <div className="">
      <Header></Header>
      <div className="w-[1000px] h-[1000px] border border-[#234D75] rounded-md border-4 mt-20 px-0 py-0 m-0 m-auto">
        <About></About>
        <Talents></Talents>
        <Education></Education>
        <Skills></Skills>
        
      </div>
    </div>
  );
}

export default Content;
