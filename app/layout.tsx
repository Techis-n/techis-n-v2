import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { PopupNav } from "./components/popup-nav"
import ContactusPagebtn from "./components/contactus-page-btn"
import { ThemeProvider } from "./context/ThemeContext"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from 'next/link'

// Font configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Updated metadata
export const metadata: Metadata = {
  title: "Techis-N | Expert Technology Solutions",
  description:"Techis-N delivers expert technology solutions—from AI and automation to cloud services, data analytics, software/ web development, social media management and digital marketing. We design, build, and deploy high-quality software that helps businesses grow and innovate.",
  keywords: ["techis-N", "techisn", "techis", "techis n", "tech is n", "techis-n solutions", "techis-n technologies", "technology solutions", "software development company", "AI solutions", "automation solutions", "cloud solutions", "data analytics services", "IT consulting", "web development services", "app development company", "full-stack development", "DevOps services", "QA testing", "digital marketing services", "social media management", "business automation", "machine learning solutions", "cloud migration", "business intelligence solutions"],
  openGraph:{
    title: "Techis-N | Expert Technology Solutions",
    description:"Techis-N delivers expert technology solutions—from AI and automation to cloud services, data analytics, software/ web development, social media management and digital marketing. We design, build, and deploy high-quality software that helps businesses grow and innovate.",
    url:"https://techis-n.com",
    siteName:"Techis-N",
    // images:[
    //   {
    //     url:,
    //     width:1200,
    //     height:630
    //   }
    // ],
  },


    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html  lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative scrollbar-hide`}>
        <ThemeProvider>
          <header className="w-full h-[12vh] sticky top-0 left-0 z-50 bg-(--navbarColor)">
              <PopupNav />
          </header>
          <main id="mainbody" className="pt-0 relative">
              {children}
          </main>
          {/* <footer className="w-full bg-(--footerColor) p-5 flex flex-col lg:flex-row">
            <div className="flex flex-col gap-y-4 w-full h-full p-5" style={{ color: "var(--footerTextColor)" }}>
              <h1 className="self-center lg:self-start border-none underline" style={{ color: "var(--footerTitle)" }}>
                Let&apos;s Talk
              </h1>
              <p style={{ color: "var(--footerTextColor)" }}>When technology meets intention, it transforms.</p>
              <p style={{ color: "var(--footerSecondaryText)" }} className="text-justify">
                At Techis-N, we don't just deliver — we deliver with purpose. From the first idea to <br></br> the final result, we
                work hand-in-hand with you to turn your vision into powerful, <br></br>customized tech solutions.
              </p>
              <ContactusPagebtn />
            </div>
            <div
              className="w-full flex flex-col items-center justify-center gap-y-4 h-full p-5 lg:w-1/2"
              style={{ color: "var(--footerTextColor)" }}
            >
              <div className="mt-5 p-5">
               <h1>Email  :<a href="mailto:techisn25@gmail.com" className="text-blue-200  hover:text-blue-300 hover:underline ml-4" > techisn25@gmail.com</a></h1>
               <h1>Phone  : +254 111 700 990 / +254 7111 531 39</h1>
               <h1>Address: Nairobi, Kenya</h1>

              </div>
              <div className="flex flex-row gap-3">
             
                <a href="https://wa.me/254 775 014655?text=Hello%20Techis-N!" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                      fill="#BFC8D0"
                    />
                    <path
                      d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                      fill="url(#paint0_linear_87_7264)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                      fill="white"
                    />
                    <path
                      d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_87_7264"
                        x1="26.5"
                        y1="7"
                        x2="4"
                        y2="28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5BD066" />
                        <stop offset="1" stopColor="#27B43E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" fill="#C13584" />
                    <path
                      d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                      fill="white"
                    />
                    <path
                      d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                      fill="white"
                    />
                    <path
                      d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                      fill="white"
                    />
                  </svg>
                </a>
              
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    version="1.1"
                    width="25px"
                    height="25px"
                    viewBox="0 0 552.77 552.77"
                  >
                    <g>
                      <path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z" />
                      <path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z" />
                      <path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48S535.836,228.581,525.732,215.282z" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </footer> */}

          <footer className="w-full bg-black text-slate-100">
      
      {/* Main Footer Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-accent">Techis-N</h3>
              <p className="mt-4 text-sm text-slate-400">
                When technology meets intention, it transforms. We deliver powerful, customized tech solutions with
                purpose.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    Automation Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    AI Services
                  </Link>
                </li>
                  <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    Data Analytics
                  </Link>
                </li>
                 
                  <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    QA Testing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/#aboutSection" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                  <a
                    href="mailto:techisn25@gmail.com"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors break-all"
                  >
                    techisn25@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                  <div className="text-sm text-slate-400">
                    <div className="hover:text-blue-400 transition-colors">+254 111 700 990</div>
                    <div className="hover:text-blue-400 transition-colors">+254 7111 531 39</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-slate-400">Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 border-t border-accent/30 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-slate-500">© 2026 Techis-N. All rights reserved.</p>
              <div className="flex gap-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/254775014655?text=Hello%20Techis-N!"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-slate-400 hover:text-green-400 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32" >
                  <title>whatsapp</title>
                  <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                  </svg>
                  {/* <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.347 1.229-3.263 2.145a9.847 9.847 0 00-2.144 3.265 9.836 9.836 0 00-.949 4.256c0 1.628.271 3.207.795 4.704l-1.239 4.027 4.124-1.215c1.476.711 3.121 1.086 4.791 1.086h.004c5.104 0 9.26-4.158 9.26-9.26 0-2.456-.944-4.771-2.662-6.504a9.052 9.052 0 00-6.504-2.668Z" />
                  </svg> */}

                  
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/techisn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.914 4.914 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.913 4.913 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/techis-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-slate-800 bg-slate-900/50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between">
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-xs text-slate-600">Built with purpose. Powered by techis-n.</p>
          </div>
        </div>
      </div>
    </footer>
        
        </ThemeProvider>
      </body>
    </html>
  )
}
