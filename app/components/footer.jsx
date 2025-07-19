import React from "react";

const Projects = () => {
  return (
    <footer
      id="contact"
      className="mb-[100px] mt-10 pb-10 md:mb-auto w-full max-w-6xl mx-auto"
    >
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          alt="grid"
          loading="lazy"
          width="1260"
          height="863"
          decoding="async"
          className="h-full w-full opacity-50"
          style={{ color: "transparent" }}
          src="/footer-grid.svg"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let's discuss how I can help your achieve
          your goals.
        </p>
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-10"
          href="mailto:msaricicek99@gmail.com"
        >
          <button
            className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60"
            tabIndex="-1"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
              Let's get in touch
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
      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row mt-[120px]">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright ©{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
            href="#"
          >
            Musarri
          </a>{" "}
          <a
            className="underline"
            href="https://github.com/musarri/next-portfolio"
          >
            Source Code
          </a>
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-gray-500 social bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
            title="GitHub"
            href="https://github.com/musarri"
          >
            <img
              alt="profile-GitHub"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              style={{ color: "transparent" }}
              src="/git.svg"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-gray-500 bg-black-200 social bg-opacity-75 backdrop-blur-lg backdrop-filter"
            title="Twitter"
            href="https://twitter.com/musarri"
          >
            <img
              alt="profile-Twitter"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              style={{ color: "transparent" }}
              src="/twit.svg"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-gray-500 social bg-opacity-75 backdrop-blur-lg backdrop-filter"
            title="LinkedIn"
            href="https://www.linkedin.com/in/musarri"
          >
            <img
              alt="profile-LinkedIn"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              style={{ color: "transparent" }}
              src="/link.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Projects;
