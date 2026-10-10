"use client";
import Link from "next/link";
import GradientWaves from "@/components/GradientWaves";
import LoadingScreen from "@/components/loadingScreen";
import OptionWheel from "@/components/OptionWheel";
import GithubActivity from "@/components/GithubActivity";
import AboutHeading from "@/components/AboutHeading";
import { useEffect, useRef, useState } from "react";
import { FaJava, FaAws, FaPalette, FaVideo, FaCode, FaCodeBranch} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiGit,
  SiGithub,
  SiVercel,
  SiAndroidstudio,
} from "react-icons/si";

export default function Home() {
  const [showTools, setShowTools] = useState(false);
  const [showResumes, setShowResumes] = useState(false);

  const [imageVisible, setImageVisible] = useState(false);
  const homeRef = useRef<HTMLElement | null>(null);

  const [typedFirstName, setTypedFirstName] = useState("");
  const [typedLastName, setTypedLastName] = useState("");
  const [result, setResult] = useState("");
  
const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  formData.append(
    "access_key",
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
  );

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Message sent successfully!");
    form.reset();
  } else {
    setResult("Something went wrong. Please try again.");
  }
};

useEffect(() => {
  const firstName = "Ranjana";
  const lastName = "Gayatri B";

  let i = 0;
  let j = 0;

  const firstTimer = setInterval(() => {
    setTypedFirstName(firstName.slice(0, i + 1));
    i++;

    if (i === firstName.length) {
      clearInterval(firstTimer);

      setTimeout(() => {
        const lastTimer = setInterval(() => {
          setTypedLastName(lastName.slice(0, j + 1));
          j++;

          if (j === lastName.length) {
            clearInterval(lastTimer);
          }
        }, 150);
      }, 300);
    }
  }, 150);

  return () => clearInterval(firstTimer);
}, []);

  /* =========================
     ANIME IMAGE REPLAY
  ========================== */
  useEffect(() => {
    const section = homeRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation
          setImageVisible(false);

          // Start animation again
          setTimeout(() => {
            setImageVisible(true);
          }, 50);
        } else {
          // Reset when leaving the section
          setImageVisible(false);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* =========================
          LOADING SCREEN
      ========================== */}
      <LoadingScreen />

      {/* =========================
          MAIN PORTFOLIO
      ========================== */}
      <main className="min-h-screen bg-black text-white">

        {/* =========================
            PAGE 1 — HERO
        ========================== */}
        <section
          ref={homeRef}
          className="relative flex min-h-screen items-center overflow-hidden px-6"
        >

          {/* Gradient Waves Background — UNCHANGED */}
          <div className="absolute inset-0 z-0">
            <GradientWaves
              horizonColor="#5227FF"
              waveColor="#FF9FFC"
              crestColor="#FFFFFF"
              speed={0.4}
              amplitude={2.5}
              waveScale={0.6}
              waveRatio={0.9}
              swell={35}
              turbulence={20}
              tilt={1.11}
              zoom={1}
              height={5.5}
              fogDepth={15}
              detail="medium"
              brightness={1}
              opacity={1}
              mouseInteraction
              parallaxStrength={0.5}
              grain
              grainIntensity={0.05}
            />
          </div>

          {/* Dark overlay — UNCHANGED */}
          <div className="absolute inset-0 z-[1] bg-black/30" />

          {/* CONNECT */}
          <Link
  href="#contact"
  className="group absolute right-8 top-8 z-30 overflow-hidden rounded-full border border-purple-400/40 bg-purple-500/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
>
  <span className="relative z-10">Let's Connect</span>

  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
</Link>

          {/* MAIN HERO */}
          <div className="relative z-10 mx-auto min-h-screen w-full max-w-7xl">

            {/* LEFT TEXT CONTENT */}
            <div className="absolute left-0 top-1/2 z-20 w-[48%] -translate-y-1/2">

              {/* Small heading */}
              <p className="mb-7 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                Hello, I'm
              </p>

              {/* NAME */}
              <h1 className="mt-10 text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
                <span className="block">
                  {typedFirstName}
                </span>

                <span className="mt-2 block text-gray-300">
                  {typedLastName}
                </span>
              </h1>

              {/* ROLE */}
              <h2 className="mt-10 text-xl font-medium text-white md:text-2xl">
                Software Developer
              </h2>

              {/* ROTATING ROLE */}
              <div className="mt-3 h-7 overflow-hidden text-base text-gray-400 md:text-lg">
                <div className="home-role-animation">

                  <div className="h-7">
                    AI & Full-Stack Development
                  </div>

                  <div className="h-7">
                    FreeLancer
                  </div>

                  <div className="h-7">
                    Cloud & DevOps
                  </div>

                  <div className="h-7">
                    Content Creator
                  </div>

                  <div className="h-7">
                    AI & Full-Stack Development
                  </div>

                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 w-[320px] text-base leading-8 text-gray-300 md:w-[350px] md:text-lg">
                I build digital experiences that blend
                <br />
                technology, AI, design, and creativity.
                <br />
                Turning ideas into meaningful digital experiences.
              </p>
              <Link
                href="#projects"
                className="mt-7 inline-block rounded-2xl bg-white px-8 py-4 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                Explore My Work
              </Link>

            </div>


            {/* CENTER — ANIME IMAGE */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2">

              <img
                src="projects/anime.png"
                alt="Ranjana"
                className={`anime-reveal ${
                  imageVisible ? "play" : ""
                } h-[440px] w-auto object-contain md:h-[580px]`}
              />

            </div>


            {/* RIGHT — BUTTONS */}
            <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-end gap-5">

              {/* RESUME */}
              <div className="relative">

                <button
                  onClick={() => setShowResumes(!showResumes)}
                  className="rounded-2xl border border-purple-400/40 bg-purple-500/10 px-10 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/20"
                >
                  Resume
                </button>

                {showResumes && (
                  <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">

                    <a
                      href="/resumes/Developer-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl px-4 py-4 transition hover:bg-purple-500/10"
                    >
                      <p className="text-sm font-medium text-white">
                        Developer Resume
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Software & Full-Stack
                      </p>
                    </a>

                    <a
                      href="/resumes/Content-Creator-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl px-4 py-4 transition hover:bg-purple-500/10"
                    >
                      <p className="text-sm font-medium text-white">
                        Content Creator Resume
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Creative & Content
                      </p>
                    </a>

                  </div>
                )}

              </div>

              {/* EXPLORE + ABOUT */}
              <div
                className={`flex flex-col items-end gap-3 transition-all duration-300 ${
                  showResumes ? "mt-[150px]" : "mt-0"
                }`}
              >

                <Link
                  href="#about-me"
                  className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10"
                >
                  About Me
                </Link>

              </div>

            </div>

          </div>
          {/* SCROLL DOWN INDICATOR */}
          <Link
            href="#about-me"
            className="group absolute bottom-8 right-8 z-30 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300/70 transition-colors duration-300 group-hover:text-purple-300">
              Scroll
            </span>

            <span className="flex h-10 w-6 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 backdrop-blur-md transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <span className="scroll-arrow text-purple-400">
                ↓
              </span>
            </span>
          </Link>

        </section>


        {/* =====================================================
            PAGES 2–8
            OPTION WHEEL + CONTENT
        ====================================================== */}
        <div className="relative">

          {/* =================================================
              LEFT — STICKY OPTION WHEEL

              This starts ONLY from About Me.
              It does NOT affect the hero section.
          ================================================== */}
          <div className="pointer-events-none absolute left-0 top-0 z-30 hidden h-full w-[500px] lg:block">

            <div className="sticky top-0 flex h-screen w-[500px] items-center justify-center">

              {/* Purple glow */}
              <div className="absolute h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

              {/* Option Wheel
                  SIZE KEPT EXACTLY 500 × 500 */}
              <div className="pointer-events-auto relative z-10 h-[500px] w-[500px]">
                <OptionWheel />
              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — ALL SECTIONS
          ================================================== */}
          <div className="lg:ml-[500px]">

            {/* =========================
                PAGE 2 — ABOUT ME
            ========================== */}
            <section
              id="about-me"
              className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden bg-black px-6 py-32 lg:px-16"
            >
              <div className="w-full max-w-6xl">
                <AboutHeading />

                {/* Introduction */}
                <div className="mt-8 max-w-3xl">
                  <p className="text-lg leading-8 text-gray-400">
                    I’m a Computer Science Engineering student and aspiring software
                    developer who enjoys turning ideas into meaningful digital
                    experiences. I’m passionate about web development, problem solving,
                    and building projects that combine technology with creativity.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-gray-400">
                    I enjoy learning new technologies, experimenting with ideas, and
                    continuously improving the way I build and design. From developing
                    full-stack applications to exploring creative content, I like
                    bringing both technical and creative thinking into my work.
                  </p>
                </div>

    {/* Connect */}
    <div className="mt-12 max-w-md space-y-5">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ranjana-gayatri-b9234329a"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between border-b border-white/10 pb-5 text-gray-300 transition hover:text-white"
      >
        <span className="text-lg">
          LinkedIn
        </span>

        <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-purple-400">
          ↗
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/_rxnju._?stkn=MTY3MXY3dDB6NGZocQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between border-b border-white/10 pb-5 text-gray-300 transition hover:text-white"
      >
        <span className="text-lg">
          Instagram
        </span>

        <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-purple-400">
          ↗
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:ranjanagayatri410@gmail.com"
        className="group flex items-center justify-between border-b border-white/10 pb-5 text-gray-300 transition hover:text-white"
      >
        <span className="text-lg">
          Email
        </span>

        <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-purple-400">
          ↗
        </span>
      </a>

    </div>

  </div>
</section>


            {/* =========================
                PAGE 3 — FULL STACK DEVELOPMENT
            ========================== */}
            <section
  id="full-stack-development"
  className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden bg-black px-6 py-32 lg:px-16"
>
  <div className="w-full max-w-6xl">

    <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
      Building from frontend to backend.
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
      I build complete digital experiences by connecting intuitive interfaces,
      powerful backend systems, databases, APIs, and AI-driven functionality.
    </p>

    {/* Stats */}
    <div className="mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40">
        <div className="text-4xl font-bold text-white">1+</div>
        <p className="mt-2 text-sm text-gray-400">
          Year Experience
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40">
        <div className="text-4xl font-bold text-white">5+</div>
        <p className="mt-2 text-sm text-gray-400">
          Projects Built
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40">
        <div className="text-4xl font-bold text-white">AI</div>
        <p className="mt-2 text-sm text-gray-400">
          Intelligent Solutions
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40">
        <div className="text-4xl font-bold text-white">E2E</div>
        <p className="mt-2 text-sm text-gray-400">
          Development
        </p>
      </div>

    </div>

    {/* Development flow */}
    <div className="mt-16">
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-gray-500">
        How I Build
      </p>

      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
          Idea
        </span>

        <span className="text-purple-400">→</span>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
          Design
        </span>

        <span className="text-purple-400">→</span>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
          Develop
        </span>

        <span className="text-purple-400">→</span>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
          Integrate
        </span>

        <span className="text-purple-400">→</span>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
          Test
        </span>

        <span className="text-purple-400">→</span>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
          Deploy
        </span>
      </div>
    </div>

  </div>
</section>


            {/* =========================
    PAGE 4 — PROJECTS
========================== */}
<section
  id="projects"
  className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden bg-black px-6 py-32 lg:px-16"
>
  <div className="w-full max-w-6xl lg:ml-auto lg:max-w-5xl">

    {/* Heading */}
    <div className="mb-14">
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
        Things I've built.
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
        Explore my software, AI, accessibility, and web development projects.
      </p>
    </div>


    {/* =========================
        PROJECTS
    ========================== */}
    <div className="space-y-10">


      {/* =========================
          PROJECT 01 — AI-HUB
      ========================== */}
      <a
        href="https://ai-accessibility-hub-ecru.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* Website Preview */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-purple-400/40">

          <img
            src="/projects/ai-hub.png"
            alt="AI Accessibility Hub project preview"
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40">
            <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
              View Project ↗
            </span>
          </div>

        </div>


        {/* Project information */}
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-purple-400">
              01 — AI Accessibility Hub
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              AI Accessibility Hub
            </h3>

            <p className="mt-2 max-w-xl text-gray-400">
              AI-powered tools for a more accessible digital experience.
            </p>
          </div>

          <div className="flex gap-2 text-xs text-gray-500">
            <span>WCAG</span>
            <span>•</span>
            <span>AI-Powered</span>
            <span>•</span>
            <span>Multilingual</span>
          </div>

        </div>

      </a>


      {/* =========================
          PROJECT 02 — PORTFOLIO
      ========================== */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* Website Preview */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-purple-400/40">

          <img
            src="/projects/Personal Portfolio.png"
            alt="Personal portfolio project preview"
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40">
            <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
              View Project ↗
            </span>
          </div>

        </div>


        {/* Project information */}
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-purple-400">
              02 — Personal Portfolio
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Personal Portfolio
            </h3>

            <p className="mt-2 max-w-xl text-gray-400">
              A modern interactive portfolio designed and developed from scratch to showcase my work, skills, and projects.
            </p>
          </div>

          <div className="flex gap-2 text-xs text-gray-500">
            <span>JavaScript</span>
            <span>•</span>
            <span>CSS</span>
            <span>•</span>
            <span>TSX</span>
          </div>

        </div>

      </a>

      {/* ==============================
          PROJECT 03 — HINDI WITH GEETHA
      ================================== */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* Website Preview */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-purple-400/40">

          <img
            src="/projects/Hindi with Geetha.png"
            alt="Hindi with Geetha educational website preview"
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40">
            <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
              Coming Soon !!
            </span>
          </div>
        </div>

        {/* Project information */}
        <div className="mt-5 flex flex-col gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-purple-400">
              03 — Educational Web Development
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Hindi with Geetha
            </h3>

            <p className="mt-2 max-w-xl text-gray-400">
              An interactive educational website designed to make Hindi learning
              more accessible through a clean interface, engaging learning features,
              and responsive design.
            </p>
          </div>

          <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-500">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </a>


      {/* =========================
          PROJECT 04 — AGROSENSE
      ========================== */}
      <a
        href="https://agro-sense-flax.vercel.app/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* Website Preview */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-purple-400/40">

          <img
            src="/projects/agrosense.png"
            alt="AgroSense project preview"
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40">
            <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
              View Project ↗
            </span>
          </div>

        </div>


        {/* Project information */}
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-purple-400">
              04 — AgroSense
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              AgroSense
            </h3>

            <p className="mt-2 max-w-xl text-gray-400">
              Smart technology for a more connected and efficient agriculture experience.
            </p>
          </div>

          <div className="flex gap-2 text-xs text-gray-500">
            <span>AI</span>
            <span>•</span>
            <span>Web</span>
            <span>•</span>
            <span>Smart Agriculture</span>
          </div>

        </div>

      </a>


    </div>

  </div>
</section>


            {/* =========================
                PAGE 5 — CREATIVE & CONTENT
            ========================== */}
            <section
  id="creative-content"
  className="min-h-screen bg-black px-6 py-32"
>
  <div className="mx-auto max-w-6xl">

    {/* Section Heading */}
    <div className="mb-16 max-w-2xl">
      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
        Technology meets creativity.
      </h2>

      <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg">
        My work in content creation, social media, visual communication,
        branding, and creative digital experiences.
      </p>
    </div>


    {/* Creative Cards */}
    <div className="grid gap-4 md:grid-cols-2">

      {/* Content Creation */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
        <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
          <span className="text-lg">✦</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Content Creation
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Creating engaging content through storytelling, ideas,
          visuals, and digital media.
        </p>
      </div>


      {/* Social Media */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
        <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
          <span className="text-lg">◎</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Social Media
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Creating social media content, event promotions,
          campaigns, and digital communication.
        </p>
      </div>


      {/* Visual Communication */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
        <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
          <span className="text-lg">◈</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Visual Communication
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Posters, graphics, visual storytelling, and creative
          communication designed to capture attention.
        </p>
      </div>


      {/* Creative Experiences */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
        <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
          <span className="text-lg">⌁</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Creative Experiences
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Exploring branding, video, AI-assisted creativity,
          and interactive digital experiences.
        </p>
      </div>

    </div>
    {/* YouTube Channel */}
<div className="mt-16">

  <a
    href="https://www.youtube.com/@ranzverse"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Ranzverse YouTube Channel"
    className="group relative block overflow-hidden rounded-[2rem] border border-white/10"
  >

    {/* Channel Banner */}
    <img
      src="projects/ChannelBanner.jpg"
      alt="Ranzverse YouTube Channel"
      className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
    />

    {/* Dark Hover Overlay */}
    <div
      className="
        absolute inset-0
        flex items-center justify-center
        bg-black/0
        transition-all duration-500
        group-hover:bg-black/45
      "
    >

      {/* View YouTube Button */}
      <div
        className="
          translate-y-4
          rounded-full
          bg-white
          px-9 py-5
          font-serif
          text-xl
          text-black
          opacity-0
          shadow-xl
          transition-all duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        View YouTube Channel ↗
      </div>

    </div>

  </a>

</div>

  </div>
</section>


            {/* =========================
                PAGE 6 — SKILLS & TOOLS
            ========================== */}
              <section
  id="skills-tools"
  className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden bg-black px-6 py-32 lg:px-16"
>
  <div className="w-full max-w-6xl">

    <div className="mt-4 flex items-center gap-3">
  <h2 className="text-3xl font-bold leading-none text-white md:text-5xl">
    I’m driven to
  </h2>

  <div className="relative top-[3px] h-[1.1em] overflow-hidden text-3xl font-bold leading-none text-purple-400 md:text-5xl">
    <div className="animate-word-swipe">
      <div className="h-[1.1em] leading-none">Create</div>
      <div className="h-[1.1em] leading-none">Explore</div>
      <div className="h-[1.1em] leading-none">Build</div>
      <div className="h-[1.1em] leading-none">Evolve</div>
      <div className="h-[1.1em] leading-none">Create</div>
    </div>
  </div>
</div>

    {/* Explore Button */}
    <button
      onClick={() => setShowTools(!showTools)}
      className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/10"
    >
      <span>
        {showTools ? "Hide my toolkit" : "Explore my toolkit"}
      </span>

      <span
        className={`text-xl leading-none transition-transform duration-300 ${
          showTools ? "rotate-45" : ""
        }`}
      >
        +
      </span>
    </button>

    {/* Tools */}
    <div
      className={`grid transition-all duration-700 ease-in-out ${
        showTools
          ? "mt-16 grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">

          {/* Programming */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Programming
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Java", icon: FaJava },
                { name: "JavaScript", icon: SiJavascript },
                { name: "DSA", icon: null },
                { name: "SQL", icon: null },
              ].map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/[0.08] hover:text-white"
                >
                  {Icon && <Icon className="text-lg" />}
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Web Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "HTML", icon: SiHtml5 },
                { name: "CSS", icon: SiCss },
                { name: "React.js", icon: SiReact },
                { name: "Vite", icon: SiVite },
              ].map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/[0.08] hover:text-white"
                >
                  <Icon className="text-lg" />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* UI & Styling */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                UI & Styling
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Tailwind CSS", icon: SiTailwindcss },
              ].map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/[0.08] hover:text-white"
                >
                  <Icon className="text-lg" />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Backend & Database
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "FastAPI", icon: SiFastapi },
                { name: "PostgreSQL", icon: SiPostgresql },
              ].map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/[0.5] hover:bg-purple-500/[0.08] hover:text-white"
                >
                  <Icon className="text-lg" />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Cloud & DevOps
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "AWS", icon: FaAws },
                { name: "Amazon S3", icon: FaAws },
                { name: "Amazon EC2", icon: FaAws },
                { name: "Amazon IAM", icon: FaAws },
                { name: "DevOps", icon: null },
                { name: "Docker", icon: SiDocker },
                { name: "Jenkins", icon: SiJenkins },
                { name: "CI/CD", icon: null },
              ].map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/[0.08] hover:text-white"
                >
                  {Icon && <Icon className="text-lg" />}
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Development & Deployment */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Development & Deployment
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "Vercel", icon: SiVercel },
                { name: "VS Code", icon: FaCode },
                { name: "Android Studio", icon: SiAndroidstudio },
              ].map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/[0.08] hover:text-white"
                >
                  <Icon className="text-lg" />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Creative Tools */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Creative Tools
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Canva", icon: FaPalette },
                { name: "CapCut", icon: FaVideo },
              ].map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/[0.08] hover:text-white"
                >
                  <Icon className="text-lg" />
                  {name}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>

    {/* GitHub Activity — ALWAYS AFTER THE TOOLKIT */}
    <GithubActivity />

  </div>
</section>
            {/* =========================
                PAGE 7 — ACHIEVEMENTS
            ========================== */}
<section
  id="achievements"
  className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden bg-black px-6 py-32 lg:px-16"
>
  <div className="w-full max-w-6xl">
    <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
      Milestones & achievements.
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
      A collection of my certifications, competitions, leadership
      experiences, internships, and other milestones.
    </p>

    {/* Certificates */}
    <div className="mt-16 grid gap-8 md:grid-cols-2">

      {/* VDart Internship */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/VDart Intern.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/VDart Intern.png"
            alt="VDart Internship Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            VDart Internship
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Internship Certificate
          </p>
        </div>
      </div>

      {/* AWS S3 */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/Aws-S3.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/Aws-S3.png"
            alt="AWS S3 Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            AWS S3
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            AWS Certification
          </p>
        </div>
      </div>

      {/* AWS EC2 */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/Aws-EC2.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/Aws-EC2.png"
            alt="AWS EC2 Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            AWS EC2
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            AWS Certification
          </p>
        </div>
      </div>

      {/* AWS IAM */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/Aws-IAM.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/Aws-Lambda.png"
            alt="AWS IAM Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            AWS IAM
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            AWS Certification
          </p>
        </div>
      </div>

      {/* AWS Lambda */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/Aws-Lambda.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/Aws-Lambda.png"
            alt="AWS Lambda Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            AWS Lambda
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            AWS Certification
          </p>
        </div>
      </div>

      {/* Cloud Computing 101 */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/Cloud-Computing-101.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/Cloud-Computing-101.png"
            alt="Cloud Computing 101 Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            Cloud Computing 101
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Cloud Computing Certification
          </p>
        </div>
      </div>

      {/* NPTEL - Soft Skills */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/Nptel-SoftSkill Development.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/Nptel-SoftSkill Development.png"
            alt="NPTEL Soft Skill Development Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            NPTEL – Soft Skill Development
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            NPTEL Certification
          </p>
        </div>
      </div>

      {/* NPTEL - Soft Skills */}
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
        <a
          href="/projects/Nptel - SoftSkills.png"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 overflow-hidden bg-black"
        >
          <img
            src="/projects/Nptel - SoftSkills.png"
            alt="NPTEL Soft Skills Certificate"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-5 transition-all duration-300 group-hover:bg-black/50">
            <span className="translate-y-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-3 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Certificate
            </span>
          </div>
        </a>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">
            NPTEL – Soft Skills
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            NPTEL Certification
          </p>
        </div>
      </div>

    </div>
  </div>
</section>




            {/* =========================
    PAGE 8 — CONTACT
========================== */}
<section
      id="contact"
      className="min-h-screen bg-black px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            CONTACT INTRO
        ========================== */}
        <div className="mb-20">

          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Have an Idea?
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
            Let's Build
            <br />
            <span className="text-gray-400">
              Something Meaningful.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            Whether you have a digital product in mind, need a technology
            solution, want to collaborate on a creative idea, or simply
            want to build something interesting together — let's talk.
          </p>

          {/* Availability */}
          <div className="mt-10 flex items-center gap-4">

            {/* Glowing dot */}
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-60" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_16px_rgba(168,85,247,0.9)]" />
            </span>

            {/* Line */}
            <span className="h-px w-12 bg-gradient-to-r from-purple-400/70 to-white/10" />

            <span className="text-sm text-gray-400 md:text-base">
              Currently available for new projects and collaborations
            </span>

          </div>

        </div>


        {/* =========================
            CONTACT LAYOUT
        ========================== */}
        <div className="grid gap-16 md:grid-cols-2">


          {/* =========================
              LEFT — CONTACT FORM
          ========================== */}
          <div>

            <form
              onSubmit={onSubmit}
              className="space-y-7"
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-gray-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400"
                />

              </div>


              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-gray-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400"
                />

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400"
                />

              </div>


              {/* Send button */}
              <button
                type="submit"
                className="mt-4 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:-translate-y-1 hover:bg-purple-400"
              >
                Send Message
              </button>


              {/* Result message */}
              {result && (
                <p className="mt-4 text-sm text-purple-300">
                  {result}
                </p>
              )}

            </form>

          </div>


          {/* =========================
              RIGHT — SOCIAL LINKS
          ========================== */}

        </div>

      </div>
    </section>
{/* Footer */}
<div className="absolute bottom-6 left-0 w-full text-center">
  <p className="text-xs tracking-wide text-gray-600">
    © 2026 Ranjana Gayatri · Built with curiosity & code.
  </p>
</div>
          </div>

        </div>
        
      </main>
    </>
  );
}
