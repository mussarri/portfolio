import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto">
      <h1 className="heading">
        A small selection of{/* */}{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        <div className="project">
          <div className="group/pin relative cursor-pointer">
            <div className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
              <div
                style={{ transform: "translate(-50%,-50%) rotateX(0deg)" }}
                className="absolute left-1/2 top-1/2 flex  items-start justify-start overflow-hidden  rounded-2xl  border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2]"
              >
                <div className="relative z-50">
                  <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[500px]">
                    <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                      <img
                        alt="bg-img"
                        loading="lazy"
                        width={552}
                        height={330}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2Fbg.png&w=640&q=75 1x, /_next/image?url=%2Fbg.png&w=1200&q=75 2x"
                        src="/_next/image?url=%2Fbg.png&w=1200&q=75"
                      />
                    </div>
                    <img
                      alt="FigPro - Collaborative Design Tool"
                      loading="lazy"
                      width={464}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      className="absolute bottom-0 z-10"
                      style={{ color: "transparent" }}
                      src="/p1.svg"
                    />
                  </div>
                  <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                    FigPro - Collaborative Design Tool
                  </h1>
                  <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                    A collaborative design tool with real-time collaboration,
                    vector editing, and a responsive UI.
                  </p>
                  <div className="mb-3 mt-7 flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-0px)" }}
                      >
                        <img
                          alt="/re.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/re.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-10px)" }}
                      >
                        <img
                          alt="/tail.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/tail.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-20px)" }}
                      >
                        <img
                          alt="/ts.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/ts.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-30px)" }}
                      >
                        <img
                          alt="/three.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/three.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-40px)" }}
                      >
                        <img
                          alt="/fm.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/fm.svg"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex text-sm text-purple md:text-xs lg:text-xl"
                        href="https://github.com/sanidhyy/figma-clone"
                      >
                        Source Code
                      </a>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        className="ms-3"
                        color="#cbacf9"
                        style={{ color: "#cbacf9" }}
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-[60] flex h-80 w-full items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
              <div className="inset-0 -mt-7 h-full w-full flex-none">
                <div className="absolute inset-x-0 top-0 flex justify-center">
                  <a
                    target="_blank"
                    className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10"
                    href="https://clone-figmaa.netlify.app"
                  >
                    <span className="relative z-20 inline-block py-0.5 text-xs font-bold text-white">
                      Visit
                    </span>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40" />
                  </a>
                </div>
                <div
                  style={{
                    perspective: 1000,
                    transform: "rotateX(70deg) translateZ(0)",
                  }}
                  className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                    aria-hidden="true"
                    style={{
                      opacity: 0,
                      willChange: "opacity, transform",
                      transform:
                        "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.899769)",
                    }}
                  />
                  <div
                    className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                    aria-hidden="true"
                    style={{
                      opacity: 0,
                      willChange: "opacity, transform",
                      transform:
                        "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.578446)",
                    }}
                  />
                  <div
                    className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                    aria-hidden="true"
                    style={{
                      opacity: 0,
                      willChange: "opacity, transform",
                      transform:
                        "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.118887)",
                    }}
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40  "
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="group/pin relative z-50 cursor-pointer">
            <div
              style={{
                perspective: 1000,
                transform: "rotateX(70deg) translateZ(0deg)",
              }}
              className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="absolute left-1/2 top-1/2 flex  items-start justify-start overflow-hidden  rounded-2xl  border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2] project-hover">
                <div className="relative z-50">
                  <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[500px]">
                    <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                      <img
                        alt="bg-img"
                        loading="lazy"
                        width={552}
                        height={330}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="/_next/image?url=%2Fbg.png&w=640&q=75 1x, /_next/image?url=%2Fbg.png&w=1200&q=75 2x"
                        src="/_next/image?url=%2Fbg.png&w=1200&q=75"
                      />
                    </div>
                    <img
                      alt="Yoom - Video Conferencing App"
                      loading="lazy"
                      width={464}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      className="absolute bottom-0 z-10"
                      style={{ color: "transparent" }}
                      src="/p2.svg"
                    />
                  </div>
                  <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                    Yoom - Video Conferencing App
                  </h1>
                  <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                    Simplify your video conferencing experience with Yoom.
                    Seamlessly connect with colleagues and friends.
                  </p>
                  <div className="mb-3 mt-7 flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-0px)" }}
                      >
                        <img
                          alt="/next.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/next.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-10px)" }}
                      >
                        <img
                          alt="/tail.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/tail.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-20px)" }}
                      >
                        <img
                          alt="/ts.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/ts.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-30px)" }}
                      >
                        <img
                          alt="/stream.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/stream.svg"
                        />
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{ transform: "translateX(-40px)" }}
                      >
                        <img
                          alt="/c.svg"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="p-2"
                          style={{ color: "transparent" }}
                          src="/c.svg"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex text-sm text-purple md:text-xs lg:text-xl"
                        href="https://github.com/sanidhyy/zoom-clone"
                      >
                        Source Code
                      </a>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        className="ms-3"
                        color="#cbacf9"
                        style={{ color: "#cbacf9" }}
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-[60] flex h-80 w-full items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
              <div className="inset-0 -mt-7 h-full w-full flex-none">
                <div className="absolute inset-x-0 top-0 flex justify-center">
                  <a
                    target="_blank"
                    className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10"
                    href="https://clone-yoom.netlify.app"
                  >
                    <span className="relative z-20 inline-block py-0.5 text-xs font-bold text-white">
                      Visit
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
                    />
                  </a>
                </div>
                <div
                  style={{
                    perspective: 1000,
                    transform: "rotateX(70deg) translateZ(0)",
                  }}
                  className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                    aria-hidden="true"
                    style={{
                      opacity: 0,
                      willChange: "opacity, transform",
                      transform:
                        "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.899769)",
                    }}
                  />
                  <div
                    className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                    aria-hidden="true"
                    style={{
                      opacity: 0,
                      willChange: "opacity, transform",
                      transform:
                        "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.578446)",
                    }}
                  />
                  <div
                    className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                    aria-hidden="true"
                    style={{
                      opacity: 0,
                      willChange: "opacity, transform",
                      transform:
                        "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.118887)",
                    }}
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40  "
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
