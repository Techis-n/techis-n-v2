"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { useTheme } from "../context/ThemeContext"
import Link from "next/link"
import {Menu, X } from "lucide-react"
import Image from "next/image"

const themes = [
  { 
    id: "",
    label: "Deep Ocean",
    gradient: "from-[#5eaaa8] via-[#14b8a6] to-[#2dd4bf]",
    description: "Professional teal & aquamarine - Trust & innovation"
  },
  {
    id: "purple-theme",
    label: "Cosmic Purple",
    gradient: "from-[#5d59af] via-[#8832cd] to-[#a072be]",
    description: "Sophisticated purple - Creativity & luxury"
  },
  {
    id: "sapphire-theme",
    label: "Sapphire Pro",
    gradient: "from-[#6486d4] via-[#2563eb] to-[#3b82f6]",
    description: "Premium blue - Reliability & expertise"
  },
  {
    id: "sunset-theme",
    label: "Sunset Blaze",
    gradient: "from-[#ea8e5f] via-[#f97316] to-[#fb923c]",
    description: "Warm orange - Energy & innovation"
  },
  {
    id: "emerald-theme",
    label: "Emerald Tech",
    gradient: "from-[#47a382] via-[#059669] to-[#10b981]",
    description: "Modern green - Growth & sustainability"
  },
  {
    id: "cyberpunk-theme",
    label: "Electric Fusion",
    gradient: "from-[#00f5ff] via-[#a855f7] to-[#f472b6]",
    description: "Neon cyan & magenta - Cutting-edge & futuristic"
  },
];

 const navLinks = [
    { href: '#homePage', label: 'Home' },
    { href: '#servicesection', label: 'Services' },
    { href: '#aboutSection', label: 'About' },
    { href: '#projects', label: 'Projects' },
  ];

