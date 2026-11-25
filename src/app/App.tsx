import image_hero from '@/imports/BGHero.png'
import image_IMG from '@/imports/IMG.png'

import { useRef, useState, useEffect } from "react";

import imgOverviewAiDoc from "../imports/image.png";
import imgOverviewDs from "../imports/image-1.png";
import imgOverviewHotel from "../imports/image-3.png";

// ─── Hotel Management ─────────────
import SelectProBgHM from "../imports/Selected Projects/HMBackground.png";
import SelectProBgHMMobile from "../imports/Selected Projects/HMBackgroundMobile.png";
import SelectProBg2 from "../imports/Selected Projects/2Background.png";
import SelectProBg3 from "../imports/Selected Projects/3Background.png";
import SelectProBg4 from "../imports/Selected Projects/4Background.png";

import UserFlowHM from "../imports/Selected Projects/HM/Userflows.png";
import SiteMapHM from "../imports/Selected Projects/HM/Sitemaps.png";
import LowFipHM from "../imports/Selected Projects/HM/Lowfi.png";
import ProtoHM from "../imports/Selected Projects/HM/Prototype.png";
import UsFlHM from "../imports/Selected Projects/HM/UFReservation.png";
import UsFlHM2 from "../imports/Selected Projects/HM/UFGuests.png";
import SitMapHM from "../imports/Selected Projects/HM/Sitemap.png";
import WiFrDash from "../imports/Selected Projects/HM/Wireframes/Dashboard.png";
import WiFrDash2 from "../imports/Selected Projects/HM/Wireframes/Dashboard2.png";
import WiFrRes from "../imports/Selected Projects/HM/Wireframes/Reservations.png";
import WiFrRes2 from "../imports/Selected Projects/HM/Wireframes/Reservations2.png";
import WiFrRes3 from "../imports/Selected Projects/HM/Wireframes/Reservations3.png";
import WiFrGues from "../imports/Selected Projects/HM/Wireframes/Guests.png";
import WiFrGues2 from "../imports/Selected Projects/HM/Wireframes/Guests2.png";
import WiFrGues3 from "../imports/Selected Projects/HM/Wireframes/Guests3.png";
import WiFrUser from "../imports/Selected Projects/HM/Wireframes/Users.png";
import WiFrRoo from "../imports/Selected Projects/HM/Wireframes/Rooms.png";
import WiFrAud from "../imports/Selected Projects/HM/Wireframes/Audit.png";
import WiFrHot from "../imports/Selected Projects/HM/Wireframes/Hotels.png";
import WiFrHot2 from "../imports/Selected Projects/HM/Wireframes/Hotels2.png";

// ─── Clients ─────────────
import imgClientXID from "../imports/Clients/XID.png";
import imgClientDOX from "../imports/Clients/DOX.png";
import imgClientEdenred from "../imports/Clients/Edenred.png";
import imgClientBrisas from "../imports/Clients/Brisas.png";
import imgClientAltabix from "../imports/Clients/Altabix.png";
import imgClientMera from "../imports/Clients/Mera.png";

// ─── Visual Design ─────────────
import imgvisualIllustration1 from "../imports/Visual Design/Visual Design/VD1.png";
import imgvisualIllustration2 from "../imports/Visual Design/Visual Design/VD2.png";
import imgvisualIllustration3 from "../imports/Visual Design/Visual Design/VD3.png";
import imgvisualIllustration4 from "../imports/Visual Design/Visual Design/VD4.png";

import imgvisualSocial1 from "../imports/Visual Design/Social Content/SD1.png";
import imgvisualSocial2 from "../imports/Visual Design/Social Content/SD2.png";
import imgvisualSocial3 from "../imports/Visual Design/Social Content/SD3.png";
import imgvisualSocial4 from "../imports/Visual Design/Social Content/SD4.png";

import imgvisualBrand1 from "../imports/Visual Design/Branding/BM1.png";
import imgvisualBrand2 from "../imports/Visual Design/Branding/BM2.png";
import imgvisualBrand3 from "../imports/Visual Design/Branding/BM3.png";
import imgvisualBrand4 from "../imports/Visual Design/Branding/BM4.png";

// ─── Playground ─────────────
import imgPlayAI from "../imports/Playground/AILeadflow.png";
import imgPlayPet from "../imports/Playground/Petmarket.png";
import imgPlayGym from "../imports/Playground/Gym.png";
import imgPlayFlor from "../imports/Playground/Floral.png";
import imgPlayMake from "../imports/Playground/Makeup.png";
import imgPlayPla from "../imports/Playground/Plants.png";
import imgPlayTech from "../imports/Playground/Tech.png";

// ─── Resume ─────────────
import pdfResume from "../imports/Resume_Abril_Rios.pdf";
import pdfCV from "../imports/CV_Abril_Rios.pdf";

// ─── SVG ─────────────
import svgPaths from "../imports/svg/svg-fr9kzdvg5s";
import svgLogo from "../imports/Icons/Logo.svg";
import svgSearch from "../imports/Icons/search.svg";
import svgHighfi from "../imports/Icons/high-fi.svg";
import svgSitemap from "../imports/Icons/sitemap.svg";
import svgWireframes from "../imports/Icons/wireframes.svg";
import svgSparkle from "../imports/Icons/Sparkle.svg";
import svgLogoFooter from "../imports/Icons/LogoFooter.svg";
import svgGithub from "../imports/Icons/Github.svg";
import svgBehance from "../imports/Icons/Behance.svg";
import svgDropdown from "../imports/Icons/Dropdown.svg";
import svgSparkle2 from "../imports/svg/sparkle.svg";
import svgLineStep from "../imports/svg/Linestep.svg";

