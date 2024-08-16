import React from "react";

function Education() {
  return (
    <div className="mb-12">
      <p className="text-main font-kanit text-[25px] text-center font-medium">
        Education and Career
      </p>
      <table className="text-main w-11/12 text-center text-[17px] justify-between font-kanit border-collapse border-none m-0 m-auto">
        <tbody className="leading-[40px]">
          <tr>
            <th>Place of Study</th>
            <th>Date</th>
          </tr>
          <tr className="">
            <td className="pb-1 border-2 border-main border-opacity-70">Elbakyan Krtahamalir</td>
            <td className="pb-1 border-2 border-main border-opacity-70">26.08.2022-26.02.2023</td>
          </tr>
          <tr className="">
            <td className="pb-1 border-2 border-main border-opacity-70">Armenian Code Academy <span className="font-medium">ACA</span></td>
            <td className="pb-1 border-2 border-main border-opacity-70">22.03.2024-02.06.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Education;