export const PopupNav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add this function to handle theme changes
  const handleThemeChange = (theme: string) => {
    setTheme(theme)
    setShowThemeMenu(false)
  };


  // Add click outside handler to close theme menu (optional but recommended)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const themeSwitcher = document.querySelector('.theme-switcher-container');
      if (themeSwitcher && !themeSwitcher.contains(event.target as Node)) {
        setShowThemeMenu(false);
      }
    };
    

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full h-full flex justify-center p-5 text-white bg-[var(--headerbackground)] border-b border-slate-100">
      <div className="w-full h-full flex flex-row  items-center">
        {/* <h1 className="ml-5 w-fit h-full flex items-center justify-center text-4xl font-serif whitespace-nowrap bg-linear-to-r from-(--gradientPrimary) via-(--gradientSecondary) to-(--gradientTertiary) bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-lg">
          Techis-N
        </h1> */}
        {/* Logo */}
          <div className="flex-shrink-0 left-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative w-65 h-65">
                <Image
                  src="/techis-n.png"
                  alt="TECHIS-N Logo"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              {/* <span className="ml-3 text-xl font-bold text-foreground hidden sm:inline-block transition-colors duration-300 group-hover:text-cyan-500">
                TECHIS-N
              </span> */}
            </Link>
          </div>

                    {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 ml-auto">
          <nav className=" flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          </div>




        <div className="w-fit lg:w-full h-full flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
          <div className="gap-5 justify-center items-center flex w-fit h-full relative top-0 flex-row">
            {/* Theme Switcher */}
            <div className="relative group">
              {/* Button */}
              <button
                onClick={() => setShowThemeMenu((prev) => !prev)}
                className={`p-2 rounded-lg hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/20 ${showThemeMenu && `bg-white/10 border-white/20`}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--textHighlights)" }}
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </button>

              {/* Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Change theme
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-black/90 rotate-45"></div>
              </div>

              {/* Dropdown */}
              {showThemeMenu && (
                <div className="theme-switcher-container absolute top-full -left-full bg-card border border-border rounded-lg shadow-lg p-3 z-50 backdrop-blur-sm min-w-[200px]">
                  <div className="text-sm font-medium text-card-foreground mb-2 px-2">
                    Select Theme
                  </div>

                  {/* FLEX WRAP FIX */}
                  <div className="grid grid-cols-3 gap-3">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => handleThemeChange(t.id)}
                        className="flex flex-col items-center p-2 rounded-md hover:bg-(--serviceHover) transition-colors"
                      >
                        <div
                          className={`w-8 h-8 rounded-full bg-linear-to-r ${t.gradient} mb-1 border border-white/20`}
                        ></div>
                        <span className="text-xs text-foreground">
                          {t.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              className="hidden md:flex md:hover:underline  border-none transition hover:scale-110 cursor-pointer"
              style={{ color: "var(--textHighlights)", "--hover-color": "var(--textDark)" } as React.CSSProperties}
              onClick={() => router.push("/contactus")}
            >
              Let&apos;s connect
            </button>
            <button onClick={() => setShowMenu((prev) => !prev)}
              className="sm:flex md:hidden">
              {!showMenu ? (
                <GiHamburgerMenu size={30} style={{ color: "var(--textHighlights)" }} />
              ) : (
                <IoClose size={30} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {showMenu && (
        <div
          className="fixed w-screen h-screen top-0 left-0 flex flex-col z-50"
          style={{ background: "var(--slidingMenu)", backdropFilter: "blur(10px)" }}
        >
          <div className="w-full h-[12vh] flex flex-row justify-between items-center px-5">
            {/* Logo */}
          <div className="flex-shrink-0 left-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative w-60 h-60">
                <Image
                  src="/techis-n.png"
                  alt="TECHIS-N Logo"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              {/* <span className="ml-3 text-xl font-bold text-foreground hidden sm:inline-block transition-colors duration-300 group-hover:text-cyan-500">
                TECHIS-N
              </span> */}
            </Link>
          </div>
            <div className="w-fit lg:w-full h-full flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
              <div className="gap-5 justify-center items-center flex w-fit h-full relative top-0 flex-row">
                <button
                  className="hover:underline"
                  style={{ color: "var(--textHighlights)" }}
                  onClick={() => router.push("/contactus")}
                >
                  Let&apos;s connect
                </button>
                <button onClick={() => setShowMenu((prev) => !prev)}>
                  <IoClose size={30} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex">
            <div className="w-1/2 h-full flex flex-col gap-y-10 text-2xl lg:text-4xl font-bold items-center justify-center text-white">
              <button
                className="transition"
                style={{ "--hover-color": "var(--textHighlights)" } as React.CSSProperties}
                onClick={() => {
                  setShowMenu(false)
                  router.push("/#homePage")
                }}
              >
                Home
              </button>
              <button
                className="transition"
                style={{ "--hover-color": "var(--textHighlights)" } as React.CSSProperties}
                onClick={() => {
                  setShowMenu(false)
                  router.push("/#servicesection")
                }}
              >
                Services
              </button>
              <button
                className="transition"
                style={{ "--hover-color": "var(--textHighlights)" } as React.CSSProperties}
                onClick={() => {
                  setShowMenu(false)
                  router.push("/#aboutSection")
                }}
              >
                About
              </button>
              <button
                className="transition"
                style={{ "--hover-color": "var(--textHighlights)" } as React.CSSProperties}
                onClick={() => {
                  setShowMenu(false)
                  router.push("/#projects")
                }}
              >
                Projects
              </button>
              <button
                className="transition"
                style={{ "--hover-color": "var(--textHighlights)" } as React.CSSProperties}
                onClick={() => {
                  setShowMenu(false)
                  router.push("/contactus")
                }}
              >
                Contact Us
              </button>
            </div>
            <div className="w-1/2 h-full flex">
              <div className="w-full flex flex-col items-center justify-end gap-y-4 h-full p-5 text-white mb-20">
                <h1>Email: Techisn@gmail.com</h1>
                <h2>Phone: +254 772 000 000</h2>
                <h3>Address: Nairobi, Kenya</h3>
              </div>
            </div>
          </div>
        </div>
      //   <div className="flex p-6 mt-4">
      //   <nav className="md:hidden pb-4 pt-3 border-t border-slate-100  ">
      //       {navLinks.map((link) => (
      //         <Link
      //           key={link.href}
      //           href={link.href}
      //           className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
      //           onClick={() => setIsMenuOpen(false)}
      //         >
      //           {link.label}
      //         </Link>
      //       ))}
      //       <div className="px-4 py-3 mt-2">
      //         <Link
      //           href="/contact"
      //           className="block w-full px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-center transition-colors duration-200"
      //           onClick={() => setIsMenuOpen(false)}
      //         >
      //           Let&apos;s Connect
      //         </Link>
      //       </div>
      //     </nav>
      // </div>
      )}
    </div>

    //  <header className="fixed top-0 w-full z-50 bg-white  backdrop-blur-sm border-b border-slate-200">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-20">
    //       {/* Logo */}
    //       <div className="flex-shrink-0 flex items-center">
    //         <Link href="/" className="flex items-center group">
    //           <div className="relative w-70 h-70">
    //             <Image
    //               src="/techis-n.png"
    //               alt="TECHIS-N Logo"
    //               width={150}
    //               height={150}
    //               className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
    //               priority
    //             />
    //           </div>
    //           {/* <span className="ml-3 text-xl font-bold text-foreground hidden sm:inline-block transition-colors duration-300 group-hover:text-cyan-500">
    //             TECHIS-N
    //           </span> */}
    //         </Link>
    //       </div>

    //       {/* Desktop Navigation */}
    //       <nav className="hidden md:flex items-center gap-8">
    //         {navLinks.map((link) => (
    //           <Link
    //             key={link.href}
    //             href={link.href}
    //             className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
    //           >
    //             {link.label}
    //           </Link>
    //         ))}
    //       </nav>

    //       {/* CTA Button */}
    //       <div className="hidden md:flex items-center gap-4">
    //         <Link
    //           href="/contact"
    //           className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-colors duration-200"
    //         >
    //           Let&apos;s Connect
    //         </Link>
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <button
    //         onClick={() => setIsMenuOpen(!isMenuOpen)}
    //         className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
    //         aria-label="Toggle menu"
    //       >
    //         {isMenuOpen ? (
    //           <X className="w-6 h-6 text-foreground" />
    //         ) : (
    //           <Menu className="w-6 h-6 text-foreground" />
    //         )}
    //       </button>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {isMenuOpen && (
    //       <nav className="md:hidden pb-4 pt-2 border-t border-border">
    //         {navLinks.map((link) => (
    //           <Link
    //             key={link.href}
    //             href={link.href}
    //             className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
    //             onClick={() => setIsMenuOpen(false)}
    //           >
    //             {link.label}
    //           </Link>
    //         ))}
    //         <div className="px-4 py-3 mt-2">
    //           <Link
    //             href="/contact"
    //             className="block w-full px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-center transition-colors duration-200"
    //             onClick={() => setIsMenuOpen(false)}
    //           >
    //             Let&apos;s Connect
    //           </Link>
    //         </div>
    //       </nav>
    //     )}
    //   </div>
    // </header>
  )
}
