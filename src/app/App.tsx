import image_IMG from '@/imports/IMG.png'
import image_Mock_1 from '@/imports/Mock-1.png'
import image_dox_mock from '@/imports/dox_mock.png'
import { useRef, useState } from "react";
import svgPaths from "../imports/Portfolio-2/svg-fr9kzdvg5s";
import imgRectangle3 from "../imports/Portfolio-2/40f25a6ccd0e70ec894c190c93754abe8851c7df.png";
import imgOverviewAiDoc from "../imports/image.png";
import imgOverviewDs from "../imports/image-1.png";
import imgOverviewHotel from "../imports/image-3.png";
import imgClientLogo1 from "../imports/5/50fc833a30cabcae57237d20bf1baecd645b2065.png";
import imgClientLogo2 from "../imports/5/8abf8933a74b64026d3be80344c131e42cb99cd4.png";
import imgClientBrisas from "../imports/5/2c90e21d887d8fcf058f60149b10f9e6b03e7710.png";
import svgClient from "../imports/5/svg-504w19x73l";
import { imgGroup as imgClientGroup } from "../imports/5/svg-fv5iu";
import pdfResume from "../imports/Resume_Abril_Rios.pdf";
import pdfCV from "../imports/CV_Abril_Rios.pdf";

// ─── Translations ────────────────────────────────────────────────────────────
const t = {
  en: {
    work: "Work",
    about: "About",
    playground: "Playground",
    name: "Abril Ríos",
    role: "Product Designer",
    tagline: "Designing digital products through strategy, usability, and visual thinking.",
    location: "Hidalgo",
    scrollExplore: "Scroll to explore",
    viewProjects: "View Projects",
    featuredWork: "Featured Work",
    selectedProjects: "Selected Projects",
    confidentiality: "Some professional work cannot be shared publicly due to confidentiality agreements.",
    card1Title: "AI Documentation Platform",
    card1Desc: "Designing a scalable documentation experience for AI-powered workflows.",
    card2Title: "Hotel Management Platform",
    card2Desc: "Streamlining hotel operations through a centralized management platform.",
    card3Title: "Enterprise Design System",
    card3Desc: "Building a scalable design foundation to support complex products.",
    aiDocBadge: "AI DOCUMENTATION TOOL",
    aiDocHeading: "Transforming code changes into actionable documentation through AI.",
    aiDocDesc: "Designed to automate software documentation by analyzing development workflows and helping engineering teams maintain accurate and scalable documentation.",
    challengeTitle: "The challenge",
    challengeDesc: "Manual documentation processes are time-consuming, inconsistent, and frequently become outdated.",
    roleTitle: "My Role",
    roleDesc: "I contributed to product discovery, user experience design, workflow definition, wireframing, prototyping, and visual design.",
    goalTitle: "The Goal",
    goalDesc: "Reduce documentation effort, improve knowledge sharing and help teams generate and maintain documentation with minimal friction.",
    backToProjects: "Back to projects",
    projectType: "Project Type",
    projectTypeVal: "AI Tool",
    myRole: "My Role",
    myRoleVal: "Product Designer",
    year: "Year",
    yearVal: "2025",
    overviewLabel: "Overview",
    contextChallenge: "Context & Challenge",
    process: "Process",
    outcomeLabel: "Outcome & Learnings",
    aboutLabel: "About",
    niceToMeet: "Nice to meet you",
    bio: (
      <>
        Product designer with 4+ years of experience creating digital products{" "}
        <strong>that balance business goals, user needs, and design quality.</strong>
        <br /><br />
        My background combines product strategy, UX, visual design and illustration,{" "}
        <strong>allowing me to approach problems from both analytical and creative perspectives.</strong>
      </>
    ),
    collaborations: "Collaborations",
    downloadResume: "Download Resume",
    footerCta: "Let's create something meaningful.",
    playgroundBeyond: "Beyond the Work",
    playgroundHeading: "Playground",
    playgroundDesc: "Concepts, experiments, and practice projects created to explore ideas, refine skills, and",
    playgroundDescBold: "stay creatively sharp.",
    playgroundEmpty: "Projects coming soon.",
  },
  es: {
    work: "Trabajo",
    about: "Sobre mí",
    playground: "Exploración",
    name: "Abril Ríos",
    role: "Diseñadora de Producto",
    tagline: "Diseñando productos digitales a través de estrategia, usabilidad y pensamiento visual.",
    location: "Hidalgo",
    scrollExplore: "Desplázate para explorar",
    viewProjects: "Ver Proyectos",
    featuredWork: "Trabajo Destacado",
    selectedProjects: "Proyectos Seleccionados",
    confidentiality: "Algunos trabajos profesionales no pueden compartirse públicamente debido a acuerdos de confidencialidad.",
    card1Title: "Plataforma de Documentación IA",
    card1Desc: "Diseñando una experiencia de documentación escalable para flujos de trabajo impulsados por IA.",
    card2Title: "Plataforma de Gestión Hotelera",
    card2Desc: "Optimizando las operaciones hoteleras mediante una plataforma de gestión centralizada.",
    card3Title: "Sistema de Diseño Empresarial",
    card3Desc: "Construyendo una base de diseño escalable para soportar productos complejos.",
    aiDocBadge: "HERRAMIENTA DE DOCUMENTACIÓN IA",
    aiDocHeading: "Transformando cambios de código en documentación accionable mediante IA.",
    aiDocDesc: "Diseñada para automatizar la documentación de software analizando flujos de trabajo de desarrollo y ayudando a los equipos de ingeniería a mantener una documentación precisa y escalable.",
    challengeTitle: "El desafío",
    challengeDesc: "Los procesos de documentación manual son lentos, inconsistentes y frecuentemente quedan desactualizados.",
    roleTitle: "Mi Rol",
    roleDesc: "Contribuí al descubrimiento de producto, diseño de experiencia de usuario, definición de flujos, wireframing, prototipado y diseño visual.",
    goalTitle: "El Objetivo",
    goalDesc: "Reducir el esfuerzo de documentación, mejorar el intercambio de conocimiento y ayudar a los equipos a generar y mantener documentación con mínima fricción.",
    backToProjects: "Volver a proyectos",
    projectType: "Tipo de Proyecto",
    projectTypeVal: "Herramienta IA",
    myRole: "Mi Rol",
    myRoleVal: "Diseñadora de Producto",
    year: "Año",
    yearVal: "2025",
    overviewLabel: "Resumen",
    contextChallenge: "Contexto y Desafío",
    process: "Proceso",
    outcomeLabel: "Resultados y Aprendizajes",
    aboutLabel: "Sobre mí",
    niceToMeet: "Encantada de conocerte",
    bio: (
      <>
        Diseñadora de producto con más de 4 años de experiencia creando productos digitales{" "}
        <strong>que equilibran objetivos de negocio, necesidades del usuario y calidad de diseño.</strong>
        <br /><br />
        Mi trayectoria combina estrategia de producto, UX, diseño visual e ilustración,{" "}
        <strong>lo que me permite abordar los problemas desde perspectivas analíticas y creativas.</strong>
      </>
    ),
    collaborations: "Colaboraciones",
    downloadResume: "Descargar CV",
    footerCta: "Creemos algo significativo juntos.",
    playgroundBeyond: "Más allá del trabajo",
    playgroundHeading: "Exploración",
    playgroundDesc: "Conceptos, experimentos y proyectos de práctica creados para explorar ideas, refinar habilidades y",
    playgroundDescBold: "mantener la creatividad activa.",
    playgroundEmpty: "Proyectos próximamente.",
  },
};