// ─── Translations ────────────────────────────────────────────────────────────
const t = {
  en: {
    work: "Featured Work",
    about: "About",
    playground: "Playground",
    name: "Designing digital  experiences, with a focus on usability and visual coherence.",
    role: "Product Designer | UI/UX Designer ",
    tagline: "5 years of experience in UI/UX, with background in Computer Engineering. I turn ideas into functional and meaningful products.",
    location: "Mexico",
    faster: "Faster interface creation",
    designsys: "Design Systems delivered",
    devtime: "Less dev hand-off time",
    scrollExplore: "Scroll to explore",
    viewProjects: "View Projects",
    featuredWork: "Featured Work",
    selectedProjects: "Selected Projects",
    confidentiality: "Some professional work cannot be shared publicly due to confidentiality agreements.",
    card1Title: "DOX AI",
    card2Title: "Hotel Management Platform",
    card3Title: "Design System",
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
    myRoleVal: "Product Designer | UI/UX Designer ",
    year: "Year",
    yearVal: "2025",
    overviewLabel: "Overview",
    contextChallenge: "Context & Challenge",
    process: "Process",
    outcomeLabel: "Outcome & Learnings",
    exploreOnBehance: "Explore on Behance",
    aboutLabel: "About",
    niceToMeet: "I like understanding how things work.",
    bio: (
      <>
        I'm a Product Designer with a background in Computer Engineering and 5 years of experience designing digital products, from enterprise platforms and SaaS to mobile experiences.
        <br></br> <br></br>
        I enjoy taking complex requirements, finding what actually matters, and turning them into experiences that feel clear, useful, and intentional.
        <br></br> <br></br>
        Outside product design, I also work with illustration, visual content, and brand assets: because good design doesn't always live inside an interface.
        </>
    ),
    collaborations: "Visual Design",
    downloadResume: "Download Resume",
    footerCta: "Let's create something meaningful.",
    playgroundBeyond: "Beyond the Work",
    playgroundHeading: "Playground",
    playgroundDesc: "Freelance Concepts, experiments, and practice projects created to explore ideas, refine skills, and",
    playgroundDescBold: "stay creatively sharp.",
    playgroundEmpty: "Projects coming soon.",
    skills: "Skills & Expertise",
    toolsTitle: "Tools and Methodologies",
    contactTitle: " Let’s create something meaningful.",
    contactDesc: " Open to full-time roles and collaborations. If you have a project in mind I’d love to hear from you.",
    contactBut: "Get in touch",
    protoBut: "View Project",
    visualDesign: "Visual Design",
    visualTitle: "Illustration & Content",
    visualDesc: "A collection of illustrations, visual assets and branded content created during my time at XID.",
    visualSub: "This selection includes only work that has been publicly shared by XID. ",
    button1Title: "Illustration",
    button2Title: "Social & Content",
    button3Title: "Brand & Merchandising",
  },
  es: {
    work: "Trabajo destacado",
    about: "Sobre mí",
    playground: "Exploración",
    name: "Diseñando experiencias digitales, con un enfoque en usabilidad y coherencia visual.",
    role: "Diseñador de Producto | Diseñador UI/UX",
    tagline: "5 años de experiencia en UI/UX, con formación en Ingeniería Informática. Transformo ideas en productos funcionales y significativos.",
    location: "México",
    faster: "Creación rápida de interfaces",
    designsys: "Sistemas de diseño entregados",
    devtime: "Menos tiempo de traspaso a desarrollo",
    scrollExplore: "Desplázate para explorar",
    viewProjects: "Ver Proyectos",
    featuredWork: "Trabajo Destacado",
    selectedProjects: "Proyectos Seleccionados",
    confidentiality: "Algunos trabajos profesionales no pueden compartirse públicamente debido a acuerdos de confidencialidad.",
    card1Title: "DOX AI",
    card2Title: "Plataforma de Gestión Hotelera",
    card3Title: "Sistema de Diseño",
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
    myRoleVal: "Diseñadora de Producto | Diseñador UI/UX",
    year: "Año",
    yearVal: "2025",
    overviewLabel: "Resumen",
    contextChallenge: "Contexto y Desafío",
    process: "Proceso",
    outcomeLabel: "Resultados y Aprendizajes",
    exploreOnBehance: "Explorar Behance",
    aboutLabel: "Sobre mí",
    niceToMeet: "Me gusta entender cómo funcionan las cosas.",
    bio: (
      <>
        Soy diseñador de producto con formación en ingeniería informática y 5 años de experiencia diseñando productos digitales, desde plataformas empresariales y SaaS hasta experiencias móviles.

<br></br> <br></br>

Disfruto tomando requisitos complejos, descubriendo lo que realmente importa y transformándolos en experiencias claras, útiles e intencionadas.

<br></br> <br></br>

Además del diseño de producto, también trabajo con ilustración, contenido visual y activos de marca: porque el buen diseño no siempre reside dentro de una interfaz.
</>
    ),
    collaborations: "Diseño Visual ",
    downloadResume: "Descargar CV",
    footerCta: "Creemos algo significativo juntos.",
    playgroundBeyond: "Más allá del trabajo",
    playgroundHeading: "Exploración",
    playgroundDesc: "Conceptos freelance, experimentos y proyectos de práctica creados para explorar ideas, refinar habilidades y",
    playgroundDescBold: "mantener la creatividad activa.",
    playgroundEmpty: "Proyectos próximamente.",
    skills: "Habilidades y experiencia",
    toolsTitle: "Herramientas y metodologías",
    contactTitle: "Creemos algo significativo.",
    contactDesc: "Abierta a puestos de tiempo completo y colaboraciones. Si tienes algún proyecto en mente, me encantaría saber más al respecto.",
    contactBut: "Contáctame",
    protoBut: "Ver Proyecto",
    visualDesign: "Diseño Visual",
    visualTitle: "Ilustración y contenidos",
    visualDesc: "Una colección de ilustraciones, recursos visuales y contenido de marca creados durante mi etapa en XID.",
    visualSub: "Esta selección incluye únicamente trabajos que han sido compartidos públicamente por XID.",
    button1Title: "Ilustración",
    button2Title: "Redes sociales y contenidos",
    button3Title: "Marca y mercancía",
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
  const [activeProject, setActiveProject] = useState<"ai-doc" | "hotel" | "design-system">("hotel");
  const [activeContent, setActiveContent] = useState<"ilustration" | "social" | "brand">("ilustration");
  const tx = t[lang];

  const featuredRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const collaborationsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const openProject = (project: "ai-doc" | "hotel" | "design-system") => {
    setActiveProject(project);
    setActiveTab("overview");
  };

  const openContent = (content: "ilustration" | "social" | "brand") => {
    setActiveContent(content);
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = (ref?: React.RefObject<HTMLDivElement | null>) => {
    setActivePage("home");
    if (ref) setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);


  const userflowImages = [UsFlHM, UsFlHM2];
  const sitemapImages = [SitMapHM];
  const wireframeImages = [WiFrDash, WiFrDash2, WiFrRes, WiFrRes2, WiFrRes3, WiFrGues,  WiFrGues2, WiFrGues3, WiFrUser,  WiFrRoo, WiFrAud, WiFrHot, WiFrHot2];

  // Gallery state
  const [activeGallery, setActiveGallery] = useState(null); // Guardará el arreglo de imágenes activo
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Gallery navigation
  const openGallery = (images) => {
  setActiveGallery(images);
  setCurrentIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setIsZoomed(false); 
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setCurrentIndex((prev) => (prev + 1) % activeGallery.length);
     setIsZoomed(false); 
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setCurrentIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    setIsZoomed(false); 
  };

  // Block scroll
  useEffect(() => {
    if (activeGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeGallery]);
  
  return (
    
    <div className="min-h-screen w-full font-['Inter',sans-serif] overflow-x-visible">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 sm:flex flex-direction-column items-center justify-between px-[18px] py-4 md:px-[3%]  md:py-5 w-full bg-white/5 backdrop-blur-md">
        {/* Logo */}
        <button onClick={() => goHome()} className="hidden sm:flex items-center gap-1 bg-transparent border-none cursor-pointer">
          <div className="h-[19px] relative shrink-0 w-[17px]">
            <div className="h-[25px] w-[120px] relative">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgLogo} />
            </div>
          </div>
          
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
              onClick={() => goHome(visualRef)}
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
          <div className="flex hidden md:block items-center">
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

        {/* MOBILE NAV */}
              <div className="flex sm:hidden items-center justify-between w-full"> 
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
              </div>

          {/* Nav */}
      <div className="flex sm:hidden gap-4 px-[6px] pt-4">
        <button
          onClick={() => goHome(featuredRef)}
          className="text-[14px] text-black tracking-[-0.14px] hover:text-[#4425D5] transition-colors cursor-pointer bg-transparent border-none"
        >
          {tx.work}
        </button>
        <button
          onClick={() => goHome(visualRef)}
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
      </header>

      
      {activePage === "home" && <>

      {/* ── HERO ── */}
      <section
        className="relative w-full min-h-[440px] md:min-h-[546px]">
        <div className="flex flex-col justify-between h-full gap-8 px-[18px] md:px-[6%] py-[74px]  md:py-[104px]">
          {/* Content */}
          <div className="flex flex-col gap-5 md:gap-6 z-1">
            <div className="flex flex-col gap-4 md:gap-5">
            
            <div class="flex gap-4">
               {/* Role */}
             <p className="font-medium text-[#4425d5] text-[16px] md:text-[18px] tracking-[-1.2px]">
                {tx.role}
              </p>
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

            </div>
           
          {/* HERO */}
              <p className="font-['Cormorant_Garamond',serif] font-bold text-[32px] sm:text-[32px] md:text-[42px] text-black tracking-[-1.96px] leading-none max-w-[550px]">
                {tx.name}
              </p>
              
              <p className="text-[#504e51] text-[16px] md:text-[16px] leading-[1.42] max-w-[343px]">
                {tx.tagline}
              </p>
            </div>
          </div>

         {/* BG Hero */}
          <img class="top-6 right-5 absolute w-[632px] h-[562px] pointer-events-none z-0" src={image_hero} >
            </img>

          <div class="flex flex-col sm:flex-row justify-between mt-10 z-1">
             {/* STATS */}
            <div class="flex gap-5 sm:gap-6">
              <div>
                <p className="text-[#4425D5] text-[24px] md:text-[32px] font-semibold leading-[1.42] max-w-[240px]">
                 40% 
              </p>
              <p className="text-[#504e51] text-[16px] md:text-[16px] leading-[1.42] max-w-[343px]">
                 {tx.faster} 
              </p>
              </div>
              <div>
                <p className="text-[#4425D5] text-[24px] md:text-[32px] font-semibold leading-[1.42] max-w-[240px]">
                 +4
              </p>
              <p className="text-[#504e51] text-[16px] md:text-[16px] leading-[1.42] max-w-[343px]">
                 {tx.designsys} 
              </p>
              </div>
              <div>
                <p className="text-[#4425D5] text-[24px] md:text-[32px] font-semibold leading-[1.42] max-w-[240px]">
                 25%
              </p>
              <p className="text-[#504e51] text-[16px] md:text-[16px] leading-[1.42] max-w-[343px]">
                 {tx.devtime} 
              </p>
              </div>
            </div>


          {/* Scroll hint */}
          <div className="flex items-center justify-end gap-2 mt-12 sm:mt-0">
            <span className="text-[#4425d5] text-[16px] md:text-[18px] tracking-[-0.16px]">{tx.scrollExplore}</span>
            <div className="size-[24px] rotate-180">
              <ArrowIcon color="#4425D5" />
            </div>
          </div>
          </div>

        </div>

      </section>

      {/* ── FEATURED WORK ── */}
      <section ref={featuredRef} className="w-full ">

       {/* GLOW */}
      <div class="hidden absolute sm:grid rotate-[30deg] top-105 -left-25 w-[260px] h-[260px] bg-[#CD1DF0]/18 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
        <div className="flex flex-col gap-3 px-[18px] md:px-[6%] pb-5 pt-[48px]">
          {/* Left label */}
          <div className="flex flex-col gap-2 shrink-0 mx-[0px] mt-[0px] mb-[16px]">
            <p className="font-medium text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
              {tx.featuredWork}
            </p>
            <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] text-black tracking-[-0.96px] leading-none">
              {tx.selectedProjects}
            </p>
            <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42]">
              {tx.confidentiality}
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-row flex-wrap gap-4 flex-1 w-full">
            {/* Card 1 — Hotel Management Platform */}
            <button
              onClick={() => openProject("hotel")}
              className="bg-[#F9F7FB]/48 py-3 px-6 flex items-center rounded-[50px] border border-[#efeef3] ursor-pointer hover:shadow-md transition-shadow"
            >
                <span  className="font-semibold text-[#504E51] text-[14px] md:text-[16px] tracking-[-0.8px]">
                  {tx.card2Title}
                </span>
            </button>

            {/* Card 2 — AI Documentation Platform */}
            <button
              onClick={() => openProject("ai-doc")}
              className="bg-[#F9F7FB]/48 py-3 px-6 flex items-center rounded-[50px] border border-[#efeef3] ursor-pointer hover:shadow-md transition-shadow"
            >
                <span className="font-semibold text-[#504E51] text-[14px] md:text-[16px] tracking-[-0.8px]">
                    {tx.card1Title}
                </span>
            </button>

            {/* Card 3 — Enterprise Design System */}
            <button
              onClick={() => openProject("design-system")}
              className="bg-[#F9F7FB]/48 flex py-3 px-6 items-center rounded-[50px] border border-[#efeef3] ursor-pointer hover:shadow-md transition-shadow"
            >
              <span  className="font-semibold text-[#504E51] text-[14px] md:text-[16px] tracking-[-0.8px]">
                  {tx.card3Title}
                </span>
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
          <div className={`flex flex-col  h-full gap-10 min-h-[400px] px-[18px] md:px-[8%] pt-[70px] ${activeTab === "overview" ? "pb-[66%] sm:pb-[70px]" : "pb-[70px]"}`}>

            {/* ── HOTEL OVERVIEW ── */}
            {activeProject === "hotel" && activeTab === "overview" && (
              <>
              {/* Background */}
              <img class="absolute top-0 right-0 w-full h-full pointer-events-none z-0" src={SelectProBgHM} >
              </img>

              {/* MOBILE Background */}
              <img class="sm:hidden top-0 right-0 absolute w-full h-full pointer-events-none z-0" src={SelectProBgHMMobile} >
              </img>
                
                <div className="flex flex-col gap-3 z-10">
                  {/* Step */} 
                  <p className="text-[#FFFFFF] text-[12px] md:text-[14px] leading-[1.42] max-w-[570px]"> 
                    01 / Overview
                    </p>
                  {/* Pïll */} 
                  <div className="self-start bg-[#BEA4EA]/10 px-[10px] py-[4px] rounded-[54px]">
                    <span className="font-semibold text-[#BEA4EA] text-[12px] md:text-[14px] tracking-[-0.7px] opacity-80">
                      {lang === "en" ? "AI DOCUMENTATION TOOL" : "HERRAMIENTA DE DOCUMENTACIÓN CON IA"}
                    </span>
                  </div>
                  {/* Info */} 
                  <p className="text-[#FFFFFF] font-semibold text-[24px] md:text-[32px] lg:text-[40px] tracking-[-1.08px] leading-[0.9] max-w-[570px]">
                    {lang === "en" ? "Simplifying complex hotel operations." : "Simplificación de operaciones hoteleras complejas."}
                  </p>
                  <p className="text-[#FFFFFF]/80 text-[14px] md:text-[16px] leading-[1.42] max-w-[570px]">
                    {lang === "en"
                      ? "A centralized platform designed to manage hotel operations, reporting, and day-to-day administrative tasks."
                      : "Una plataforma centralizada diseñada para gestionar operaciones hoteleras, reportes y tareas administrativas del día a día."}
                  </p>

                </div>

                {/* CARD */}
                <div className="lg:bottom-25 md:bottom-8 bottom-8 absolute flex flex-row items-center gap-6 sm:gap-5 z-10 bg-[#FFFFFF]/5 p-[16px] rounded-[18px] w-[365px]">
                   {/* Sparkle */}   
                  <div className="h-[25px] w-[25px] relative">
                    <img className="absolute inset-0 max-w-none object-cover size-full" src={svgSparkle2}/>
                  </div>
                    {/* Info */}   
                  <div className="flex flex-col">
                    <p className="font-semibold text-[18px] text-[#BEA4EA] tracking-[-0.8px]">{lang === "en" ? "Design Goal" : "Objetivo de diseño"}</p>
                    <p className="text-[#FFFFFF]/80 text-[16px] leading-[1.42] tracking-[-0.42px]">
                      {lang === "en"
                        ? "Make daily operations clearer, faster, and more consistent."
                        : "Haz que las operaciones diarias sean más claras, rápidas y consistentes."}
                    </p>
                  </div>

                </div>
              </>
            )}

            {/* ── HOTEL CONTEXT & CHALLENGE ── */}
            {activeProject === "hotel" && activeTab === "context" && (
              <>
              {/* Background */}
              <img class="top-0 right-0 absolute w-full h-full pointer-events-none z-0" src={SelectProBg2} >
              </img>

              <div className="flex flex-col gap-3 z-10 sm:w-[905px]">
                  {/* Step */} 
                  <p className="text-[#FFFFFF] text-[12px] md:text-[14px] leading-[1.42] max-w-[570px]"> 
                    02 /  Context & Challenge
                  </p>
                  {/* Info */} 
                 <p className="text-[#FFFFFF] font-semibold text-[24px] md:text-[32px] lg:text-[40px] tracking-[-1.08px] leading-[0.9]">
                    {lang === "en" ? "From operational complexity to clear opportunity" : "De la complejidad operativa a una oportunidad clara."}
                  </p>
                  <p className="text-[#FFFFFF]/80 text-[14px] md:text-[16px] leading-[1.42] ">
                    {lang === "en"
                      ? "The hotel management platform needed to centralize daily operations, reduce manual work, and make it easier for staff access the right information at the right time."
                      : "La plataforma de gestión hotelera necesitaba centralizar las operaciones diarias, reducir el trabajo manual y facilitar que el personal pudiera acceder a la información adecuada en el momento oportuno."}
                  </p>
              </div>

              {/* Container */}
              <div className="flex flex-col sm:flex-row gap-5 justify-between z-10">    
                
                  {/* CARD */}
                  <div className="flex flex-col w-full gap-6 sm:gap-5  bg-[#FFFFFF]/5 p-[16px] rounded-[18px]">
                    {/* Sparkle */}   
                    <div className="h-[25px] w-[25px] relative">
                      <img className="absolute inset-0 max-w-none object-cover size-full" src={svgSparkle2}/>
                    </div>
                      {/* Info */}   
                    <div className="flex flex-col">
                      <p className="font-semibold text-[18px] text-[#FFFFFF] tracking-[-0.8px] pb-2">
                        {lang === "en" ? "Operational complexity" : "Complejidad operativa"}
                      </p>
                      <p className="text-[#FFFFFF]/80 text-[16px] leading-[1.42] tracking-[-0.42px]">
                        {lang === "en"
                          ? "Multiple processes, modules and user roles to manage every day."
                          : "Múltiples procesos, módulos y roles de usuario que gestionar a diario."}
                      </p>
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="flex flex-col w-full gap-6 sm:gap-5  bg-[#FFFFFF]/5 p-[16px] rounded-[18px]">
                    {/* Sparkle */}   
                    <div className="h-[25px] w-[25px] relative">
                      <img className="absolute inset-0 max-w-none object-cover size-full" src={svgSparkle2}/>
                    </div>
                      {/* Info */}   
                    <div className="flex flex-col">
                      <p className="font-semibold text-[18px] text-[#FFFFFF] tracking-[-0.8px] pb-2">
                        {lang === "en" ? "Disconnected workflows" : "Flujos de trabajo desconectados"}
                      </p>
                      <p className="text-[#FFFFFF]/80 text-[16px] leading-[1.42] tracking-[-0.42px]">
                        {lang === "en"
                          ? "Information was fragmented across tools and systems, causing delays and errors."
                          : "La información estaba fragmentada entre diversas herramientas y sistemas, lo que provocaba retrasos y errores."}
                      </p>
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="flex flex-col w-full gap-6 sm:gap-5  bg-[#FFFFFF]/5 p-[16px] rounded-[18px]">
                    {/* Sparkle */}   
                    <div className="h-[25px] w-[25px] relative">
                      <img className="absolute inset-0 max-w-none object-cover size-full" src={svgSparkle2}/>
                    </div>
                      {/* Info */}   
                    <div className="flex flex-col">
                      <p className="text-[#FFFFFF] font-semibold text-[18px]  tracking-[-0.8px] pb-2">
                        {lang === "en" ? "Design opportunity Goal" : "Oportunidad de diseño"}
                      </p>
                      <p className="text-[#FFFFFF]/80 text-[16px] leading-[1.42] tracking-[-0.42px]">
                        {lang === "en"
                          ? "A unified platform to simplify tasks, improve visibility and support faster decisions."
                          : "Una plataforma unificada para simplificar tareas, mejorar la visibilidad y facilitar una toma de decisiones más rápida."}
                      </p>
                    </div>
                  </div>

              </div>
              </>
            )}

            {/* ── HOTEL PROCESS ── */}
            {activeProject === "hotel" && activeTab === "process" && (
              <>
                {/* Background */}
              <img class="top-0 right-0 absolute w-full h-full pointer-events-none z-0" src={SelectProBg3} >
              </img>

              <div className="flex flex-col gap-3 z-10 sm:w-[905px]">
                  {/* Step */} 
                  <p className="text-[#FFFFFF] text-[12px] md:text-[14px] leading-[1.42] max-w-[570px]"> 
                    03 /  Process
                  </p>
                  {/* Info */} 
                 <p className="text-[#FFFFFF] font-semibold text-[24px] md:text-[32px] lg:text-[40px] tracking-[-1.08px] leading-[0.9]">
                    {lang === "en" ? "From structure to interaction" : "De la estructura a la interacción"}
                  </p>
                  <p className="text-[#FFFFFF]/80 text-[14px] md:text-[16px] leading-[1.42] ">
                    {lang === "en"
                      ? "With the key requirements defined, I translated the findings into clear workflows and interface structures."
                      : "Una vez definidos los requisitos clave, traduje los hallazgos en flujos de trabajo y estructuras de interfaz claros."}
                  </p>
              </div>

              {/* Steper Container */}
              <div className="hidden sm:flex flex-col z-10 h-[15px]">    
                {/* Line */}   
                <div className="h-[2px] w-full relative">
                      <img className="inset-0 max-w-none object-cover size-full" src={svgLineStep}/>
                </div>
                {/* Steps */}
                <div className="-top-5 relative flex flex-row justify-between z-10 mx-[160px]">
                  {/* Step */} 
                  <p className="bg-[#BEA4EA] text-[#171C39] font-bold px-[16px] py-[8px] rounded-[64px]">
                    1
                  </p>
                  {/* Step */} 
                  <p className="bg-[#BEA4EA] text-[#171C39] font-bold px-[16px] py-[8px] rounded-[64px]">
                    2
                  </p>
                  {/* Step */} 
                  <p className="bg-[#BEA4EA] text-[#171C39] font-bold px-[16px] py-[8px] rounded-[64px]">
                    3
                  </p>
                </div>
              </div>

              {/*CARD Container */}
              <div className=" hidden sm:flex flex-col sm:flex-row gap-5 justify-between z-10">    
                
                {/* CARD*/}
                <div className="relative h-[180px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                  style={{ backgroundImage: `url(${UserFlowHM})` }}>
                  {/* BUTTON*/}
                  <button onClick={() => openGallery(userflowImages)} class="absolute bottom-3 flex flex-row w-[92%] justify-between right-3 flex items-center cursor-pointer border-none hover:opacity-70 transition-opacity">
                      <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                        Userflows
                      </span>
                      <div class="size-[24px] rotate-90">
                        <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                        </svg>
                      </div>
                  </button>
                </div>

                {/* CARD*/}
                <div className="relative h-[180px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                  style={{ backgroundImage: `url(${SiteMapHM})` }}>
                  {/* BUTTON*/}
                  <button onClick={() => openGallery(sitemapImages)} class="absolute bottom-3 flex flex-row w-[92%] justify-between right-3 flex items-center cursor-pointer border-none hover:opacity-70 transition-opacity">
                      <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                       Sitemaps
                      </span>
                      <div class="size-[24px] rotate-90">
                        <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                        </svg>
                      </div>
                  </button>
                </div>

                {/* CARD*/}
                <div className="relative h-[180px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                  style={{ backgroundImage: `url(${LowFipHM})` }}>
                  {/* BUTTON*/}
                  <button onClick={() => openGallery(wireframeImages)} class="absolute bottom-3 flex flex-row w-[92%] justify-between right-3 flex items-center cursor-pointer border-none hover:opacity-70 transition-opacity">
                      <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                        Low-fi Wireframes
                      </span>
                      <div class="size-[24px] rotate-90">
                        <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                        </svg>
                      </div>
                  </button>
                </div>
              </div>

              {/*INFO Container */}
              <div className=" hidden sm:flex flex-col sm:flex-row w-full gap-5 justify-between z-10 -mt-5">    
                <p className="text-[#FFFFFF]/80 font-regular text-[14px] md:text-[16px] leading-[1.42] w-full">
                    {lang === "en"
                      ? "Defined the main paths and decision points for core operational tasks."
                      : "Se definieron las rutas principales y los puntos de decisión para las tareas operativas fundamentales."}
                </p>

                <p className="text-[#FFFFFF]/80 text-[14px] md:text-[16px] leading-[1.42] w-full">
                    {lang === "en"
                      ? "Organized modules and navigation to make key features easier to access."
                      : "Módulos y navegación organizados para facilitar el acceso a las funciones clave."}
                </p>

                <p className="text-[#FFFFFF]/80 text-[14px] md:text-[16px] leading-[1.42] w-full">
                    {lang === "en"
                      ? "Validating layout, hierarchy, and task flows before defining the visual design."
                      : "Validar la disposición, la jerarquía y los flujos de tareas antes de definir el diseño visual."}
                </p>
              </div>
              
              {/* MOBILE */}
              <div className="sm:hidden flex flex-col sm:flex-row gap-5 justify-between z-10">    
                  {/*Steper Container */}
                  <div className="sm:hidden flex flex-col z-10 h-[15px]">    
                    {/* Line */}   
                    <div className="h-[2px] w-full relative">
                        <img className="inset-0 max-w-none object-cover size-full" src={svgLineStep}/>
                    </div>
                    {/* Steps */}
                    <div className="-top-5 relative flex flex-row justify-between z-10 mx-[160px]">
                      {/* Step */} 
                      <p className="bg-[#BEA4EA] text-[#171C39] font-bold px-[16px] py-[8px] rounded-[64px]">
                      1
                      </p>
                  </div>
                  </div>

                  {/* CARD*/}
                  <div className="relative h-[180px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                    style={{ backgroundImage: `url(${UserFlowHM})` }}>
                    {/* BUTTON*/}
                    <button onClick={() => openGallery(userflowImages)} class="absolute bottom-3 flex flex-row w-[92%] justify-between right-3 flex items-center cursor-pointer border-none hover:opacity-70 transition-opacity">
                        <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                          Userflows
                        </span>
                        <div class="size-[24px] rotate-90">
                          <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                          </svg>
                        </div>
                    </button>
                  </div>
                  
                  {/*Steper Container */}
                  <div className="sm:hidden flex flex-col z-10 h-[15px]">    
                    {/* Line */}   
                    <div className="h-[2px] w-full relative">
                        <img className="inset-0 max-w-none object-cover size-full" src={svgLineStep}/>
                    </div>
                    {/* Steps */}
                    <div className="-top-5 relative flex flex-row justify-between z-10 mx-[160px]">
                      {/* Step */} 
                      <p className="bg-[#BEA4EA] text-[#171C39] font-bold px-[16px] py-[8px] rounded-[64px]">
                      2
                      </p>
                  </div>
                  </div>

                  {/* CARD*/}
                  <div className="relative h-[180px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                    style={{ backgroundImage: `url(${SiteMapHM})` }}>
                    {/* BUTTON*/}
                    <button onClick={() => openGallery(sitemapImages)} class="absolute bottom-3 flex flex-row w-[92%] justify-between right-3 flex items-center cursor-pointer border-none hover:opacity-70 transition-opacity">
                        <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                        Sitemaps
                        </span>
                        <div class="size-[24px] rotate-90">
                          <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                          </svg>
                        </div>
                    </button>
                  </div>
                  
                  {/*Steper Container */}
                  <div className="sm:hidden flex flex-col z-10 h-[15px]">    
                    {/* Line */}   
                    <div className="h-[2px] w-full relative">
                        <img className="inset-0 max-w-none object-cover size-full" src={svgLineStep}/>
                    </div>
                    {/* Steps */}
                    <div className="-top-5 relative flex flex-row justify-between z-10 mx-[160px]">
                      {/* Step */} 
                      <p className="bg-[#BEA4EA] text-[#171C39] font-bold px-[16px] py-[8px] rounded-[64px]">
                      3
                      </p>
                  </div>
                  </div>

                  {/* CARD*/}
                  <div className="relative h-[180px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                    style={{ backgroundImage: `url(${LowFipHM})` }}>
                    {/* BUTTON*/}
                    <button onClick={() => openGallery(wireframeImages)} class="absolute bottom-3 flex flex-row w-[92%] justify-between right-3 flex items-center cursor-pointer border-none hover:opacity-70 transition-opacity">
                        <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                          Low-fi Wireframes
                        </span>
                        <div class="size-[24px] rotate-90">
                          <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                          </svg>
                        </div>
                    </button>
                  </div>

              </div>

              </>
            )}

            {/* ── HOTEL OUTCOME & LEARNINGS ── */}
            {activeProject === "hotel" && activeTab === "outcome" && (
              <>
              {/* Background */}
              <img class="top-0 right-0 absolute w-full h-full pointer-events-none z-0" src={SelectProBg4} >
              </img>

                
                <div className="flex flex-col gap-3 z-10">
                  {/* Step */} 
                  <p className="text-[#FFFFFF] text-[12px] md:text-[14px] leading-[1.42] max-w-[570px]"> 
                    04 / Outcome & Learnings
                    </p>
                  {/* Info */} 
                  <p className="text-[#FFFFFF] font-semibold text-[24px] md:text-[32px] lg:text-[40px] tracking-[-1.08px] leading-[0.9] max-w-[570px]">
                    {lang === "en" ? "The final product in action" : "El producto final en acción"}
                  </p>
                </div>

                <div className=" flex flex-col sm:flex-row items-center gap-6 z-10">
                  <div className=" flex flex-col gap-6 z-10">
                    {/* CARD */}
                    <div className="flex flex-row items-center gap-6 sm:gap-5 bg-[#FFFFFF]/5 p-[16px] rounded-[18px] lg:w-[450px] md:w-[300px]">
                      {/* Sparkle */}   
                      <div className="h-[25px] w-[40px] relative">
                        <img className="absolute inset-0 max-w-none object-cover size-full" src={svgSparkle2}/>
                      </div>
                        {/* Info */}   
                      <div className="flex flex-col">
                        <p className="font-semibold text-[18px] text-[#BEA4EA] tracking-[-0.8px]">
                          {lang === "en" ? "Key learnings" : "Aprendizajes clave"}
                          </p>
                        <p className="text-[#FFFFFF]/80 text-[16px] leading-[1.42] tracking-[-0.42px]">
                          {lang === "en"
                            ? "Clear workflows depend on understanding the relationships between tasks, users, and business needs."
                            : "Unos flujos de trabajo claros dependen de comprender las relaciones entre las tareas, los usuarios y las necesidades del negocio."}
                        </p>
                      </div>

                    </div>
                    {/* CARD */}
                    <div className="flex flex-row items-center gap-6 sm:gap-5 bg-[#FFFFFF]/5 p-[16px] rounded-[18px] lg:w-[450px] md:w-[300px]">
                      {/* Sparkle */}   
                      <div className="h-[25px] w-[30px] relative">
                        <img className="absolute inset-0 max-w-none object-cover size-full" src={svgSparkle2}/>
                      </div>
                        {/* Info */}   
                      <div className="flex flex-col">
                        <p className="font-semibold text-[18px] text-[#BEA4EA] tracking-[-0.8px]">
                          {lang === "en" ? "The outcome" : "El resultado"}
                          </p>
                        <p className="text-[#FFFFFF]/80 text-[16px] leading-[1.42] tracking-[-0.42px]">
                          {lang === "en"
                            ? "Key operational tasks brought together in a more structured interface."
                            : "Tareas operativas clave reunidas en una interfaz más estructurada."}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* CARD*/}
                  <div className="relative h-[200px] w-full sm:h-[350px] sm:w-[620px] bg-cover bg-center bg-no-repeat ursor-pointer rounded-[18px]" 
                    style={{ backgroundImage: `url(${ProtoHM})` }}>
                    {/* BUTTON*/} 
                    <button class="absolute bottom-3 right-3 flex items-center rounded-[24px] px-6 md:px-6 py-3 md:py-3 gap-2 cursor-pointer bg-[#5731ED] mt-3 border-none hover:opacity-70 transition-opacity">
                      <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                        <a href="https://www.figma.com/proto/juUsVkWKsFFVPdaFN7Toky/Hotel-Management?node-id=65-2391&p=f&viewport=84%2C462%2C0.07&t=NIOLvf4lA6vr2Eib-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=65%3A2391&show-proto-sidebar=1&page-id=30%3A3" target="_blank" rel="noopener noreferrer"> {tx.protoBut} </a>
                      </span>
                      <div class="size-[24px] rotate-90">
                        <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                        </svg>
                      </div>
                    </button>
                  </div>

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
        <div className="bg-[#f9f7fb] w-full lg:w-[350px] xl:w-[420px] shrink-0">
          <div className="flex flex-col gap-4 lg:gap-8 px-6 md:px-10 lg:px-10 py-6 md:py-8 lg:py-[70px] h-full">
            
            {/* NAV */}
            <div className="flex flex-col gap-2">
              
              {/* TITTLE*/}
              <button 
                onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)}
                className="flex items-center justify-between w-full bg-transparent border-none text-left p-0 cursor-pointer lg:cursor-default lg:pointer-events-none"
              >
                <p className="font-semibold text-[18px] text-black tracking-[-0.36px]">
                  {activeProject === "ai-doc"
                    ? (lang === "en" ? "AI Documentation Platform" : "Plataforma de Documentación IA")
                    : activeProject === "hotel"
                    ? (lang === "en" ? "Hotel Management Platform" : "Plataforma de Gestión Hotelera")
                    : (lang === "en" ? "Enterprise Design System" : "Sistema de Diseño Empresarial")}
                </p>
                
                {/* ARROW */}
                <span className={`transition-transform duration-200 lg:hidden ${isProjectMenuOpen ? 'rotate-180' : ''}`}>
                  <div className="h-[12px] w-[20px] relative">
                    <img alt="" className="max-w-none size-full" src={svgDropdown}/>
                  </div>
                </span>
              </button>

              <p className="font-semibold text-[#504E51] text-[16px] tracking-[-0.8px] opacity-80 mt-1 lg:mt-0">
                Project menu
              </p>

              {/*PROJECT MENU*/}
              <div className={`${isProjectMenuOpen ? "flex" : "hidden"} lg:flex flex-col gap-2 mt-2 lg:mt-0`}>
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
                      onClick={() => {
                        key === "designsystem" ? openProject("design-system") : setActiveTab(key);
                        setIsProjectMenuOpen(false); 
                      }}
                      className="flex items-center gap-2 cursor-pointer bg-transparent border-none text-left py-1 lg:py-0"
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
            </div>

            {/* DROPDOWN INFO */}
            <div className={`${isProjectMenuOpen ? "flex" : "hidden"} lg:flex flex-col gap-4 lg:gap-6`}>
              {/* Divider */}
              <div className="w-full h-px bg-[#efeef3]" />

              {/* MENU LIST */}
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
        </div>
      </section>

      {/* ── BEHANCE ── */}
      <section
        ref={collaborationsRef}
        className="w-full relative overflow-hidden"
      >
        
        <div className="relative flex px-[18px] md:px-[6%] py-[68px]  z-2">
          {/* Text */}
          <div className="flex flex-col sm:flex-row items-center justify-between shrink-0 px-[24px] py-[16px] rounded-[24px] w-full" 
          style={{
            background:`rgba(249, 247, 251, 0.32)`,
            border: `1px solid rgba(68, 37, 213, 0.08)`
            ,
            }}>
            <p className="font-bold text-[#000000] text-[16px] leading-[1.42] max-w-[392px]">
              {lang === "en"
                ? "A closer look at my design process."
                : "Un vistazo más detallado a mi proceso de diseño."}
            </p>

            {/* ICONS */}   
            <div className="hidden sm:flex  flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[19px] w-[19px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgSearch} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  Research
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[19px] w-[24px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgSitemap} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  Site maps
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[18px] w-[23px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgWireframes} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  Wireframes
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[19px] w-[22px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgHighfi} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  High-fi
                </p>
              </div>

            </div>

            {/* ICONS MOBILE*/}   
            <div className="sm:hidden grid grid-cols-2 gap-4 mt-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[19px] w-[19px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgSearch} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  Research
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[19px] w-[24px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgSitemap} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  Site maps
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[18px] w-[23px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgWireframes} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  Wireframes
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-[8px] rounded-[8px]"
                style={{
                border: `1px solid #D4D1EC`
                ,
                }}>
                  <div className="h-[19px] w-[22px] relative overflow-hidden">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgHighfi} />
                  </div>
                </div> 

                <p class="text-[#504E51] text-[14px] leading-[1.42] max-w-[392px]">
                  High-fi
                </p>
              </div>

            </div>

            <button class="flex items-center gap-2 cursor-pointer bg-transparent border-none hover:opacity-70 transition-opacity">
                  <span class="font-semibold text-[#4425d5] text-[14px] tracking-[-0.14px]">
                    <a href="https://www.behance.net/abrilrios" target="_blank" rel="noopener noreferrer"> {tx.exploreOnBehance} </a>
                  </span>
                  <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#4425D5"></path>
                    </svg>
                  </div>
            </button>
          </div>
        </div>

      </section>

      {/* ── VISUAL DESIGN ── */}
      <section ref={visualRef} className="w-full">
       
        <div className="flex flex-col gap-3 px-[18px] md:px-[6%] py-[48px] overflow-hidden">
           {/* GLOW */}
            <div class="hidden absolute sm:grid rotate-[30deg] top-420 right-50 w-[260px] h-[260px] bg-[#5731ED]/18 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
          {/* Title */}
          <div className="flex flex-col gap-2 shrink-0 mx-[0px] mt-[0px] mb-[16px]">
            <p className="font-medium text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
              {tx.visualDesign}
            </p>
            <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] text-black tracking-[-0.96px] leading-none">
              {tx.visualTitle}
            </p>
            <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42]">
              {tx.visualDesc}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap  gap-4 flex-1 w-full">
            {/* Button 1 */}
            <button
              onClick={() => openContent("ilustration")
              }
              className="bg-[#F9F7FB]/48 py-3 px-6 flex items-center rounded-[50px] border border-[#efeef3] ursor-pointer hover:shadow-md transition-shadow"
            >
                <span className="font-semibold text-[#504E51] text-[14px] md:text-[16px] tracking-[-0.8px]">
                    {tx.button1Title}
                </span>
            </button>

            {/* Button 2 */}
            <button
              onClick={() => openContent("social")}
              className="bg-[#F9F7FB]/48 py-3 px-6 flex items-center rounded-[50px] border border-[#efeef3] ursor-pointer hover:shadow-md transition-shadow"
            >
                <span  className="font-semibold text-[#504E51] text-[14px] md:text-[16px] tracking-[-0.8px]">
                  {tx.button2Title}
                </span>
            </button>

            {/* Button 3 */}
            <button
              onClick={() => openContent("brand")}
              className="bg-[#F9F7FB]/48 flex py-3 px-6 items-center rounded-[50px] border border-[#efeef3] ursor-pointer hover:shadow-md transition-shadow"
            >
              <span  className="font-semibold text-[#504E51] text-[14px] md:text-[16px] tracking-[-0.8px]">
                  {tx.button3Title}
                </span>
            </button>
          </div>

          <div>

            {/* ── PROJECTS ── */}
            <div className="z-5">
           <div className={`flex justify-between w-full overflow-hiden flex-wrap h-[285px] sm:h-[260px] md:h-[680px] lg:h-[265px] xl:h-[275px] mb-4`}>

            {/* ── ILLUSTRATION  ── */}
            {activeContent === "ilustration" && (
              <>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] md:mb-5 object-cover object-center"
                src={imgvisualIllustration1} style={{}}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualIllustration2} style={{ }}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualIllustration3} style={{}}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualIllustration4} style={{}}/>  
              </>
            )}

            {/* ── SOCIAL CONTENT ── */}
            {activeContent === "social" && (
              <>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] md:mb-5 object-cover object-center"
                src={imgvisualSocial1} style={{}}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] bject-cover object-center"
                src={imgvisualSocial2} style={{ }}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualSocial3} style={{}}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualSocial4} style={{}}/> 
              </>
            )}

            {/* ── BRAND ── */}
            {activeContent === "brand" && (
              <>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] md:mb-5 object-cover object-center"
                src={imgvisualBrand1} style={{}}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualBrand2} style={{ }}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualBrand3} style={{}}/>
              <img alt="" className="h-[132px] sm:h-full md:h-[335px] lg:h-[265px] xl:h-[270px] object-cover object-center"
                src={imgvisualBrand4} style={{}}/> 
              </>
            )}

          </div>
        </div>

          </div>
            <p className="text-right text-[#504e51] text-[14px] md:text-[16px] leading-[1.42]">
              {tx.visualSub}
            </p>
        </div>
      </section>

      {/* ── SELECTED CLIENTS ── */}
      <section
        ref={collaborationsRef}
        className="w-full relative overflow-hidden"
      >
       
        <div className="flex flex-col gap-10 items-start px-[18px] md:px-[6%] py-[68px] z-10 w-full">
          {/* Text */}
          <div className="flex flex-col gap-2 shrink-0">
            <p className="font-medium text-[#4425d5] text-[16px] tracking-[-0.8px] opacity-80">
              {lang === "en" ? "Collaborations" : "Colaboraciones"}
            </p>
            <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[48px] text-black tracking-[-0.96px] leading-none">
              {lang === "en" ? "Selected Clients" : "Clientes Seleccionados"}
            </p>
            <p className="text-[#504e51] text-[16px] leading-[1.42] max-w-[600px]">
              {lang === "en"
                ? "During my time at XID, I contributed to digital products for clients across multiple industries. Many of these projects remain confidential."
                : "Durante mi tiempo en XID, contribuí a productos digitales para clientes de múltiples industrias. Muchos de estos proyectos son confidenciales."}
            </p>
          </div>

          {/* Logos grid */}
          <div className="hidden sm:flex flex-row justify-between  gap-x-10 gap-y-10 items-center w-full">
            {/* XID*/}
              <div className="h-[38px] w-[140px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientXID} />
              </div>

            {/* Dox */}
              <div className="h-[34px] w-[140px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientDOX} />
              </div>

            {/* Edenred */}
              <div className="h-[60px] w-[100px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientEdenred} />
              </div>

            {/* Grupo Brisas */}
            <div className="h-[20px] w-[160px] relative overflow-hidden">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientBrisas} />
            </div>

            {/* Altabix */}
              <div className="h-[25px] w-[160px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientAltabix} />
              </div>

            {/* Mera */}
              <div className="h-[32px] w-[140px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientMera} />
              </div>
          </div>

          {/* Logos MOBILE */}
          <div className="sm:hidden grid grid-cols-3 gap-x-5 gap-y-5 items-center justify-items-center">
            {/* XID*/}
              <div className="h-[25px] w-[90px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientXID} />
              </div>

            {/* Dox */}
              <div className="h-[22px] w-[90px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientDOX} />
              </div>

            {/* Edenred */}
              <div className="h-[60px] w-[90px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientEdenred} />
              </div>

            {/* Grupo Brisas */}
            <div className="h-[15px] w-[122px] relative ">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientBrisas} />
            </div>

            {/* Altabix */}
              <div className="h-[16px] w-[95px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientAltabix} />
              </div>

            {/* Mera */}
              <div className="h-[19px] w-[80px] relative overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgClientMera} />
              </div>
          </div>

        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        ref={aboutRef} className="w-full relative">
        <div className="flex flex-col lg:flex-row px-[18px] md:px-[6%] py-[90px]">
          
          {/* Photo + bio */}
          <div className="flex flex-col items-center justify-center sm:flex-row gap-12 flex-1">
            {/* Photo */}
            <div className="rounded-[18px] overflow-hidden shrink-0 w-[200px] h-[240px] sm:w-[240px] sm:h-[280px] md:w-[348px] md:h-[427px] relative">
              <img
                alt="Abril Ríos"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={image_IMG}
                style={{ top: "0%", left: "0%", width: "100%", height: "100%" }}
              />
            </div>

            {/* Bio + button */}
            <div className="flex flex-col gap-5 flex-1 max-w-[800px]">
              {/* Label */}
              <div className="flex flex-col gap-2 shrink-0">
                 <p className="font-medium text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
                  {tx.aboutLabel}
                 </p>
                  <p className="font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] text-black tracking-[-0.96px] leading-[0.83] ">
                   {tx.niceToMeet}
                  </p>
              </div>
              <p className="text-[#504e51] text-[14px] md:text-[16px] leading-[1.42] max-w-[700px]">
                {tx.bio}
              </p>

              <div class="flex items-center justify-end max-w-[800px]"> 
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
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section ref={skillsRef} className="w-full ">
        <div className="flex flex-col gap-3 px-[18px] md:px-[6%] py-[48px]">
          {/* Title*/}
          <div className="flex flex-col gap-2 shrink-0 mx-[0px] mt-[0px] mb-[16px]">
            <p className="font-medium text-[#4425d5] text-[14px] md:text-[16px] tracking-[-0.8px] opacity-80">
              {tx.skills}
            </p>
            <p className="capitalize font-['Cormorant_Garamond',serif] font-bold text-[36px] md:text-[48px] text-black tracking-[-0.96px] leading-none">
              {tx.toolsTitle}
            </p>
          </div>

          {/* Pills*/}
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 flex-1 w-full">
            {/* 1*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Figma
                </span>
            </div>

            {/* 2*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6  flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Design Systems
                </span>
            </div>

            {/* 3*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6  flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    FigmaMake
                </span>
            </div>

            {/* 4*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Photoshop
                </span>
            </div>

            {/* 5*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Figma Variables
                </span>
            </div>

            {/* 6*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Atomic Design
                </span>
            </div>

             {/* 7*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    FigJam
                </span>
            </div>

            {/* 8*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Interaction Design 
                </span>
            </div>

            {/* 9*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Google Stitch
                </span>
            </div>

            {/* 10*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Scrum/Agile
                </span>
            </div>

            {/* 11*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    User Research
                </span>
            </div>

            {/* 12*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    User Flows
                </span>
            </div>

             {/* 13*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    AI Assisted
                </span>
            </div>

            {/* 14*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Wireframing
                </span>
            </div>

            {/* 15*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Prototyping
                </span>
            </div>

            {/* 16*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    Responsive
                </span>
            </div>

            {/* 17*/}
            <div className="bg-[#F9F7FB]/48 py-1 sm:py-3 px-4 sm:px-6 flex items-center rounded-[50px] border border-[#efeef3]"> 
              <span className="text-[#504E51] text-[14px] md:text-[16px]">
                    HTML & CSS
                </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section ref={contactRef} className="w-full ">
                 
        <div className="flex flex-col gap-3 px-[18px] md:px-[6%] py-[48px] mb-0 sm:mb-3 mt-0 sm:mt-6">
          {/* card*/}
          <div className="flex flex-col items-center text-center gap-3 px-[18px] md:px-[6%] py-[32px] md:py-[64px] rounded-[24px] border border-[#4425D5]/10 bg-[#4425D5]/4">
            <div className="flex flex-col items-center gap-2 shrink-0 mx-[0px] mt-[0px] mb-[16px]">
              <div className="h-[40px] w-[40px] relative mb-2">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgSparkle} />
              </div>
              <p className="capitalize,serif] font-bold text-[24px] md:text-[32px] text-black tracking-[-0.96px] leading-none">
                {tx.contactTitle}
              </p>
              <p className="text-[#504e51] text-[16px] leading-[1.42] max-w-[600px]">
                {tx.contactDesc}
              </p>
               <button class="flex items-center rounded-[24px] px-6 md:px-6 py-3 md:py-3 gap-2 cursor-pointer bg-[#5731ED] mt-3 border-none hover:opacity-70 transition-opacity">
                  <span class="font-semibold text-[#FFFFFF] text-[14px] tracking-[-0.14px]">
                    <a href="https://www.linkedin.com/in/abril-rios-06301a201" target="_blank" rel="noopener noreferrer"> {tx.contactBut} </a>
                  </span>
                  <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#FFFFFF"></path>
                    </svg>
                  </div>
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full">
        <div className="flex flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mx-[5%] px-[0px] pt-[32px] pb-[64px]  border-t border-[#EFEEF3]">
        
        <button onClick={() => goHome()} className="flex items-center gap-1 bg-transparent border-none cursor-pointer">
          <div className="h-[19px] relative shrink-0 w-[17px]">
            <div className="h-[20px] w-[100px] relative">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgLogoFooter}/>
            </div>
          </div>
        </button>
        
        <div className="flex gap-4">
          <a href="https://github.com/AbrilRE" target="_blank" rel="noopener noreferrer" >
            <div className="h-[24px] w-[24px] relative">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgGithub}/>
            </div>
          </a>
          <a href="https://www.behance.net/abrilrios" target="_blank" rel="noopener noreferrer">
            <div className="h-[24px] w-[24px] relative">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgBehance}/>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/abril-rios-06301a201/" target="_blank" rel="noopener noreferrer">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p33a02600} fill="#504E51" /></svg>
          </a>
        </div>
         
        </div>
      </footer>

      </>}

      {/* ── PLAYGROUND PAGE ── */}
      {activePage === "playground" && (
        <section className="flex flex-col flex-1 min-h-[calc(100vh-64px)]">
          {/* BG Hero */}
          <img class="top-18 right-45 absolute w-[650px] h-[580px] pointer-events-none z-0" src={image_hero} >
            </img>

          {/* Content */}
          <div className="flex-1 px-[18px] md:px-[8%] py-[70px] flex flex-col gap-8 z-5">
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

          {/* Projects*/}
          <div className="flex flex-col gap-[16px] sm:gap-[24px]">
            {/*ROW 1 */}
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]">
              {/* PET MARKET*/}
              <div className="relative h-[220px] sm:h-[420px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{ backgroundImage: `url(${imgPlayPet})` }}>
                <a className="absolute right-4 bottom-4 hover:scale-104 transition-all duration-300 transform-gpu" href="https://www.behance.net/gallery/256492993/PetMarket-UIUX-Product-Design" target="_blank" >
                  <p className="flex gap-2 text-[#ffffff] font-medium hover:underline hover:decoration-2">
                    UI/UX Product Design | View proyect
                    <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#ffffff"></path>
                    </svg>
                    </div>
                  </p>
                </a>
              </div>

              {/* AI LEAD*/}
              <div className="relative h-[220px] sm:h-[420px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{ backgroundImage: `url(${imgPlayAI})` }}>
                <a className="absolute right-4 bottom-4 hover:scale-104 transition-all duration-300 transform-gpu" href="https://www.behance.net/gallery/256540443/AI-LeadFlow-UIUX-Product-Design" target="_blank" >
                  <p className="flex gap-2 text-[#ffffff] font-medium hover:underline hover:decoration-2">
                    UI/UX Product Design | View proyect
                    <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#ffffff"></path>
                    </svg>
                    </div>
                  </p>
                </a>
              </div>
            </div>

            {/*ROW 2 */}
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]">
              {/* TECH*/}
              <div className="relative h-[200px] sm:h-[280px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{ backgroundImage: `url(${imgPlayTech})` }}>
                <a className="absolute right-4 bottom-4 hover:scale-104 transition-all duration-300 transform-gpu" href="https://www.behance.net/gallery/148526741/TechBuy-Mobile-App-UIUX" target="_blank" >
                  <p className="flex gap-2 text-[#ffffff] font-medium hover:underline hover:decoration-2">
                    TechBuy UI/UX Mobile | View proyect
                    <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#ffffff"></path>
                    </svg>
                    </div>
                  </p>
                </a>
              </div>
              {/* GYM*/}
              <div className="relative h-[200px] sm:h-[280px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{ backgroundImage: `url(${imgPlayGym})` }}>
                <a className="absolute right-4 bottom-4 hover:scale-104 transition-all duration-300 transform-gpu" href="https://www.behance.net/gallery/255181209/Gym-Mobile-App-UI" target="_blank" >
                  <p className="flex gap-2 text-[#ffffff] font-medium hover:underline hover:decoration-2">
                    Gym UI Mobile  | View proyect
                    <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#ffffff"></path>
                    </svg>
                    </div>
                  </p>
                </a>
              </div>
              {/* FLORAL*/}
              <div className="relative h-[200px] sm:h-[280px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{ backgroundImage: `url(${imgPlayFlor})` }}>
                <a className="absolute right-4 bottom-4 hover:scale-104 transition-all duration-300 transform-gpu" href="https://www.behance.net/gallery/255182643/Floral-Mobile-App-UI" target="_blank" >
                  <p className="flex gap-2 text-[#ffffff] font-medium hover:underline hover:decoration-2">
                    Floral UI Mobile | View proyect
                    <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#ffffff"></path>
                    </svg>
                    </div>
                  </p>
                </a>
              </div>
            </div>

            {/*ROW 3 */}
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]">
              {/* Makeup*/}
              <div className="relative h-[200px] sm:h-[280px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{ backgroundImage: `url(${imgPlayMake})` }}>
                <a className="absolute right-4 bottom-4 hover:scale-104 transition-all duration-300 transform-gpu" href="https://www.behance.net/gallery/148521679/MakeUp-Mobile-App-UI" target="_blank" >
                  <p className="flex gap-2 text-[#ffffff] font-medium hover:underline hover:decoration-2">
                    MakeUP UI/UX Mobile | View proyect
                    <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#ffffff"></path>
                    </svg>
                    </div>
                  </p>
                </a>
              </div>
              {/* Plants*/}
              <div className="relative h-[200px] sm:h-[280px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{ backgroundImage: `url(${imgPlayPla})` }}>
                <a className="absolute right-4 bottom-4 hover:scale-104 transition-all duration-300 transform-gpu" href="https://www.behance.net/gallery/148523261/Plants-Web-Design-UI" target="_blank" >
                  <p className="flex gap-2 text-[#ffffff] font-medium hover:underline hover:decoration-2">
                    Plants UI Web | View proyect
                    <div class="size-[24px] rotate-90">
                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M8.53 10.53C8.46134 10.6037 8.37854 10.6628 8.28654 10.7038C8.19454 10.7448 8.09523 10.7668 7.99452 10.7686C7.89382 10.7704 7.79379 10.7518 7.7004 10.7141C7.60701 10.6764 7.52218 10.6203 7.45096 10.549C7.37974 10.4778 7.3236 10.393 7.28588 10.2996C7.24816 10.2062 7.22963 10.1062 7.23141 10.0055C7.23319 9.90478 7.25523 9.80546 7.29622 9.71346C7.33721 9.62146 7.39631 9.53866 7.47 9.47L11.47 5.47C11.6106 5.32955 11.8012 5.25066 12 5.25066C12.1988 5.25066 12.3894 5.32955 12.53 5.47L16.53 9.47C16.6037 9.53866 16.6628 9.62146 16.7038 9.71346C16.7448 9.80546 16.7668 9.90478 16.7686 10.0055C16.7704 10.1062 16.7518 10.2062 16.7141 10.2996C16.6764 10.393 16.6203 10.4778 16.549 10.549C16.4778 10.6203 16.393 10.6764 16.2996 10.7141C16.2062 10.7518 16.1062 10.7704 16.0055 10.7686C15.9048 10.7668 15.8055 10.7448 15.7135 10.7038C15.6215 10.6628 15.5387 10.6037 15.47 10.53L12.75 7.81V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V7.81L8.53 10.53Z" fill="#ffffff"></path>
                    </svg>
                    </div>
                  </p>
                </a>
              </div>
              {/* NEW*/}
              <div className="relative h-[200px] sm:h-[280px] w-full bg-cover bg-center bg-no-repeat ursor-pointer rounded-[16px]" 
                style={{}}>
                
              </div>
            </div>
          </div>
          </div>

           {/* ── FOOTER ── */}
      <footer className="w-full">
        <div className="flex flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mx-[5%] px-[0px] pt-[32px] pb-[64px]  border-t border-[#EFEEF3]">
        
        <button onClick={() => goHome()} className="flex items-center gap-1 bg-transparent border-none cursor-pointer">
          <div className="h-[19px] relative shrink-0 w-[17px]">
            <div className="h-[20px] w-[100px] relative">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgLogoFooter}/>
            </div>
          </div>
        </button>
        
        <div className="flex gap-4">
          <a href="https://github.com/AbrilRE" target="_blank" rel="noopener noreferrer" >
            <div className="h-[24px] w-[24px] relative">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgGithub}/>
            </div>
          </a>
          <a href="https://www.behance.net/abrilrios" target="_blank" rel="noopener noreferrer">
            <div className="h-[24px] w-[24px] relative">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={svgBehance}/>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/abril-rios-06301a201/" target="_blank" rel="noopener noreferrer">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p33a02600} fill="#504E51" /></svg>
          </a>
        </div>
         
        </div>
      </footer>
        </section> 
      )}

     {/* ── OVERLAY── */}
    {activeGallery && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm">
        
        {/* X */}
        <button 
          onClick={closeGallery} 
          className="absolute top-6 right-6 text-white text-2xl bg-transparent border-none cursor-pointer z-50 p-2"
        >
          ✕
        </button>

        {/* < */}
        {activeGallery.length > 1 && (
          <button 
            onClick={prevImage} 
            className="absolute left-6 text-white bg-black/40 p-3 rounded-full cursor-pointer border-none z-50 size-12 flex items-center justify-center text-xl hover:bg-black/70 transition-colors"
          >
            ‹
          </button>
        )}

        {/* IMG */}
        <div className={`max-h-[89vh] max-w-[90%] bg-zinc-900/50 p-2 rounded-xl border border-white/10 shadow-2xl flex transition-all duration-300 ${
          isZoomed 
            ? "overflow-auto items-start justify-start w-[80vw] h-[85vh]" 
            : "overflow-hidden items-center justify-center"
        }`}>
          <img 
            src={activeGallery[currentIndex]} 
            alt="Galería" 
            onClick={() => setIsZoomed(!isZoomed)}
            className={`rounded-lg transition-transform duration-200 select-none shrink-0 ${
              isZoomed 
                ? "cursor-zoom-out max-h-none max-w-none w-[2500px] h-autoscale-[1]" 
                : "object-contain max-h-[85vh] w-full cursor-zoom-in"
            }`} 
          />
        </div>

        {/* > */}
        {activeGallery.length > 1 && (
          <button 
            onClick={nextImage} 
            className="absolute right-6 text-white bg-black/40 p-3 rounded-full cursor-pointer border-none z-50 size-12 flex items-center justify-center text-xl hover:bg-black/70 transition-colors"
          >
            ›
          </button>
        )}

      </div>
      
    )}
    </div>
    
  );
}

