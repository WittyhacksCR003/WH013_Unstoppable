import React from "react";
import PieChartAudio from "../PieChart/PieChartAudio";
import PieChartVideo from "../PieChart/PieChartVideo";

const Report = ({ responseData }) => {
  return (
    <div className="border my-3 border-[#404040] rounded-xl w-9/12 bg-white">
      <h1 className="text-2xl py-3 font-bold tracking-tight text-grad-2 sm:text-4xl">
        Report
      </h1>
      <p>{responseData?.text}</p>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center py-4">
          <PieChartAudio audio={responseData?.audio} />
          <p className="text-xl font-semibold">Audio Analysis</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <PieChartVideo video={responseData?.video} />
          <p className="text-xl font-semibold">Video Analysis</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <PieChartAudio audio={responseData?.audio} />
          <p className="text-xl font-semibold">Audio Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
