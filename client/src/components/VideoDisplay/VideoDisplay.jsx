import React, { useState } from "react";

export default function VideoInput() {
  const inputRef = React.useRef();
  const [source, setSource] = React.useState();
  const [uploaded, setUploaded] = useState(false);
  const handleFileChange = (event) => {
    const { innerWidth, innerHeight } = window;
    const file = event.target.files[0];
    setSource(file);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("file", source);
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        if (response.status === 200) {
          setUploaded(true);
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
      });
  };

  return (
    <div className="VideoInput flex flex-col items-center mb-10">
      <input
        ref={inputRef}
        type="file"
        className="relative m-auto block mobile:w-[50vw] md:w-[25vw] min-w-0 flex-auto rounded border border-solid border-neutral-800 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-600 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {source && (
        <video
          className="VideoInput_video border-2 my-3 border-gray-600 rounded-xl"
          width={innerWidth < 600 ? "85%" : "60%"}
          controls
          src={source}
        />
      )}
      {/* <div className="VideoInput_footer">{source || "Nothing selected"}</div> */}
      <p className={`${uploaded ? "flex" : "hidden"}`}>
        Video uploaded successfully !
      </p>
      {source ? (
        <button
          onClick={onSubmit}
          className="bg-[#404040] px-4 py-1.5 text-white mobile:rounded-xl md:rounded-sm md:my-2 mobile:my-1"
        >
          Submit
        </button>
      ) : null}
    </div>
  );
}
