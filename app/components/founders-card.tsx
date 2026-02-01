"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FounderCardProps {
  name: string
  role: string
  description: string
  image: string
}

export function FounderCard({ name, role, description, image }: FounderCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-72 h-[400px] max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer bg-slate-300/30 "
    >
      {/* Background Image */}
      <div className="absolute items-center justify-center  inset-0 transition-opacity duration-500 group-hover:opacity-20">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          // fill
          quality={100}
          width={400}
          height={0}
          // //  style={{ height: "auto" }}
          priority
          unoptimized
          className="object-cover h-auto w-full"
          // sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* Hover Background (Grid & Gradient) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgb(181, 194, 192)]-900 via-[rgb(94, 146, 138)]-950 to-slate-600">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#ffffff11 1px, transparent 1px), linear-gradient(90deg, #ffffff11 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Bottom Gradient Overlay (Normal State) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500" />

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Name & Role Wrapper */}
        <div className="transition-all duration-500 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[calc(100%*2.5)]">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white leading-tight">{name}</h3>
            <p className="text-sm  font-medium" style={{ color: "var(--textHighlights)" }}>{role}</p>
          </div>
        </div>

        {/* Description (Visible on Hover) */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
          <p className="text-sm text-slate-900 leading-relaxed text-pretty">{description}</p>
        </div>
      </div>

      {/* Name & Role (Normal State Bottom Position) */}
      <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-white leading-tight">{name}</h3>
          <p className="text-sm  font-medium" style={{ color: "var(--textHighlights)" }}>{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
