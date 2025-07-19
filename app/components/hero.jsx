import React from "react";

const hero = () => {
  return (
    <>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white grid-black dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
      <div className="relative z-10 mb-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic with Next.js
          </h2>
          <div className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl">
            <div className="my-4">
              <div className="leading-snug tracking-wide text-black dark:text-white">
                <div>
                  <span
                    className="text-white opacity-0"
                    style={{
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    Transforming{" "}
                  </span>
                  <span
                    className="text-white opacity-0"
                    style={{
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    Concepts{" "}
                  </span>
                  <span
                    className="text-white opacity-0"
                    style={{
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    into{" "}
                  </span>
                  <span
                    className="text-white opacity-0"
                    style={{
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    Seamless{" "}
                  </span>
                  <span
                    className="opacity-0 text-purple"
                    style={{
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    User{" "}
                  </span>
                  <span
                    className="opacity-0 text-purple"
                    style={{
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    Experiences{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I'm Mustafa, a Next.js developer based in Turkey.
          </p>
          <a className="md:mt-10" href="#about">
            <button
              className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60"
              tabIndex="-1"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
                Show my work
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default hero;
