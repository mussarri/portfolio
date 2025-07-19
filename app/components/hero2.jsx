import React from "react";

const hero = () => {
  return (
    <div className="max-width p-4 pl-[50px]">
      <div className="mt-[100px] flex flex-col relative">
        <div>
          {
            <img
              alt=""
              className="w-[150px] h-[150px] -ml-[50px] absolute"
              style={{
                filter: "invert(0.1)",
                zIndex: "-1",
              }}
              src="https://svgsilh.com/svg/26432.svg"
            ></img>
          }
          <p className="text-4xl font-semibold gradiant">Hey there!, I'm-</p>
        </div>
        <h2 className="text-9xl font-bold -ml-2">Mustafa Sari.</h2>
        <p className="text-3xl font-semibold mt-[50px] max-w-3xl">
          Full-Stack Developer.{" "}
          <span className="text-[#8F9094]">
            A self-taught developer with an interest in Computer Science.
          </span>
        </p>
      </div>
    </div>
  );
};

export default hero;