type Lang = "en" | "es";

// ─── Arrow icon shared ───────────────────────────────────────────────────────
function ArrowIcon({ color = "#5731ED" }: { color?: string }) {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1b9d1100} fill={color} />
    </svg>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [activePage, setActivePage] = useState<"home" | "playground">("home");
  const [activeTab, setActiveTab] = useState<"overview" | "context" | "process" | "outcome" | "designsystem">("overview");
  const [activeProject, setActiveProject] = useState<"ai-doc" | "hotel" | "design-system">("ai-doc");
  const tx = t[lang];

  const featuredRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const collaborationsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const openProject = (project: "ai-doc" | "hotel" | "design-system") => {
    setActiveProject(project);
    setActiveTab("overview");
    setTimeout(() => overviewRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = (ref?: React.RefObject<HTMLDivElement | null>) => {
    setActivePage("home");
    if (ref) setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  return (
    <div
      className="min-h-screen w-full font-['Inter',sans-serif] overflow-x-hidden"
      style={{
        backgroundImage: `
          url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 2224' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.44'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(23.1 9.317 -8.7353 21.973 6 0.000023056)'><stop stop-color='rgba(87,49,237,1)' offset='0'/><stop stop-color='rgba(108,75,239,0.875)' offset='0.125'/><stop stop-color='rgba(129,101,242,0.75)' offset='0.25'/><stop stop-color='rgba(171,152,246,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>"),
          url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 2224' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.29'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(21.3 28.707 -17.996 13.547 0.0000047194 117.34)'><stop stop-color='rgba(205,29,240,1)' offset='0'/><stop stop-color='rgba(211,57,242,0.875)' offset='0.125'/><stop stop-color='rgba(218,85,244,0.75)' offset='0.25'/><stop stop-color='rgba(230,142,248,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>"),
          linear-gradient(90deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)
        `,
      }}
    >
      {/* ── HEADER ── */}
      <header className="flex items-center justify-between px-[18px] md:px-[3%] py-5 w-full">
        {/* Logo */}
        <button onClick={() => goHome()} className="flex items-center gap-1 bg-transparent border-none cursor-pointer">
          <div className="h-[19px] relative shrink-0 w-[17px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
              <g clipPath="url(#clip0_logo)">
                <path d={svgPaths.p57f4be0} fill="black" />
                <path d={svgPaths.p1b8e5300} fill="black" />
                <path d={svgPaths.pd1fb0f0} fill="black" />
                <path d={svgPaths.p122416c0} fill="black" />
                <path d={svgPaths.p12f6e380} fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_logo">
                  <rect fill="white" height="19" width="17" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span
            className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[22px] text-black tracking-[-0.44px] leading-none"
          >
            Abril R.
          </span>
        </button>

        {/* Nav */}
        <nav className="flex items-center gap-6 md:gap-8">
          {/* Menu links – hidden on mobile, shown md+ */}
          <div className="hidden sm:flex items-center gap-6 md:gap-8">
            <button
              onClick={() => goHome(featuredRef)}
              className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
            >
              {tx.work}
            </button>
            <button
              onClick={() => goHome(collaborationsRef)}
              className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
            >
              {tx.collaborations}
            </button>
            <button
              onClick={() => goHome(aboutRef)}
              className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
            >
              {tx.about}
            </button>
            <button
              onClick={() => setActivePage("playground")}
              className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
            >
              {tx.playground}
            </button>
          </div>

          {/* Language switcher */}
          <div className="flex items-center">
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1.5 rounded-l-full text-[14px] tracking-[-0.14px] transition-colors ${
                lang === "es"
                  ? "bg-[#4425d5] text-white font-semibold"
                  : "bg-[#efeef3] text-[#504e51]"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-r-full text-[14px] tracking-[-0.14px] transition-colors ${
                lang === "en"
                  ? "bg-[#4425d5] text-white font-semibold"
                  : "bg-[#efeef3] text-[#504e51]"
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile nav */}
      <div className="flex sm:hidden gap-4 px-[18px] pb-2">
        <button
          onClick={() => goHome(featuredRef)}
          className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
        >
          {tx.work}
        </button>
        <button
          onClick={() => goHome(collaborationsRef)}
          className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
        >
          {tx.collaborations}
        </button>
        <button
          onClick={() => goHome(aboutRef)}
          className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
        >
          {tx.about}
        </button>
        <button
          onClick={() => setActivePage("playground")}
          className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
        >
          {tx.playground}
        </button>
      </div>

      {activePage === "home" && <>

      {/* ── HERO ── */}
      <section
        className="relative w-full min-h-[440px] md:min-h-[546px]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 546' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.24'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-11.779 -10.537 8.2827 -9.2591 1366 529)'><stop stop-color='rgba(87,49,237,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>"),
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 546' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.25'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-24.9 -24.9 22.28 -22.28 1315.5 474.5)'><stop stop-color='rgba(205,29,240,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")
          `,
        }}
      >
        <div className="flex flex-col justify-between h-full gap-8 px-[18px] md:px-[8%] py-[104px]">
          {/* Content */}
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-5">
              <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[60px] sm:text-[80px] md:text-[98px] text-black tracking-[-1.96px] leading-none">
                {tx.name}
              </p>
              <p className="font-medium text-[#4425d5] text-[18px] md:text-[24px] tracking-[-1.2px]">
                {tx.role}
              </p>
              <p className="text-[#504e51] text-[15px] md:text-[16px] leading-[1.42] max-w-[343px]">
                {tx.tagline}
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <div className="relative size-[16px] shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 12.167 14.833">
                  <path
                    d={svgPaths.pdc934f0}
                    stroke="#504E51"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d={svgPaths.p18ea0100}
                    stroke="#504E51"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="text-[#504e51] text-[14px] tracking-[-0.14px]">{tx.location}</span>
            </div>

            {/* View Projects button */}
            <button
              onClick={() => scrollTo(featuredRef)}
              className="group self-start flex items-center gap-2 px-8 py-4 rounded-[26px] border border-[rgba(87,49,237,0.18)] bg-[rgba(87,49,237,0.03)] hover:bg-[rgba(87,49,237,0.10)] transition-colors"
            >
              <span className="text-[#5731ed] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap">
                {tx.viewProjects}
              </span>
              <div className="size-[24px] rotate-90">
                <ArrowIcon color="#5731ED" />
              </div>
            </button>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center justify-end gap-2">
            <span className="text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.16px]">{tx.scrollExplore}</span>
            <div className="size-[24px] rotate-180">
              <ArrowIcon color="#4425D5" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section
        ref={featuredRef}
        className="w-full border-t border-b border-[#efeef3]"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[10%] lg:gap-[126px] px-[18px] md:px-[8%] py-[70px]">
          {/* Left label */}
          <div className="flex flex-col gap-2 shrink-0 mx-[0px] mt-[0px] mb-[16px]">
            <p className="font-medium text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
              {tx.featuredWork}
            </p>
            <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] text-black tracking-[-0.96px] leading-none max-w-[180px]">
              {tx.selectedProjects}
            </p>
            <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] max-w-[240px]">
              {tx.confidentiality}
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
            {/* Card 1 — AI Documentation Platform */}
            <button
              onClick={() => openProject("ai-doc")}
              className="bg-[#fefdff] flex-1 flex flex-row sm:flex-col rounded-[8px] border border-[#efeef3] shadow-[0px_0px_12.7px_-2px_rgba(2,2,2,0.07)] overflow-hidden text-left cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="w-[120px] shrink-0 sm:w-full sm:h-[169px] relative overflow-hidden self-stretch">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image_dox_mock} />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
                    {tx.card1Title}
                  </span>
                  <div className="size-[20px] rotate-90 shrink-0">
                    <ArrowIcon color="#5731ED" />
                  </div>
                </div>
                <p className="text-[#504e51] text-[13px] md:text-[14px] leading-[1.42] tracking-[-0.7px]">
                  {tx.card1Desc}
                </p>
              </div>
            </button>

            {/* Card 2 — Hotel Management Platform */}
            <button
              onClick={() => openProject("hotel")}
              className="bg-[#fefdff] flex-1 flex flex-row sm:flex-col rounded-[8px] border border-[#efeef3] shadow-[0px_0px_12.7px_-2px_rgba(2,2,2,0.07)] overflow-hidden text-left cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="w-[120px] shrink-0 sm:w-full sm:h-[169px] relative overflow-hidden self-stretch bg-[#d9d9d9]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image_Mock_1} />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
                    {tx.card2Title}
                  </span>
                  <div className="size-[20px] rotate-90 shrink-0">
                    <ArrowIcon color="#5731ED" />
                  </div>
                </div>
                <p className="text-[#504e51] text-[13px] md:text-[14px] leading-[1.42] tracking-[-0.7px]">
                  {tx.card2Desc}
                </p>
              </div>
            </button>

            {/* Card 3 — Enterprise Design System */}
            <button
              onClick={() => openProject("design-system")}
              className="bg-[#fefdff] flex-1 flex flex-row sm:flex-col rounded-[8px] border border-[#efeef3] shadow-[0px_0px_12.7px_-2px_rgba(2,2,2,0.07)] overflow-hidden text-left cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="w-[120px] shrink-0 sm:w-full sm:h-[169px] relative overflow-hidden self-stretch">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgRectangle3} />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
                    {tx.card3Title}
                  </span>
                  <div className="size-[20px] rotate-90 shrink-0">
                    <ArrowIcon color="#5731ED" />
                  </div>
                </div>
                <p className="text-[#504e51] text-[13px] md:text-[14px] leading-[1.42] tracking-[-0.7px]">
                  {tx.card3Desc}
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ── */}
      <section ref={overviewRef} className="w-full flex flex-col-reverse lg:flex-row">
        {/* Left: main content */}
        <div
          className="flex-1 relative"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1017 546' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.09'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-28.15 27.7 -22.761 -23.131 831.5 136.5)'><stop stop-color='rgba(205,29,240,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")`,
          }}
        >
          <div className={`flex flex-col justify-between h-full gap-10 min-h-[400px] px-[18px] md:px-[5%] pt-[70px] ${activeTab === "overview" ? "pb-[66%] sm:pb-[70px]" : "pb-[70px]"}`}>

            {/* ── HOTEL OVERVIEW ── */}
            {activeProject === "hotel" && activeTab === "overview" && (
              <>
                <img
                  src={imgOverviewHotel}
                  alt=""
                  className="absolute bottom-0 sm:bottom-auto top-auto sm:top-0 right-0 h-full w-auto max-w-[63%] sm:max-w-[30%] object-contain object-right-bottom sm:object-right-top pointer-events-none"
                />
                <div className="flex flex-col gap-3">
                  <div className="self-start bg-[rgba(87,49,237,0.05)] px-[10px] py-[4px] rounded-[54px]">
                    <span className="font-semibold text-[#4425d5] text-[12px] md:text-[14px] tracking-[-0.7px] opacity-80">
                      {lang === "en" ? "MANAGEMENT PLATFORM" : "PLATAFORMA DE GESTIÓN"}
                    </span>
                  </div>
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8] max-w-[570px]">
                    {lang === "en" ? "Optimizing complex workflows for business users" : "Optimizando flujos de trabajo complejos para usuarios empresariales"}
                  </p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] max-w-[570px]">
                    {lang === "en"
                      ? "A centralized platform designed to manage hotel operations, reporting, and day-to-day administrative tasks."
                      : "Una plataforma centralizada diseñada para gestionar operaciones hoteleras, reportes y tareas administrativas del día a día."}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{lang === "en" ? "The challenge" : "El desafío"}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">
                      {lang === "en"
                        ? "Users relied on disconnected and undefined workflows, resulting in inefficiencies, confusion, and inconsistent outcomes across key operations."
                        : "Los usuarios dependían de flujos de trabajo desconectados e indefinidos, lo que generaba ineficiencias, confusión y resultados inconsistentes en operaciones clave."}
                    </p>
                  </div>
                  <svg className="hidden sm:block shrink-0 mx-6" width="1" height="116" viewBox="0 0 1 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0V115.098" stroke="#EFEEF3"/>
                  </svg>
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{lang === "en" ? "My Role" : "Mi Rol"}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">
                      {lang === "en"
                        ? "I led discovery, user research, workflow definition, wireframing, prototyping, and high-fidelity design."
                        : "Lideré el descubrimiento, investigación de usuarios, definición de flujos, wireframing, prototipado y diseño de alta fidelidad."}
                    </p>
                  </div>
                  <svg className="hidden sm:block shrink-0 mx-6" width="1" height="116" viewBox="0 0 1 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0V115.098" stroke="#EFEEF3"/>
                  </svg>
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{lang === "en" ? "The Goal" : "El Objetivo"}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">
                      {lang === "en"
                        ? "Reduce operational errors, improve task completion rates, and streamline critical workflows across the platform."
                        : "Reducir errores operativos, mejorar las tasas de finalización de tareas y agilizar los flujos de trabajo críticos en toda la plataforma."}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* ── HOTEL CONTEXT & CHALLENGE ── */}
            {activeProject === "hotel" && activeTab === "context" && (
              <>
                <div className="flex flex-col gap-3">
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8] max-w-[700px]">
                    {lang === "en"
                      ? "This concept project was created to showcase my product design process"
                      : "Este proyecto conceptual fue creado para mostrar mi proceso de diseño de producto"}
                  </p>
                  <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42]">
                    {lang === "en"
                      ? <>It is inspired by patterns, challenges, and workflows I encountered <strong>while working on hospitality products under confidentiality agreements.</strong></>
                      : <>Está inspirado en patrones, desafíos y flujos de trabajo que encontré <strong>mientras trabajaba en productos de hospitalidad bajo acuerdos de confidencialidad.</strong></>}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Context" : "Contexto"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? <><strong>Many hospitality businesses rely on complex operational processes </strong>that involve reservations, staff management, reporting, and day-to-day coordination. When workflows are fragmented or poorly defined, teams face inefficiencies, communication gaps, and operational errors that directly impact service quality.</>
                        : <><strong>Muchos negocios de hospitalidad dependen de procesos operativos complejos </strong>que involucran reservas, gestión de personal, reportes y coordinación diaria. Cuando los flujos están fragmentados, los equipos enfrentan ineficiencias y errores operativos.</>}
                    </p>
                  </div>
                  <svg className="shrink-0 mx-6" width="1" height="173" viewBox="0 0 1 173" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0V172.333" stroke="#EFEEF3"/>
</svg>
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Challenge" : "Desafío"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "The challenge was to create a centralized platform that simplified complex processes while providing users with a clear and intuitive experience."
                        : "El desafío era crear una plataforma centralizada que simplificara procesos complejos brindando a los usuarios una experiencia clara e intuitiva."}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* ── HOTEL PROCESS ── */}
            {activeProject === "hotel" && activeTab === "process" && (
              <>
                <div>
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[54px] md:text-[60px] lg:text-[72px] text-black tracking-[-1.08px] leading-[0.8]">
                    {lang === "en" ? "Process" : "Proceso"}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Beginning" : "Inicio"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "The project began with stakeholder interviews to better understand operational challenges, business goals, and existing workflows."
                        : "El proyecto comenzó con entrevistas a partes interesadas para comprender mejor los desafíos operativos, los objetivos del negocio y los flujos de trabajo existentes."}
                    </p>
                  </div>
                  <svg className="shrink-0 mx-6" width="1" height="150" viewBox="0 0 1 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0V149.481" stroke="#EFEEF3"/>
</svg>

                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Research" : "Investigación"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "Through research, workflow analysis, and evaluation of current tools, I identified several opportunities to improve efficiency and reduce friction across daily tasks. One key finding was that users needed more than operational improvements; they also required an intuitive interface that minimized the learning curve and enabled teams to become productive quickly."
                        : "A través de investigación, análisis de flujos de trabajo y evaluación de herramientas actuales, identifiqué oportunidades para mejorar la eficiencia. Un hallazgo clave fue que los usuarios necesitaban una interfaz intuitiva que minimizara la curva de aprendizaje."}
                    </p>
                  </div>
                </div>
                <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42] tracking-[-0.54px]">
                  <strong>{lang === "en" ? "Based on these insights" : "Con base en estos hallazgos"}</strong>
                  {lang === "en"
                    ? ", I defined user flows, information architecture, and interface patterns focused on clarity, efficiency, and ease of use."
                    : ", definí flujos de usuario, arquitectura de información y patrones de interfaz enfocados en claridad, eficiencia y facilidad de uso."}
                </p>
              </>
            )}

            {/* ── HOTEL OUTCOME & LEARNINGS ── */}
            {activeProject === "hotel" && activeTab === "outcome" && (
              <>
                <div className="flex flex-col gap-3">
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8]">
                    {lang === "en" ? "Outcome & Learnings" : "Resultados y Aprendizajes"}
                  </p>
                  <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42] max-w-[700px]">
                    {lang === "en"
                      ? "The result was a user-centered platform designed to support operational workflows through a clear, scalable, and intuitive experience."
                      : "El resultado fue una plataforma centrada en el usuario diseñada para apoyar flujos de trabajo operativos a través de una experiencia clara, escalable e intuitiva."}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Outcome" : "Resultado"}</p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                    {lang === "en"
                      ? "By aligning business requirements with user needs, the solution helped reduce complexity, improve task completion, and provide a more consistent experience across key operational processes."
                      : "Al alinear los requisitos del negocio con las necesidades del usuario, la solución ayudó a reducir la complejidad y mejorar la experiencia en los procesos operativos clave."}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Learnings" : "Aprendizajes"}</p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                    {lang === "en"
                      ? "This project reinforced an important lesson: successful products are not defined solely by visual design. Great product design emerges from balancing usability, business goals, and operational needs. In workflow-heavy environments, understanding user objectives and process dependencies is essential to creating meaningful and effective solutions."
                      : "Este proyecto reforzó una lección importante: los productos exitosos no se definen únicamente por el diseño visual. El gran diseño emerge del equilibrio entre usabilidad, objetivos del negocio y necesidades operativas."}
                  </p>
                </div>
                <div className="flex justify-end">
                 <a href="https://www.figma.com/proto/juUsVkWKsFFVPdaFN7Toky/Hotel-Management?node-id=65-2391&p=f&viewport=84%2C462%2C0.07&t=NIOLvf4lA6vr2Eib-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=65%3A2391&show-proto-sidebar=1&page-id=30%3A3" target="_blank"><button className="flex items-center gap-2 px-8 py-4 rounded-[26px] border border-[rgba(87,49,237,0.18)] bg-[rgba(87,49,237,0.03)] hover:bg-[rgba(87,49,237,0.10)] transition-colors">
                    <span className="text-[#5731ed] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap">
                      {lang === "en" ? "View Project" : "Ver Proyecto"}
                    </span>
                    <div className="size-[24px] rotate-90"><ArrowIcon color="#5731ED" /></div>
                  </button></a> 
                </div>
              </>
            )}

            {/* ── HOTEL DESIGN SYSTEM ── */}
            {activeProject === "hotel" && activeTab === "designsystem" && (
              <div className="flex flex-col gap-6">
                <p className="font-['Cormorant_Garamond',serif] font-bold text-[54px] text-black tracking-[-1.08px] leading-[0.8]">
                  {lang === "en" ? "Design System" : "Sistema de Diseño"}
                </p>
                <p className="text-[#504e51] text-[16px] leading-[1.42] max-w-[600px]">
                  {lang === "en"
                    ? "A scalable design foundation built to support the Hotel Management Platform's growing set of components and patterns."
                    : "Una base de diseño escalable construida para soportar el conjunto creciente de componentes y patrones de la plataforma."}
                </p>
              </div>
            )}

            {/* ── AI DOC OVERVIEW ── */}
            {activeProject === "ai-doc" && activeTab === "overview" && (
              <>
                <img
                  src={imgOverviewAiDoc}
                  alt=""
                  className="absolute bottom-0 sm:bottom-auto top-auto sm:top-0 right-0 h-full w-auto max-w-[62%] sm:max-w-[28%] object-contain object-right-bottom sm:object-right-top pointer-events-none"
                />
                <div className="flex flex-col gap-3">
                  <div className="self-start bg-[rgba(87,49,237,0.05)] px-[10px] py-[4px] rounded-[54px]">
                    <span className="font-semibold text-[#4425d5] text-[12px] md:text-[14px] tracking-[-0.7px] opacity-80">
                      {tx.aiDocBadge}
                    </span>
                  </div>
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8] max-w-[600px]">
                    {tx.aiDocHeading}
                  </p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px] max-w-[600px]">
                    {tx.aiDocDesc}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{tx.challengeTitle}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">{tx.challengeDesc}</p>
                  </div>
                  <svg className="hidden sm:block shrink-0 mx-6" width="1" height="116" viewBox="0 0 1 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0V115.098" stroke="#EFEEF3"/>
                  </svg>
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{tx.roleTitle}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">{tx.roleDesc}</p>
                  </div>
                  <svg className="hidden sm:block shrink-0 mx-6" width="1" height="116" viewBox="0 0 1 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0V115.098" stroke="#EFEEF3"/>
                  </svg>
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{tx.goalTitle}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">{tx.goalDesc}</p>
                  </div>
                </div>
              </>
            )}

            {/* ── AI DOC CONTEXT & CHALLENGE ── */}
            {activeProject === "ai-doc" && activeTab === "context" && (
              <>
                <div className="flex flex-col gap-3">
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8] max-w-[700px]">
                    {lang === "en"
                      ? "This project focused on simplifying the documentation process for development teams"
                      : "Este proyecto se centró en simplificar el proceso de documentación para equipos de desarrollo"}
                  </p>
                  <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42]">
                    {lang === "en" ? "Through AI-powered automation." : "A través de automatización impulsada por IA."}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Context" : "Contexto"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "As software products evolve, maintaining accurate documentation becomes increasingly difficult. Teams often prioritize development tasks over documentation, leading to knowledge gaps, onboarding challenges, and outdated technical resources."
                        : "A medida que los productos de software evolucionan, mantener una documentación precisa se vuelve cada vez más difícil. Los equipos suelen priorizar las tareas de desarrollo sobre la documentación, lo que genera brechas de conocimiento, desafíos de incorporación y recursos técnicos desactualizados."}
                    </p>
                  </div>
                    <svg className="shrink-0 mx-6" width="1" height="150" viewBox="0 0 1 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0V149.333" stroke="#EFEEF3"/>
                    </svg>
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Challenge" : "Desafío"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "The challenge was to create an experience that could integrate naturally into existing development workflows while making documentation generation fast, reliable, and accessible to both technical and non-technical stakeholders."
                        : "El desafío era crear una experiencia que pudiera integrarse de forma natural en los flujos de trabajo de desarrollo existentes, haciendo que la generación de documentación sea rápida, confiable y accesible tanto para partes interesadas técnicas como no técnicas."}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* ── AI DOC PROCESS ── */}
            {activeProject === "ai-doc" && activeTab === "process" && (
              <>
                <div>
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[54px] md:text-[60px] lg:text-[72px] text-black tracking-[-1.08px] leading-[0.8]">
                    {lang === "en" ? "Process" : "Proceso"}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Beginning" : "Inicio"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "The design process began with understanding how engineering teams currently manage documentation and identifying the friction points within their existing workflows."
                        : "El proceso de diseño comenzó por comprender cómo los equipos de ingeniería gestionan actualmente la documentación e identificar los puntos de fricción dentro de sus flujos de trabajo existentes."}
                    </p>
                  </div>
                  <svg className="shrink-0 mx-6" width="1" height="150" viewBox="0 0 1 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0V149.434" stroke="#EFEEF3"/>
</svg>

                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Research" : "Investigación"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "Through stakeholder discussions, workflow analysis, and exploration of developer tools, I identified opportunities to simplify complex processes and reduce manual effort. A key consideration was ensuring that users could easily understand the platform's capabilities while maintaining trust in AI-generated content."
                        : "A través de debates con partes interesadas, análisis de flujos de trabajo y exploración de herramientas para desarrolladores, identifiqué oportunidades para simplificar procesos complejos y reducir el esfuerzo manual. Una consideración clave fue garantizar que los usuarios pudieran comprender fácilmente las capacidades de la plataforma mientras mantenían la confianza en el contenido generado por IA."}
                    </p>
                  </div>
                </div>
                <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42] tracking-[-0.54px]">
                  <strong>{lang === "en" ? "The solution focused " : "La solución se centró "}</strong>
                  {lang === "en"
                    ? "on creating a clear information architecture, intuitive user flows, and a streamlined experience that guides users from repository connection to documentation generation with minimal complexity."
                    : "en crear una arquitectura de información clara, flujos de usuario intuitivos y una experiencia optimizada que guíe a los usuarios desde la conexión del repositorio hasta la generación de documentación con mínima complejidad."}
                </p>
              </>
            )}

            {/* ── AI DOC OUTCOME & LEARNINGS ── */}
            {activeProject === "ai-doc" && activeTab === "outcome" && (
              <>
                <div className="flex flex-col gap-3">
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8] whitespace-nowrap">
                    {lang === "en" ? "Outcome & Learnings" : "Resultados y Aprendizajes"}
                  </p>
                  <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42] max-w-[700px]">
                    {lang === "en"
                      ? "The resulting experience provided a clear and structured approach to AI-assisted documentation, helping users understand the platform's value and integrate it into their existing development processes."
                      : "La experiencia resultante proporcionó un enfoque claro y estructurado para la documentación asistida por IA, ayudando a los usuarios a comprender el valor de la plataforma e integrarla en sus procesos de desarrollo existentes."}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Outcome" : "Resultado"}</p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                    {lang === "en"
                      ? "This project reinforced the importance of designing AI-powered products around user trust and transparency. While automation can significantly reduce manual effort, users still need visibility into how information is generated and confidence in the output they receive."
                      : "Este proyecto reforzó la importancia de diseñar productos impulsados por IA en torno a la confianza y la transparencia del usuario. Si bien la automatización puede reducir significativamente el esfuerzo manual, los usuarios aún necesitan visibilidad sobre cómo se genera la información y confianza en el resultado que reciben."}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Learnings" : "Aprendizajes"}</p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                    {lang === "en"
                      ? "Working on this product also highlighted the importance of balancing technical complexity with simplicity, ensuring that advanced capabilities remain accessible through an intuitive and user-centered experience."
                      : "Trabajar en este producto también destacó la importancia de equilibrar la complejidad técnica con la simplicidad, garantizando que las capacidades avanzadas sigan siendo accesibles a través de una experiencia intuitiva y centrada en el usuario."}
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    href="https://dox.xid.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-[26px] border border-[rgba(87,49,237,0.18)] bg-[rgba(87,49,237,0.03)] hover:bg-[rgba(87,49,237,0.10)] transition-colors"
                  >
                    <span className="text-[#5731ed] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap">
                      {lang === "en" ? "View Project" : "Ver Proyecto"}
                    </span>
                    <div className="size-[24px] rotate-90">
                      <ArrowIcon color="#5731ED" />
                    </div>
                  </a>
                </div>
              </>
            )}

            {/* ── DESIGN SYSTEM OVERVIEW ── */}
            {activeProject === "design-system" && activeTab === "overview" && (
              <>
                <img
                  src={imgOverviewDs}
                  alt=""
                  className="absolute bottom-0 sm:bottom-auto top-auto sm:top-0 right-0 h-full w-auto max-w-[60%] sm:max-w-[28%] object-contain object-right-bottom sm:object-right-top pointer-events-none"
                />
                <div className="flex flex-col gap-3">
                  <div className="self-start bg-[rgba(87,49,237,0.05)] px-[10px] py-[4px] rounded-[54px]">
                    <span className="font-semibold text-[#4425d5] text-[12px] md:text-[14px] tracking-[-0.7px] opacity-80">
                      {lang === "en" ? "DESIGN SYSTEM" : "SISTEMA DE DISEÑO"}
                    </span>
                  </div>
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8] max-w-[600px]">
                    {lang === "en"
                      ? "Building a scalable foundation for consistent product experiences"
                      : "Construyendo una base escalable para experiencias de producto consistentes"}
                  </p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px] max-w-[600px]">
                    {lang === "en"
                      ? "A flexible design system created to accelerate product evolution, improve consistency, and streamline collaboration between design and development."
                      : "Un sistema de diseño flexible creado para acelerar la evolución del producto, mejorar la consistencia y agilizar la colaboración entre diseño y desarrollo."}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{lang === "en" ? "The challenge" : "El desafío"}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">
                      {lang === "en"
                        ? "As products grow, maintaining consistency across screens, flows, and teams becomes increasingly difficult. Updating interfaces manually is time-consuming and often leads to design inconsistencies."
                        : "A medida que los productos crecen, mantener la consistencia entre pantallas, flujos y equipos se vuelve cada vez más difícil. Actualizar interfaces manualmente consume tiempo y frecuentemente genera inconsistencias."}
                    </p>
                  </div>
                  <svg className="hidden sm:block shrink-0 mx-6" width="1" height="150" viewBox="0 0 1 150" fill="none" xmlns="http://www.w3.org/2000/svg"><path></path><path d="M0.5 0V115.098" stroke="#EFEEF3"/></svg>
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{lang === "en" ? "My Role" : "Mi Rol"}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">
                      {lang === "en"
                        ? "I defined the system architecture, component structure, token strategy, documentation approach, and visual foundations."
                        : "Definí la arquitectura del sistema, la estructura de componentes, la estrategia de tokens, el enfoque de documentación y los fundamentos visuales."}
                    </p>
                  </div>
                  <svg className="hidden sm:block shrink-0 mx-6" width="1" height="116" viewBox="0 0 1 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0V115.098" stroke="#EFEEF3"/>
                  </svg>
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-semibold text-[16px] text-black tracking-[-0.8px] opacity-80">{lang === "en" ? "The Goal" : "El Objetivo"}</p>
                    <p className="text-[#504e51] text-[14px] leading-[1.42] tracking-[-0.42px]">
                      {lang === "en"
                        ? "Reduce design and maintenance effort while enabling scalable product growth through reusable and adaptable components."
                        : "Reducir el esfuerzo de diseño y mantenimiento mientras se habilita el crecimiento escalable del producto mediante componentes reutilizables y adaptables."}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* ── DESIGN SYSTEM CONTEXT & CHALLENGE ── */}
            {activeProject === "design-system" && activeTab === "context" && (
              <>
                <div className="flex flex-col gap-3">
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8] max-w-[700px]">
                    {lang === "en"
                      ? "As products evolve, new features, workflows, and requirements are constantly introduced."
                      : "A medida que los productos evolucionan, se introducen constantemente nuevas funcionalidades, flujos y requisitos."}
                  </p>
                  <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42]">
                    {lang === "en"
                      ? "Without a shared design foundation, interfaces become inconsistent, design updates require repetitive work, and collaboration between teams becomes less efficient."
                      : "Sin una base de diseño compartida, las interfaces se vuelven inconsistentes, las actualizaciones requieren trabajo repetitivo y la colaboración entre equipos se vuelve menos eficiente."}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Context" : "Contexto"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "Throughout multiple enterprise projects, I observed recurring challenges related to maintaining visual consistency, scaling interfaces, and implementing design changes across large product ecosystems."
                        : "A lo largo de múltiples proyectos empresariales, observé desafíos recurrentes relacionados con mantener la consistencia visual, escalar interfaces e implementar cambios de diseño en grandes ecosistemas de producto."}
                    </p>
                  </div>
                  <svg className="shrink-0 mx-6" width="1" height="150" viewBox="0 0 1 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0V149.333" stroke="#EFEEF3"/>
