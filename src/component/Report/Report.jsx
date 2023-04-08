import React from "react";
import PieChart from "../PieChart/Pie";

const Report = ({ responseData }) => {
  return (
    <div className="border my-3 border-[#404040] rounded-xl w-9/12 bg-white">
      <h1 className="text-2xl py-3 font-bold tracking-tight text-grad-2 sm:text-4xl">
        Report
      </h1>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center py-4">
          <PieChart audio={responseData?.audio} />
          <p className="text-xl font-semibold">Audio Analysis</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <PieChart audio={responseData?.audio} />
          <p className="text-xl font-semibold">Video Analysis</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <PieChart audio={responseData?.audio} />
          <p className="text-xl font-semibold">Audio Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
