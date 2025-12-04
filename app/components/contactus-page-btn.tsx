"use client"

import { useRouter } from "next/navigation"

export default function ContactusPagebtn() {
  const router = useRouter()

  const contactpage = () => {
    router.push("/contactus")
  }

  return (
    <button
      className="w-fit p-5 rounded-full bg-[#8832CD] hover:bg-[#5d59af] transition self-center shadow-lg hover:shadow-xl"
      style={{ background: "var(--buttons)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--buttonHover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--buttons)")}
      onClick={contactpage}
    >
      Discuss Your Project
    </button>
  )
}
