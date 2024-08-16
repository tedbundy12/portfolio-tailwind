import React from "react";

function About() {
  return (
    <div>
      <div className="flexing flex gap-4 items-center mb-8">
        <div className="left">
          <div className="w-[250px] h-20 bg-[#234D75] px-4 py-1 rounded-br-[75px] opacity-100">
            <p className="text-[#37B7F1] text-[25px] leading-0 font-kanit">
              Vanik Sedrakyan
            </p>
            <p className="text-[#37B7F1] font-kanit ">Front-End Developer</p>
          </div>
        </div>
        <div className="right">
          <p className="text-[#37B7F1] text-[14px] leading-4 font-kanit tracking-[1px]">
            I am a self-taught front end developer with over 2 years of
            experience in my personal projects.
          </p>
        </div>
      </div>
      <p className="text-[#37B7F1] text-[18px] text-center font-kanit tracking-[1px] mb-[18px]">
        Solving complex issues and finding optimal solutions for <br />{" "}
        completing various tasks is my specialty.
      </p>
      <hr className="border-[#234D75] border-2 mb-4" />
    </div>
  );
}

export default About;
