import React from "react";
import VideoDisplay from "../component/videoDisplay/VideoDisplay.jsx";

const Employee = () => {
  return (
    <div className="flex relative items-center justify-center flex-col h-max mb-5">
      <p className="text-center text-2xl my-2 font-bold">
        Upload the Video here
      </p>
      <VideoDisplay />
      <div className="my-4"></div>
    </div>
  );
};

export default Employee;
