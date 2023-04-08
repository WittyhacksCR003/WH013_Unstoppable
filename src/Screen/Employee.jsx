import React from "react";
import VideoDisplay from "../components/VideoDisplay/VideoDisplay";

const Employee = () => {
  return (
    <div className=" flex items-center justify-center flex-col h-[100vh]">
      <p className="text-center text-2xl my-2 font-bold">
        Upload the Video here
      </p>
      <VideoDisplay />
    </div>
  );
};

export default Employee;
