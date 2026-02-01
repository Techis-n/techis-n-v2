"use client"

import { Dialog, DialogPanel } from "@headlessui/react"
import React, { useEffect, useState, useRef } from "react"
import { services } from "./data/services-data"
import { founders } from "./data/founders-data"
import { testimonial } from "./data/testimonials-data"
import { motion } from "framer-motion"
import { projects } from "./data/projects-data"
import { Typewriter } from "react-simple-typewriter"
import { RiNextjsFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa6"
import { SiTailwindcss } from "react-icons/si"
import { SiTypescript,SiRender,SiZapier,SiN8N,SiKubernetes,SiPostgresql,SiVercel } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa6"
import { FaPython,FaDocker,FaAws } from "react-icons/fa"
import { useRouter } from "next/navigation"
import BackgroundEffects from "./components/background-effects"
// import { TbBrand4Chan } from "react-icons/tb"; // hypothetical, if you have a custom icon
import { MdOutlineGraphicEq } from "react-icons/md"; 

import { FounderCard } from "./components/founders-card"

const techs = [
  { name: "Python", icon: FaPython },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "AWS", icon: FaAws },
  // { name: "Azure", icon: SiMicrosoftazure },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Render", icon: SiRender },
  { name: "Vercel", icon: SiVercel },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "n8n", icon: SiN8N },
  { name: "Zapier", icon: SiZapier },
  // { name: "LangChain", icon: TbBrand4Chan },
  { name: "LangGraph", icon: MdOutlineGraphicEq }
  
]

type Service = {
  id: string
  logo: string
  image: string
  p1: string
  p2: string
}

