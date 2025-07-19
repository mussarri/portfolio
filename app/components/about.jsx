import React from "react";

const about = () => {
  return (
    <div className="max-width p-4 pl-[50px]">
      <section id="about">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5">
          <div
            className="group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="h-full">
              <div className="absolute h-full w-full">
                <img
                  alt="/b1.svg"
                  loading="lazy"
                  width="689"
                  height="541"
                  decoding="async"
                  className="object-cover object-center w-full h-full"
                  style={{ color: "transparent" }}
                  src="/b1.svg"
                />
              </div>
              <div className="absolute right-0 -mb-5"></div>
              <div className="relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10 justify-end">
                <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base"></div>
                <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                  I prioritize client collaboration, fostering open
                  communication{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none lg:col-span-2 md:col-span-3 md:row-span-2"
            style={{
              background:
                "rgb(4,7,29);background-color:linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="h-full">
              <div className="absolute h-full w-full"></div>
              <div className="absolute right-0 -mb-5"></div>
              <div className="relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10 justify-start">
                <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base"></div>
                <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                  I'm very flexible with time zone communications
                </div>
                <div className="absolute -left-5 top-36 flex h-full w-full items-center justify-center md:top-40">
                  <div className="relative mx-auto h-96 w-full max-w-7xl overflow-hidden px-4">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full select-none bg-gradient-to-b from-transparent to-white dark:to-black"></div>
                    <div className="absolute z-10 h-72 w-full md:h-full">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          pointerEvents: "auto",
                          touchAction: "none",
                        }}
                      >
                        <div style={{ width: "100%", height: "100%" }}>
                          <canvas
                            style={{
                              display: "block",
                              width: "491.467px",
                              height: "384px",
                              touchAction: "auto",
                            }}
                            dataengine="three.js r164"
                            width="737"
                            height="576"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none lg:col-span-2 md:col-span-3 md:row-span-2"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="h-full">
              <div className="absolute h-full w-full"></div>
              <div className="absolute right-0 -mb-5"></div>
              <div className="relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10 justify-center">
                <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
                  I constantly try to improve
                </div>
                <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                  My tech stack
                </div>
                <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
                  <div className="flex flex-col gap-3 lg:gap-8">
                    <span className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                      React.js
                    </span>
                    <span className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                      Next.js
                    </span>
                    <span className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                      Typescript
                    </span>
                    <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center"></span>
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-8">
                    <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center"></span>
                    <span className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                      PHP
                    </span>
                    <span className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                      SQL
                    </span>
                    <span className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none lg:col-span-2 md:col-span-3 md:row-span-1"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="h-full">
              <div className="absolute h-full w-full">
                <img
                  alt="/grid.svg"
                  loading="lazy"
                  width="689"
                  height="541"
                  decoding="async"
                  className="object-cover object-center"
                  style={{ color: "transparent" }}
                  src="/grid.svg"
                />
              </div>
              <div className="absolute right-0 -mb-5">
                <img
                  alt="/b4.svg"
                  loading="lazy"
                  width="208"
                  height="96"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                  style={{ color: "transparent" }}
                  src="/b4.svg"
                />
              </div>
              <div className="relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10 justify-start">
                <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base"></div>
                <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                  Tech enthusiast with a passion for development.
                </div>
              </div>
            </div>
          </div>
          <div
            className="group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none md:col-span-3 md:row-span-2"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="h-full">
              <div className="absolute h-full w-full rounded-lg opacity-50">
                <img
                  alt="/b5.svg"
                  loading="lazy"
                  width="689"
                  height="541"
                  decoding="async"
                  className="object-cover object-center absolute right-0 bottom-0 md:w-96 w-60 rounded-lg border"
                  style={{ color: "transparent" }}
                  src="/4725691.jpg"
                />
              </div>
              <div className="absolute right-0 -mb-5 w-full opacity-80">
                <img
                  alt="/grid.svg"
                  loading="lazy"
                  width="208"
                  height="96"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                  style={{ color: "transparent" }}
                  src="/grid.svg"
                />
              </div>
              <div className="relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10 justify-center md:justify-start lg:justify-center">
                <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
                  The Inside Scoop
                </div>
                <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                  Currently building a AR Application
                </div>
              </div>
            </div>
          </div>
          <div
            className="group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none lg:col-span-2 md:col-span-3 md:row-span-1"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="h-full flex justify-center">
              <div className="absolute h-full w-full"></div>
              <div className="absolute right-0 -mb-5"></div>
              <div className="absolute left-0 top-0 h-full w-full overflow-hidden gradien-project">
                <svg className="hidden">
                  <defs>
                    <filter id="blurMe">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                      ></feGaussianBlur>
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                        result="goo"
                      ></feColorMatrix>
                      <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                  </defs>
                </svg>
                <div className=""></div>
                <div className="gradients-container h-full w-full blur-lg [filter:url(#blurMe)_blur(40px)]">
                  <div className="absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)] [transform-origin:center_center] animate-first opacity-100"></div>
                  <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-400px)] animate-second opacity-100"></div>
                  <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+400px)] animate-third opacity-100"></div>
                  <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"></div>
                  <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"></div>
                  <div
                    className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] -left-1/2 -top-1/2 h-full w-full [mix-blend-mode:var(--blending-value)] opacity-70"
                    style={{ transform: "translateX(0)" }}
                  ></div>
                </div>
              </div>
              <div className="relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10 justify-center md:max-w-full max-w-60 text-center">
                <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base"></div>
                <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                  Do you want to start a project together?
                </div>
                <div className="group relative mt-5">
                  <button
                    tabIndex="-1"
                    className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        margin: "0 auto",
                        outline: "none",
                      }}
                      title=""
                      role="button"
                      aria-label="animation"
                      tabIndex="0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        width="512"
                        height="512"
                        style={{
                          width: "100%",
                          height: "100%",
                          transform: "translate3d(0px, 0px, 0px)",
                          contentVisibility: "visible",
                        }}
                        preserveAspectRatio="xMidYMid slice"
                      >
                        <defs>
                          <clipPath id="__lottie_element_2">
                            <rect width="512" height="512" x="0" y="0"></rect>
                          </clipPath>
                        </defs>
                        <g clipPath="url(#__lottie_element_2)">
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style={{ display: "none" }}>
                            <g>
                              <path
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                  <button
                    className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60"
                    tabIndex="-1"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl !bg-[#161a31]">
                      Copy my email
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