</svg>

                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Challenge" : "Desafío"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "The challenge was to create a design system capable of providing reusable components, clear design rules, and scalable foundations that could support different themes, screen sizes, and evolving business requirements without increasing design complexity."
                        : "El desafío era crear un sistema de diseño capaz de proporcionar componentes reutilizables, reglas de diseño claras y bases escalables que pudieran soportar diferentes temas, tamaños de pantalla y requisitos de negocio en evolución sin aumentar la complejidad del diseño."}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* ── DESIGN SYSTEM PROCESS ── */}
            {activeProject === "design-system" && activeTab === "process" && (
              <>
                <div>
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[54px] md:text-[60px] lg:text-[72px] text-black tracking-[-1.08px] leading-[0.8]">
                    {lang === "en" ? "Process" : "Proceso"}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Beginning" : "Inicio"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "The process started by identifying recurring UI patterns and establishing the visual principles that would guide the product experience."
                        : "El proceso comenzó identificando patrones de UI recurrentes y estableciendo los principios visuales que guiarían la experiencia del producto."}
                    </p>
                  </div>
                  <svg className="shrink-0 mx-6" width="1" height="127" viewBox="0 0 1 127" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0V126.441" stroke="#EFEEF3"/>
</svg>

                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Research" : "Investigación"}</p>
                    <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                      {lang === "en"
                        ? "After defining the interface foundations, I created a scalable component architecture based on reusable building blocks. Each component was designed with flexibility in mind, allowing future adaptations such as theme variations, responsive layouts, and additional product requirements."
                        : "Tras definir los fundamentos de la interfaz, creé una arquitectura de componentes escalable basada en bloques de construcción reutilizables. Cada componente fue diseñado con flexibilidad, permitiendo adaptaciones futuras como variaciones de tema, diseños responsivos y requisitos adicionales."}
                    </p>
                  </div>
                </div>
                <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42] tracking-[-0.54px]">
                  <strong>{lang === "en" ? "To improve collaboration across teams" : "Para mejorar la colaboración entre equipos"}</strong>
                  {lang === "en"
                    ? ", I structured the system with clear naming conventions, component hierarchy and documentation standards that could be easily understood and adopted by both designers and developers."
                    : ", estructuré el sistema con convenciones de nomenclatura claras, jerarquía de componentes y estándares de documentación que pudieran ser fácilmente comprendidos y adoptados tanto por diseñadores como por desarrolladores."}
                </p>
              </>
            )}

            {/* ── DESIGN SYSTEM OUTCOME & LEARNINGS ── */}
            {activeProject === "design-system" && activeTab === "outcome" && (
              <>
                <div className="flex flex-col gap-3">
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] lg:text-[54px] text-black tracking-[-1.08px] leading-[0.8]">
                    {lang === "en" ? "Outcome & Learnings" : "Resultados y Aprendizajes"}
                  </p>
                  <p className="text-[#4425d5] text-[16px] md:text-[18px] leading-[1.42] max-w-[700px]">
                    {lang === "en"
                      ? "The result was a scalable design system that centralized product standards, reduced repetitive design work, and improved consistency across interfaces."
                      : "El resultado fue un sistema de diseño escalable que centralizó los estándares del producto, redujo el trabajo de diseño repetitivo y mejoró la consistencia entre interfaces."}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Outcome" : "Resultado"}</p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                    {lang === "en"
                      ? "By leveraging reusable components and shared design foundations, product updates became faster, more efficient, and easier to maintain as the platform evolved."
                      : "Aprovechando los componentes reutilizables y las bases de diseño compartidas, las actualizaciones del producto se volvieron más rápidas, eficientes y fáciles de mantener a medida que la plataforma evolucionaba."}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-[18px] text-black">{lang === "en" ? "Learnings" : "Aprendizajes"}</p>
                  <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] tracking-[-0.48px]">
                    {lang === "en"
                      ? "Creating this system reinforced the idea that design systems are not simply UI libraries: they are operational tools that enable product scalability. A well-structured design system improves alignment across teams, accelerates decision-making, and helps maintain a consistent user experience as products continue to grow and change."
                      : "Crear este sistema reforzó la idea de que los sistemas de diseño no son simples bibliotecas de UI: son herramientas operativas que habilitan la escalabilidad del producto. Un sistema bien estructurado mejora la alineación entre equipos, acelera la toma de decisiones y ayuda a mantener una experiencia de usuario consistente."}
                  </p>
                </div>
                <div className="flex justify-end">
                  <a href="https://www.figma.com/design/cTPOMoYpaNeK6h6hw8DKV1/Design-system--Hotel-Management-?node-id=55-1260&t=V6PqvJQkMzhSbdr4-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-[26px] border border-[rgba(87,49,237,0.18)] bg-[rgba(87,49,237,0.03)] hover:bg-[rgba(87,49,237,0.10)] transition-colors">
                    <span className="text-[#5731ed] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap">
                      {lang === "en" ? "View System" : "Ver Sistema"}
                    </span>
                    <div className="size-[24px] rotate-90"><ArrowIcon color="#5731ED" /></div>
                  </a>
                </div>
              </>
            )}

          </div>
        </div>

        {/* Right: sidebar */}
        <div className="bg-[#f9f7fb] w-full lg:w-[300px] xl:w-[349px] shrink-0">
          <div className="flex flex-col gap-8 px-6 md:px-12 lg:px-12 py-8 md:py-[70px] h-full">
            {/* Back to projects */}
            <button
              onClick={() => scrollTo(featuredRef)}
              className="flex items-center gap-2 cursor-pointer bg-transparent border-none self-start hover:opacity-70 transition-opacity"
            >
              <div className="size-[24px] -rotate-90">
                <ArrowIcon color="#4425D5" />
              </div>
              <span className="text-[#4425d5] text-[14px] tracking-[-0.14px]">{tx.backToProjects}</span>
            </button>

            {/* Project nav */}
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[18px] text-black tracking-[-0.36px]">
                {activeProject === "ai-doc"
                  ? (lang === "en" ? "AI Documentation Platform" : "Plataforma de Documentación IA")
                  : activeProject === "hotel"
                  ? (lang === "en" ? "Hotel Management Platform" : "Plataforma de Gestión Hotelera")
                  : (lang === "en" ? "Enterprise Design System" : "Sistema de Diseño Empresarial")}
              </p>
              {(activeProject === "hotel"
                ? [
                    { key: "overview" as const, label: tx.overviewLabel },
                    { key: "context" as const, label: tx.contextChallenge },
                    { key: "process" as const, label: tx.process },
                    { key: "outcome" as const, label: tx.outcomeLabel },
                    { key: "designsystem" as const, label: lang === "en" ? "Design System" : "Sistema de Diseño" },
                  ]
                : [
                    { key: "overview" as const, label: tx.overviewLabel },
                    { key: "context" as const, label: tx.contextChallenge },
                    { key: "process" as const, label: tx.process },
                    { key: "outcome" as const, label: tx.outcomeLabel },
                  ]
              ).map(({ key, label }) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => key === "designsystem" ? openProject("design-system") : setActiveTab(key)}
                    className="flex items-center gap-2 cursor-pointer bg-transparent border-none text-left"
                  >
                    <div className="size-[8px] shrink-0">
                      {isActive ? (
                        <svg viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#4425D5" /></svg>
                      ) : (
                        <svg viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#866EED" opacity="0" /></svg>
                      )}
                    </div>
                    <span className={`text-[14px] tracking-[-0.14px] ${isActive ? "text-[#4425d5]" : "text-[#a098a1]"}`}>
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#efeef3]" />

            {/* Meta */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-[#a098a1] text-[12px] tracking-[-0.12px]">{tx.projectType}</p>
                <p className="text-[#504e51] font-medium text-[14px] tracking-[-0.14px]">
                  {activeProject === "ai-doc"
                    ? tx.projectTypeVal
                    : activeProject === "hotel"
                    ? (lang === "en" ? "Enterprise SaaS" : "SaaS Empresarial")
                    : (lang === "en" ? "Design System" : "Sistema de Diseño")}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#a098a1] text-[12px] tracking-[-0.12px]">{tx.myRole}</p>
                <p className="text-[#504e51] font-medium text-[14px] tracking-[-0.14px]">{tx.myRoleVal}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#a098a1] text-[12px] tracking-[-0.12px]">{tx.year}</p>
                <p className="text-[#504e51] font-medium text-[14px] tracking-[-0.14px]">
                  {activeProject === "ai-doc" ? tx.yearVal : activeProject === "hotel" ? "2026" : "2026"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED CLIENTS ── */}
      <section
        ref={collaborationsRef}
        className="w-full border-t border-[#efeef3] relative"
        style={{
          backgroundImage: `
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 299' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.10'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-19.85 13.5 -0.564 -17.766 1359.5 6)'><stop stop-color='rgba(87,49,237,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>"),
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 299' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.16'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-41.5 11.5 -13.05 -47.094 1366 17)'><stop stop-color='rgba(205,29,240,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")
          `,
        }}
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-[156px] items-start md:items-center px-[18px] md:px-[15%] py-[68px]">
          {/* Text */}
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium text-[#4425d5] text-[16px] tracking-[-0.8px] opacity-80">
              {lang === "en" ? "Collaborations" : "Colaboraciones"}
            </p>
            <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[48px] text-black tracking-[-0.96px] leading-none">
              {lang === "en" ? "Selected Clients" : "Clientes Seleccionados"}
            </p>
            <p className="text-[#504e51] text-[16px] leading-[1.42] max-w-[392px]">
              {lang === "en"
                ? "During my time at XID, I contributed to digital products for clients across multiple industries. Many of these projects remain confidential."
                : "Durante mi tiempo en XID, contribuí a productos digitales para clientes de múltiples industrias. Muchos de estos proyectos son confidenciales."}
            </p>
          </div>

          {/* Logos grid */}
          <div className="grid grid-cols-3 gap-x-10 gap-y-10 items-center justify-items-center">
            {/* Logo 1 + 2 */}
            <div className="flex gap-2 items-center">
              <div className="h-[32px] w-[37px] relative overflow-hidden">
                <img alt="" className="absolute h-[100.4%] left-0 max-w-none top-[-0.2%] w-[283%]" src={imgClientLogo1} />
              </div>
              <div className="h-[28px] w-[69px] relative">
                <img alt="" className="absolute max-w-none object-bottom size-full" src={imgClientLogo2} />
              </div>
            </div>

            {/* Dox */}
            <svg className="h-[28px] w-[122px]" fill="none" viewBox="0 0 122 28">
              <path clipRule="evenodd" d={svgClient.p287b1500} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgClient.p3aab200} fill="black" fillRule="evenodd" />
              <path d={svgClient.p1c2a7200} fill="black" />
              <path d={svgClient.p26b17e80} fill="#FF8B01" />
              <path clipRule="evenodd" d={svgClient.p39c32b00} fill="#0D5DF8" fillRule="evenodd" />
            </svg>

            {/* Edenred */}
            <svg className="h-[50px] w-[76px]" fill="none" viewBox="0 0 76 50">
              <path clipRule="evenodd" d={svgClient.p28588380} fill="#F72717" fillRule="evenodd" />
            </svg>

            {/* Grupo Brisas */}
            <div className="h-[20px] w-[160px] relative overflow-hidden">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientBrisas} />
            </div>

            {/* Altabix */}
            <div className="h-[22px] w-[133px] relative overflow-clip">
              <div
                className="absolute inset-0"
                style={{ maskImage: `url("${imgClientGroup}")`, maskSize: "132.885px 21.378px", maskRepeat: "no-repeat", maskPosition: "-0.001px 0px" }}
              >
                <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 132.886 21.3825">
                  <path d={svgClient.pf1b8570} fill="black" />
                  <path d={svgClient.p17836980} fill="black" />
                  <path d={svgClient.p2150fc80} fill="black" />
                  <path d={svgClient.p3d339430} fill="black" />
                  <path d={svgClient.p2b6bce00} fill="#25C9D1" />
                  <path d={svgClient.p9cf5b00} fill="#25C9D1" />
                  <path d={svgClient.p2ff54bc0} fill="#25C9D1" />
                  <path d={svgClient.p3876e100} fill="#25C9D1" />
                  <path d={svgClient.p33f11640} fill="#25C9D1" />
                  <path d={svgClient.p34a5b500} fill="#25C9D1" />
                  <path d={svgClient.p23aeff80} fill="black" />
                  <path d={svgClient.p53bde32} fill="black" />
                  <path d={svgClient.p3d514980} fill="black" />
                </svg>
              </div>
            </div>

            {/* Mera */}
            <div className="h-[24px] w-[101px] relative overflow-clip">
              <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 101.004 24.0011">
                <path d={svgClient.p1e2c0200} fill="black" />
                <path d={svgClient.p29dc2e00} fill="black" />
                <path d={svgClient.p3dd29e00} fill="black" />
                <path d={svgClient.pbca1800} fill="black" />
                <path d={svgClient.pa3925a0} fill="black" />
                <path d={svgClient.p261a72a8} fill="black" />
                <path d={svgClient.p8c49d00} fill="black" />
                <path d={svgClient.p24d36b00} fill="black" />
                <path d={svgClient.p3b1ebc00} fill="black" />
                <path d={svgClient.p9bb4fe0} fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        ref={aboutRef}
        className="w-full border-t border-[#efeef3] relative"
        style={{
          backgroundImage: `
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 454' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.25'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(24.65 7.8914 -10.623 20.112 201 -59.429)'><stop stop-color='rgba(205,29,240,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>"),
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 1366 454' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.24'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(23.7 30.056 -26.398 13.991 13.5 -0.000023491)'><stop stop-color='rgba(87,49,237,1)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")
          `,
        }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[112px] px-[18px] md:px-[10%] py-[90px]">
          {/* Label */}
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
              {tx.aboutLabel}
            </p>
            <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] text-black tracking-[-0.96px] leading-[0.83] max-w-[200px]">
              {tx.niceToMeet}
            </p>
          </div>

          {/* Photo + bio */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 flex-1">
            {/* Photo */}
            <div className="rounded-[18px] overflow-hidden shrink-0 w-[200px] h-[240px] sm:w-[240px] sm:h-[280px] md:w-[284px] md:h-[294px] relative"
              style={{
                background: "linear-gradient(135deg, #ece8fa 0%, #d3cae5 100%)"
              }}
            >
              <img
                alt="Abril Ríos"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image_IMG}
                style={{ top: "0%", left: "0%", width: "100%", height: "100%" }}
              />
            </div>

            {/* Bio + button */}
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42]">
                {tx.bio}
              </p>
              <a
                href={lang === "en" ? pdfResume : pdfCV}
                download={lang === "en" ? "Resume_Abril_Rios.pdf" : "CV_Abril_Rios.pdf"}
                className="group self-start flex items-center gap-2 px-8 py-4 rounded-[26px] border border-[rgba(87,49,237,0.18)] bg-[rgba(87,49,237,0.03)] hover:bg-[rgba(87,49,237,0.10)] transition-colors"
              >
                <span className="text-[#5731ed] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap">
                  {tx.downloadResume}
                </span>
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2d672d80} fill="#5731ED" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mx-[5%] px-[0px] pt-[32px] pb-[64px]">
          <p className="font-bold text-[#504e51] text-[14px] md:text-[16px] leading-[1.42]">
            {tx.footerCta}
          </p>
          <a href="https://www.linkedin.com/in/abril-rios-06301a201/" className="flex  items-center gap-2">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p33a02600} fill="#504E51" />
            </svg>
            <span className="text-[#504e51] text-[14px] tracking-[-0.14px]">Abril Ríos</span>
          </a>
        </div>
      </footer>

      </>}

      {/* ── PLAYGROUND PAGE ── */}
      {activePage === "playground" && (
        <section className="flex flex-col flex-1 min-h-[calc(100vh-64px)]">
          {/* Content */}
          <div className="flex-1 px-[18px] md:px-[15%] py-[70px] flex flex-col gap-8">
            {/* Heading block */}
            <div className="flex flex-col gap-2">
              <p className="font-medium text-[#4425d5] text-[16px] tracking-[-0.8px] opacity-80">
                {tx.playgroundBeyond}
              </p>
              <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[48px] text-black tracking-[-0.96px] leading-none">
                {tx.playgroundHeading}
              </p>
              <p className="text-[#504e51] text-[16px] leading-[1.42]">
                {tx.playgroundDesc}{" "}
                <strong>{tx.playgroundDescBold}</strong>
              </p>
            </div>

            {/* Projects area – placeholder */}
            
            <div className="w-full min-h-[452px] flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
              {/*  <p className="text-[#a098a1] text-[14px] tracking-[-0.14px]">{tx.playgroundEmpty}</p> */}
               
                <div className="flex flex-col gap-2">
                 <video className="rounded-[16px] " style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="265" height="620" controls>
                    <source src="https://res.cloudinary.com/dmbjyyh6n/video/upload/v1784254166/Portfolio%202026/Petmarket_Prototype_xdd3ei.mov" type="video/mp4" />
                  </video>
                 <p className="text-[#504e51] text-[16px] leading-[1.42]">PetMarket 2026 (Video) </p>
                </div>

                <div className="flex flex-col gap-2">
                <iframe className="rounded-[16px] " style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="250" height="590" src="https://embed.figma.com/proto/vXKKXAmqMN6jUWru3VnRxb/Log-in-Prototype--Backup-?content-scaling=fixed&kind=proto&node-id=10-158&scaling=scale-down-width&starting-point-node-id=4%3A472&page-id=2%3A2&embed-host=share" allowFullScreen></iframe>
                 <p className="text-[#504e51] text-[16px] leading-[1.42]">Gym Onboarding 2023</p>
                </div>
              
               <div className="flex flex-col gap-2">
                <iframe className="rounded-[16px] " style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="250" height="590" src="https://embed.figma.com/proto/kh8UJVlNgh4VjxFRixht9S/Prototype?node-id=65976-2478&page-id=805%3A0&starting-point-node-id=65976%3A2478&scaling=scale-down-width&content-scaling=fixed&embed-host=share" allowFullScreen></iframe>
                 <p className="text-[#504e51] text-[16px] leading-[1.42]">Tech App 2022</p>
                </div>

               <div className="flex flex-col gap-2">
                <iframe className="rounded-[25px] " style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="250" height="590" src="https://embed.figma.com/proto/aMBXZnVQrTMTUOZcQCdbl5/Web--Makeup--Plants?node-id=21-58&page-id=3%3A2&starting-point-node-id=21%3A58&scaling=scale-down-width&content-scaling=fixed&embed-host=share" allowFullScreen></iframe>
                 <p className="text-[#504e51] text-[16px] leading-[1.42]">Makeup App 2022</p>
                </div>
            </div>
               <br />
                <div className="flex flex-col gap-2">
                 <video className="rounded-[16px] " style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} controls>
                    <source src="https://res.cloudinary.com/dmbjyyh6n/video/upload/v1784255377/Portfolio%202026/Ai_tool_Prototype_gjf6lg.mp4" type="video/mp4" />
                  </video>
                  <p className="text-[#504e51] text-[16px] leading-[1.42]">Ai Tool Landing 2026 (Video) </p>
                 </div>
          </div>

          {/* Footer */}
          <footer className="w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mx-[5%] pt-[32px] pb-[64px]">
              <p className="font-bold text-[#504e51] text-[14px] md:text-[16px] leading-[1.42]">
                {tx.footerCta}
              </p>
              <a href="https://www.linkedin.com/in/abril-rios-06301a201/" className="flex items-center gap-2">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p33a02600} fill="#504E51" />
                </svg>
                <span className="text-[#504e51] text-[14px] tracking-[-0.14px]">Abril Ríos</span>
              </a>
            </div>
          </footer>
        </section>
      )}
    </div>
  );
}