const Page = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<Service>()
  const [isOpen, setisOpen] = useState(false)

  const elementsRef = useRef<HTMLElement[]>([])
  elementsRef.current = []

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el)
    }
  }

  const router = useRouter()

  const contactpage = () => {
    router.push("/contactus")
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("valuescontainer")) {
              entry.target.classList.add("valuesanime")
            } else if (entry.target.classList.contains("rightcard")) {
              entry.target.classList.add("animeright")
            } else if (entry.target.classList.contains("hideService")) {
              entry.target.classList.add("showService")
            } else if (entry.target.classList.contains("techStack") && ratio === 1) {
              entry.target.classList.add("showStack")
            } else {
              entry.target.classList.add("corevalues")
            }
          } else {
            if (entry.target.classList.contains("valuescontainer")) {
              entry.target.classList.remove("valuesanime")
            } else if (entry.target.classList.contains("rightcard")) {
              entry.target.classList.remove("animeright")
            } else if (entry.target.classList.contains("hideService")) {
              entry.target.classList.remove("showService")
            } else if (entry.target.classList.contains("techStack")) {
              entry.target.classList.remove("showStack")
            } else {
              entry.target.classList.remove("corevalues")
            }
          }
        })
      },
      { threshold: [0, 0.3, 0.5, 0.75, 1] },
    )

    elementsRef.current.forEach((el) => {
      observer.observe(el)
    })

    const services = document.querySelectorAll(".eachservice")
    services.forEach((values) => observer.observe(values))
    const stack = document.querySelectorAll(".techStack")
    stack.forEach((values) => observer.observe(values))

    return () => {
      observer.disconnect()
    }
  })

  const visibleHexes2 = new Set([
    "6-6",
    "6-5",
    "6-7",
    "5-6",
    "7-6",
    "5-5",
    "7-7",
    "6-4",
    "6-8",
    "4-6",
    "8-6",
    "5-4",
    "7-8",
    "4-5",
    "8-7",
    "5-8",
    "7-4",
    "6-3",
    "6-9",
    "3-6",
    "9-6",
    "4-4",
    "8-8",
    "3-5",
    "9-7",
    "5-9",
    "7-3",
    "4-8",
    "8-4",
    "6-2",
    "6-10",
    "2-6",
    "10-6",
    "3-4",
    "9-8",
    "2-5",
    "10-7",
    "4-9",
    "8-3",
    "5-10",
    "7-2",
    "3-8",
    "9-4",
    "6-1",
    "6-11",
    "1-6",
    "11-6",
    "2-4",
    "10-8",
    "1-5",
    "11-7",
    "3-9",
    "9-3",
    "4-10",
    "8-2",
    "5-11",
    "7-1",
    "2-8",
    "10-4",
    "6-0",
    "6-12",
    "0-6",
    "12-6",
    "1-4",
    "11-8",
    "0-5",
    "12-7",
    "2-9",
    "10-3",
    "3-10",
    "9-2",
    "4-11",
    "8-1",
    "5-12",
    "7-0",
    "1-8",
    "11-4",
  ])

  const [index, setIndex] = useState(0);

  // Alternating colors: even index = blue, odd = red
  const getColor = (i: number) => (i % 2 === 0 ? "var(--textHighlights)" : "var(--buttonHover)");

  return (
    <main>
      <BackgroundEffects />

      {/* Hero Section */}
      <section id="homePage" className="w-full h-[70vh] lg:h-[85vh] relative scroll-mt-[12vh] text-(--altText)">
        <div className="h-full flex flex-col lg:flex-row">
          <div className="flex flex-col gap-y-5 items-center justify-center w-full lg:w-2/3 h-full px-2">
            <h1 className="text-lg lg:text-5xl font-bold text-center">
              Drive Innovation with Expert Technology Solutions
            </h1>
            <span className="text-md font-serif text-center">
              Expertly delivering solutions by{" "}
              <span className="font-bold" style={{ color: getColor(index) }}>
                <Typewriter
                  words={["Designing", "Building", "Testing", "Improving", "Automating", "Deploying"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onType={(count) => setIndex(count)}
                />
              </span>
            </span>
          </div>
          <div className="lg:w-1/3 lg:h-full flex justify-end items-end p-5">
            <div className="flex flex-col h-32 font-mono text-xs font-bold" style={{ color: "var(--altText)" }}>
              <span className="flex gap-x-2">
                <b>-</b>
                <span className="flex flex-col gap-y-1">
                  <span>Great tech doesn't just solve problems</span>
                  <span>it builds what&apos;s next...</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-[50vw] absolute bottom-0 left-0 lg:left-auto lg:top-[30%] lg:right-0 overflow-hidden flex lg:flex-row-reverse">
          {Array.from({ length: 50 }).map((_, row) => (
            <div
              key={row}
              className={`flex flex-col relative overflow-visible -ml-[2.5px] ${row % 2 === 0 ? "mt-[5px]" : ""}`}
            >
              {Array.from({ length: 15 }).map((_, index) => {
                const key = `${row}-${index}`
                const isVisible = visibleHexes2.has(key)

                return (
                  <React.Fragment key={key}>
                    <div
                      className={`
                            w-2.5 h-2.5 clip-hexagon m-px flex
                            ${!isVisible ? `invisible` : `bg-(--patternHexagon) opacity-20`}
                          `}
                    ></div>
                  </React.Fragment>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicesection"
        className="grid lg:grid-cols-[40%_60%] items-start p-5 bg-(--background2) relative scroll-mt-[12vh] text-(--altText)"
      >
        <div className="lg:sticky lg:top-[12%] w-full">
          <div className="text-center p-5 flex flex-col gap-y-5 lg:h-[88vh]">
            <span className="text-2xl font-extrabold" style={{ color: "var(--textDark)" }}>
              Why choose us
            </span>
            <span className="text-justify">
              At Techis-N, we believe in empowering our clients by partnering closely with them from the very start of a
              project to its successful completion. This helps us to understand not just what our clients want, but why
              they need it—allowing us to co-create solutions that directly reflect their vision and solve real
              challenges. We also listen, advise, and integrate seamlessly with your goals to develop smart, scalable,
              and tailor-made digital strategies that enhance efficiency, and keep you ahead in a fast moving digital
              world.
            </span>

            <div className="absolute w-full h-full hidden lg:flex items-end -z-20 p-4">
              <div className="w-full flex flex-row-reverse -top-8 -right-8">
                {Array.from({ length: 50 }).map((_, row) => (
                  <div
                    key={row}
                    className={`flex flex-col relative overflow-visible -ml-[2.5px] ${row % 2 === 0 ? "mt-[5px]" : ""}`}
                  >
                    {Array.from({ length: 15 }).map((_, index) => {
                      const key = `${row}-${index}`
                      const isVisible = visibleHexes2.has(key)

                      return (
                        <React.Fragment key={key}>
                          <div
                            className={`
                                  w-2.5 h-2.5 clip-hexagon m-px flex
                                  ${!isVisible ? `invisible` : `bg-(--patternHexagon) opacity-20`}
                                `}
                          ></div>
                        </React.Fragment>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="servicePage" className="h-full flex flex-col p-5 gap-y-4">
          {services.map((oneService) => (
            <div
              key={oneService.id}
              className="eachservice hideService w-full flex flex-col shrink-0 gap-y-4 p-5 relative text-white overflow-x-hidden before:absolute before:inset-0 before:-translate-x-full before:transition-transform before:duration-0 hover:before:translate-x-0 hover:before:transition-transform hover:before:duration-500 hover:before:ease-in-out rounded-md shadow-lg hover:shadow-2xl"
              style={
                {
                  backgroundImage: `linear-gradient(to right, var(--serviceGradientStart), var(--serviceGradientMid), var(--serviceGradientEnd))`,
                  "--service-hover": "var(--serviceHover)",
                } as React.CSSProperties
              }
              onMouseEnter={() => setHoveredServiceId(oneService.id)}
              onMouseLeave={() => setHoveredServiceId(null)}
            >
              <div
                id="header"
                className="w-full grid grid-rows-[auto,fit-content(100px)] grid-cols-2 gap-y-10 relative z-10"
              >
                {/* <div
                  className="rounded-full w-24 h-24 bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: `url(${oneService.logo})` }}
                ></div> */}
                <img src={oneService.logo} alt={`Logo of ${oneService.id}`} className="rounded-full w-24 h-24 shadow-lg" />

                {/* <div
                  className="min-h-full bg-cover bg-center rounded-md shadow-lg"
                  style={{ backgroundImage: hoveredServiceId === oneService.id ? `url(${oneService.image})` : "" }}
                ></div> */}

                <div className="min-h-full rounded-md shadow-lg relative overflow-hidden">
  <img
    src={oneService.image}
    alt={oneService.id || "Service Image"}
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />
</div>




                <span
                  className="h-fit col-span-2 text-2xl lg:text-3xl text-nowrap z-20 font-bold"
                  style={{ color: "var(--textHighlights)" }}
                >
                  {oneService.id}
                </span>
              </div>

              <p id="content" className="gap-y-4 text-justify relative z-10">
                {oneService.p1}
              </p>
              <button
                className="px-6 py-2 text-white font-medium rounded-full transition w-fit self-center z-20 shadow-md hover:shadow-lg"
                style={{ background: "var(--buttons)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--buttonHover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--buttons)")}
                onClick={() => {
                  setisOpen(true)
                  setSelectedService(oneService)
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {isOpen && (
          <Dialog open={isOpen} onClose={() => setisOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-0" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 z-10">
              <DialogPanel
                className="max-w-5xl space-y-4 rounded-xl p-12 relative z-20 shadow-2xl"
                style={{
                  background: "var(--serviceDialog)",
                  borderColor: "var(--borderColorLight)",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: "10px"
                }}
              >
                {selectedService && (
                  <div className="w-full h-full flex flex-col gap-y-5 text-white  ">
                    <div
                      id="header"
                      className="w-full h-[200px] flex justify-center items-center z-10 bg-cover bg-no-repeat bg-center rounded-md shadow-lg"
                      style={{ backgroundImage: `url(${selectedService.image})` }}
                    >
                      <div
                        className="flex text-5xl bg-black/70 p-5 rounded-lg font-bold"
                        style={{ color: "var(--textHighlights)" }}
                      >
                        {selectedService.id}
                      </div>
                    </div>
                    <p id="content" className="gap-y-4 text-justify relative z-10">
                      {selectedService.p1}
                      <br />
                      <br />
                      {selectedService.p2}
                    </p>
                    <button
                      className="w-fit rounded-lg shadow-sm shadow-black hover:text-white hover:shadow-md p-5 self-center transition"
                      style={
                        {
                          background: "var(--buttons)",
                          "--hover-shadow": "var(--buttons)",
                          borderRadius: "8px" 
                        } as React.CSSProperties
                        
                      }
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--buttonHover)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--buttons)")}
                      onClick={contactpage}
                    >
                      Discuss Your Project
                    </button>
                  </div>
                )}
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </section>

      {/* About Section */}
      <section id="aboutSection" className="min-h-screen flex flex-col w-full relative scrollbar-hide scroll-mt-[12vh]">
        <span id="aboutentry" className="font-bold mt-10 text-[28px]" style={{ color: "var(--textDark)", fontFamily: "'Arial', sans-serif" }}>
          Committed to Client Satisfaction
        </span>
        <span id="aboutcontent">
          Our clients are at the core of everything we do; <br />
          we are dedicated to delivering exceptional solutions to meet their expectations, empower their success, <br />
          and ensure their happiness every step of the way.
        </span>
        <br />
        <div className="boxcards" style={{ background: "var(--cardLight)", color: "var(--cardDark)" }}>
          our core values
        </div>
        <br />

        <div className="valuescontent grid lg:grid-cols-2 gap-3 py-3">
          <div className="valuescontainer " ref={addToRefs} style={
                {
                  backgroundImage: `linear-gradient(to right, var(--serviceGradientStart), var(--serviceGradientMid), var(--serviceGradientEnd))`,
                  "--service-hover": "var(--serviceHover)",
                } as React.CSSProperties
              }>
            <span id="content1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "var(--cardLight)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="var(--textDark)"
                  version="1.1"
                  width="25"
                  height="25"
                  viewBox="0 0 256 190"
                >
                  <path d="M48.12,27.903C48.12,13.564,59.592,2,74.023,2c14.339,0,25.903,11.564,25.903,25.903  C99.834,42.335,88.27,53.806,74.023,53.806C59.684,53.806,48.12,42.242,48.12,27.903z M191,139h-47V97c0-20.461-17.881-37-38-37H43  C20.912,60,1.99,79.14,2,98v77c-0.026,8.533,6.001,12.989,12,13c6.014,0.011,12-4.445,12-13v-75h8v88h78v-88h8l0.081,50.37  c-0.053,8.729,5.342,12.446,10.919,12.63h60C207.363,163,207.363,139,191,139z M170.09,115.515h67.759v11.818H170.09V115.515z   M246.121,61.938c-4.351,0-7.879,3.527-7.879,7.879c0,1.255,0.301,2.438,0.824,3.491l-16.351,8.092l-14.737-24.9  c2.314-1.373,3.87-3.889,3.87-6.774c0-4.351-3.527-7.879-7.879-7.879s-7.879,3.527-7.879,7.879c0,2.885,1.556,5.401,3.87,6.774  l-14.675,24.795l-16.026-7.972c0.527-1.057,0.831-2.245,0.831-3.506c0-4.351-3.527-7.879-7.879-7.879  c-4.351,0-7.879,3.528-7.879,7.879s3.527,7.879,7.879,7.879c0.524,0,1.034-0.054,1.529-0.151l5.955,30.091h68.547l6.272-30.105  c0.519,0.107,1.056,0.165,1.607,0.165c4.351,0,7.879-3.527,7.879-7.879C254,65.466,250.473,61.938,246.121,61.938z" />
                </svg>
              </div>
              <p id="svgcontent">Client Empowerment</p>
            </span>
            <span id="content">
              We empower our clients by ensuring they are fully informed and have the control they need to make the best
              decisions about their software.
            </span>
          </div>

          <div className="valuescontainer" ref={addToRefs} style={
                {
                  backgroundImage: `linear-gradient(to right, var(--serviceGradientEnd), var(--serviceGradientMid), var(--serviceGradientStart))`,
                  "--service-hover": "var(--serviceHover)",
                } as React.CSSProperties
              }>
            <span id="content1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "var(--cardLight)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25" height="25" viewBox="0 0 64 64">
                  <g>
                    <path
                      fill="var(--textDark)"
                      d="M62.242,53.757L51.578,43.093C54.373,38.736,56,33.56,56,28C56,12.536,43.464,0,28,0S0,12.536,0,28   s12.536,28,28,28s26,11.641,26,26S42.359,54,28,54z M28,54C13.641,54,2,42.359,2,28S13.641,2,28,2s26,11.641,26,26S42.359,54,28,54z M60.828,60.828c-1.562,1.562-4.095,1.562-5.656,0   L44.769,50.425c2.145-1.606,4.051-3.513,5.657-5.656l10.402,10.402C62.391,56.732,62.391,59.266,60.828,60.828z"
                    />
                    <path
                      fill="var(--textDark)"
                      d="M28,4C14.745,4,4,14.745,4,28s10.745,24,24,24s24-10.745,24-24S41.255,4,28,4z M28,50   C15.85,50,6,40.15,6,28S15.85,6,28,6s22,9.85,22,22S40.15,50,28,50z"
                    />
                    <path
                      fill="var(--textDark)"
                      d="M28,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c8.284,0,15,6.716,15,15c0,0.553,0.447,1,1,1s1-0.447,1-1   C45,18.611,37.389,11,28,11z"
                    />
                  </g>
                </svg>
              </div>
              <p id="svgcontent">Transparency</p>
            </span>
            <span id="content2">
              We uphold transparency by giving clear communication, full disclosure, and consistent updates, ensuring
              our clients are always informed and confident in every decision.
            </span>
          </div>

          <div className="valuescontainer" ref={addToRefs} style={
                {
                  backgroundImage: `linear-gradient(to right, var(--serviceGradientStart), var(--serviceGradientMid), var(--serviceGradientEnd))`,
                  "--service-hover": "var(--serviceHover)",
                } as React.CSSProperties
              }>
            <span id="content1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "var(--cardLight)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="var(--textDark)"
                  height="25"
                  width="25"
                  version="1.1"
                  viewBox="0 0 430.214 430.214"
                >
                  <path d="M327.005,39.943H103.208L0,156.118l215.107,234.152l215.107-234.152L327.005,39.943z M148.882,145.943l-30.906-91h196.266  l-31.5,91H148.882z M277.55,160.943l-62.375,180.195l-61.198-180.195H277.55z M133.041,145.943H29.104l75.192-84.639  L133.041,145.943z M138.135,160.943l66.473,195.727L24.801,160.943H138.135z M293.423,160.943h111.99L225.711,356.555  L293.423,160.943z M298.615,145.943l28.739-83.023l73.756,83.023H298.615z" />
                </svg>
              </div>
              <p id="svgcontent">Excellence</p>
            </span>
            <span id="content">
              We are committed to delivering high-quality solutions that drive impactful results, always maintaining the
              highest standards in every project.
            </span>
          </div>

          <div className="valuescontainer" ref={addToRefs}  style={
                {
                  backgroundImage: `linear-gradient(to right, var(--serviceGradientEnd), var(--serviceGradientMid), var(--serviceGradientStart))`,
                  "--service-hover": "var(--serviceHover)",
                } as React.CSSProperties
              }>
            <span id="content1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "var(--cardLight)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 1024 1024"
                  fill="var(--textDark)"
                  version="1.1"
                >
                  <path d="M545.5395 1023.356c-12.29 0-24.57-4.678-33.922-14.022a7.988 7.988 0 0 1 0-11.304 7.992 7.992 0 0 1 11.306 0c12.49 12.474 32.79 12.458 45.25-0.016 12.454-12.468 12.446-32.752-0.032-45.218a7.988 7.988 0 0 1 0-11.304 7.988 7.988 0 0 1 11.304 0c18.706 18.69 18.72 49.114 0.032 67.828-9.354 9.35-21.652 14.036-33.938 14.036zM624.7095 944.236c-12.828 0-24.882-4.996-33.946-14.068a7.988 7.988 0 0 1 0-11.304 7.988 7.988 0 0 1 11.304 0c12.07 12.078 33.14 12.11 45.218 0.032 12.468-12.466 12.46-32.76-0.016-45.234l-62.176-62.208a7.992 7.992 0 1 1 11.304-11.304l62.176 62.208c18.714 18.706 18.714 49.146 0.016 67.844-9.038 9.046-21.074 14.034-33.88 14.034zM703.8195 865.08c-12.29 0-24.568-4.676-33.922-14.03l-62.176-62.178a7.992 7.992 0 1 1 11.304-11.304l62.176 62.178c12.476 12.474 32.76 12.474 45.234 0 12.476-12.476 12.476-32.776 0-45.252l-62.192-62.16c-3.124-3.122-3.124-8.182 0-11.304s8.184-3.124 11.304 0l62.192 62.16c18.714 18.708 18.714 49.156 0 67.862-9.35 9.352-21.63 14.028-33.92 14.028z" />
                </svg>
              </div>
              <p id="svgcontent">Integrity</p>
            </span>
            <span id="content2">
              We uphold integrity by ensuring honesty, transparency, and ethical conduct in all our interactions,
              building trust and long-term relationships with our clients.
            </span>
          </div>
        </div>

        <div className="absolute w-full h-full flex -z-20 bg-(--background1)">
          <div className="w-full flex flex-row-reverse -top-8 -right-8">
            {Array.from({ length: 50 }).map((_, row) => (
              <div
                key={row}
                className={`flex flex-col relative overflow-visible -ml-[2.5px] ${row % 2 === 0 ? "mt-[5px]" : ""}`}
              >
                {Array.from({ length: 15 }).map((_, index) => {
                  const key = `${row}-${index}`
                  const isVisible = visibleHexes2.has(key)

                  return (
                    <React.Fragment key={key}>
                      <div
                        className={`
                              w-2.5 h-2.5 clip-hexagon m-px flex
                              ${!isVisible ? `invisible` : `bg-(--hexagonAlt) opacity-20`}
                            `}
                      ></div>
                    </React.Fragment>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full min-h-screen flex flex-col gap-y-5 bg-(--background2) relative scroll-mt-[12vh] text-(--altText)"
      >
        <motion.div
          className="w-full h-fit py-5 flex justify-center align-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-2xl font-bold mt-8" style={{ color: "var(--textDark)" }}>
            Made by Us
          </h2>
        </motion.div>

        <div
          id="proj1"
          className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full justify-center gap-4"
        >
          {projects.map((item) => {
            return (
              <div
                key={item.name}
                className="cardRadius m-3 flex-col flex border p-1 rounded-lg shadow-md hover:shadow-lg transition"
                style={{
                  borderColor: "var(--borderColor)",
                  background: "var(--projectCard)",
                  borderRadius:'9px'
                }}
              >
                <div className="h-48 w-full flex items-center justify-center rounded-lg overflow-hidden cardRadius">
  <img
    src={item.image}
    alt={item.name} // 
    className="w-full h-full object-cover object-center"
  />
</div>

                <span
                  className="mt-5 text-xl font-semibold align-center justify-center text-center"
                  style={{ color: "var(--textHighlights)" }}
                >
                  {" "}
                  {item.name}
                </span>
                <span className="mt-2 m-3 text-sm text-gray-500 block text-justify"> {item.description} </span>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <button
            className="text-white text-lg rounded-full px-8 py-3 shadow-md hover:shadow-lg transition duration-300 m-10"
            style={{ background: "var(--buttons)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--buttonHover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--buttons)")}
          >
            More Projects
          </button>
        </div>

        <div className="absolute top-0 w-full h-full flex items-end -z-20">
          <div className="w-full flex flex-row-reverse justify-center relative -bottom-[100px] right-[150px]">
            {Array.from({ length: 50 }).map((_, row) => (
              <div
                key={row}
                className={`flex flex-col relative overflow-visible -ml-[2.5px] ${row % 2 === 0 ? "mt-[5px]" : ""}`}
              >
                {Array.from({ length: 15 }).map((_, index) => {
                  const key = `${row}-${index}`
                  const isVisible = visibleHexes2.has(key)

                  return (
                    <React.Fragment key={key}>
                      <div
                        className={`
                              w-2.5 h-2.5 clip-hexagon m-px flex
                              ${!isVisible ? `invisible` : `bg-(--patternHexagon) opacity-20`}
                            `}
                      ></div>
                    </React.Fragment>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full flex flex-col gap-8 px-5 py-12 bg-(--background2) text-white overflow-hidden">
        <h2 className="text-3xl font-bold text-center" style={{ color: "var(--techStackTitle)" }}>
          Tech Stack
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-12 whitespace-nowrap">
            {[...techs, ...techs, ...techs,...techs].map(({ name, icon: Icon }, index) => (
              <div
                key={`${name}-${index}`}
                className="techStack flex flex-col items-center justify-center gap-y-2 hover:scale-110 transition-transform duration-300 min-w-[120px]"
              >
                <Icon className="w-15 h-15" style={{ color: "var(--techStackIconColor)" }} />
                <span className="text-sm" style={{ color: "var(--techStackTextColor)" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="w-full flex flex-col gap-8 px-5 py-12 text-white overflow-hidden relative">
        <h2 className="w-full text-center text-3xl font-bold p-5" style={{ color: "var(--textDark)" }}>
          Voices of Trust: What Our Customers Say
        </h2>
        {testimonial.map((item, index) => (
          <div
            key={item.name}
            ref={addToRefs}
            className={`flex items-center ${
              index % 2 === 1
                ? "leftcard flex-col lg:flex-row-reverse opacity-0"
                : "rightcard flex-col lg:flex-row opacity-0"
            }`}
          >
            <span id="testimonycontainer" className="m-5 w-full lg:w-[50%]">
              <div className="flex flex-col">
                <div className="flex gap-5">
                  <div
                    className="rounded-full w-24 h-24 bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="">
                    <p className="text-2xl font-bold text-gray-600"> {item.about}</p>
                    <p id="Name" className="text-lg" style={{ color: "var(--textHighlights)" }}>
                      {" "}
                      {item.name}
                    </p>
                  </div>
                </div>
                <br />
                <p className="text-gray-500">{item.description}</p>
              </div>
            </span>
          </div>
        ))}

        <div className="absolute w-full h-full flex items-center -z-20">
          <div className="w-full flex -top-8 -right-8">
            {Array.from({ length: 50 }).map((_, row) => (
              <div
                key={row}
                className={`flex flex-col relative overflow-visible -ml-[2.5px] ${row % 2 === 0 ? "mt-[5px]" : ""}`}
              >
                {Array.from({ length: 15 }).map((_, index) => {
                  const key = `${row}-${index}`
                  const isVisible = visibleHexes2.has(key)

                  return (
                    <React.Fragment key={key}>
                      <div
                        className={`
                              w-2.5 h-2.5 clip-hexagon m-px flex
                              ${!isVisible ? `invisible` : `bg-(--hexagonAlt) opacity-20`}
                            `}
                      ></div>
                    </React.Fragment>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      
      
      </section>

      

      {/* Founders Section */}
      <div className="flex flex-col  p-5 gap-5 bg-(--background2)">
         <div className="max-w-7xl mx-auto">
        {/* Header Section */}
                <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-blue-600">Meet Our leadership Team</h2>
          <p className="text-slate-400 text-lg">top people at  our organisation</p>
        </motion.div>

        {/* Founders Grid */} 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-wrap  justify-center gap-8"
        >
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </motion.div>
      </div>

        {/* <h2 className="founders text-3xl font-bold text-center mb-8" style={{ color: "var(--textHighlights)" }}>
          Meet Our leadership Team
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {founders.map((oneFounder) => (
            <div
              key={oneFounder.name}
              className="flex flex-col justify-center items-center gap-y-5 p-6 rounded-lg shadow-md text-center glass hover:shadow-lg transition"
              style={
                {
                  "--hover-shadow": "var(--textHighlights)",
                } as React.CSSProperties
              }
            >
              <div
                className="rounded-full w-24 h-24 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${oneFounder.image})` }}
              ></div>
              <span className="text-xl font-semibold text-white">{oneFounder.name}</span>
              <h2 className="text-lg font-serif" style={{ color: "var(--textDark)" }}>
                {oneFounder.role}
              </h2>
              <span className="max-w-[350px] text-justify text-gray-300">{oneFounder.description}</span>
            </div>
          ))}
        </div> */}
      </div>
    </main>
  )
}

export default Page
