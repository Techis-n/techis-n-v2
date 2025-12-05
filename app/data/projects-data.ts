type Project = {
  name: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    name: "Smart Fuel",
    description:"Smart Fuel is an application that automates fuel station operations, improving sales tracking, inventory management, and mobile payments. It boosts efficiency, prevents losses, and enhances customer satisfaction through real-time monitoring and faster transactions.",
    image: "/smartfuel.webp",
  },
  {
    name: "AfyaSphere",
    description:
      "Designed and developed AfyaSphere, a digital health platform that helps users track symptoms, access verified health insights, and stay engaged with their well-being through AI-powered analysis and direct connections with healthcare providers.",
    image: "/Afyasphere.png",
  },
  {
    name: "Janny Enterprise",
    description:
      "Developed a modern website for Janny Enterprise, a printing and branding company known for quality custom apparel and promotional merchandise.",
    image: "/janny_enterprise.png",
  },
  {
    name: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking application with biometric authentication, real-time transactions, and personalized financial insights.",
    image: "/mobile-banking-app.png",
  },
  {
    name: "Supply Chain Solution",
    description:
      "End-to-end supply chain management platform with real-time tracking, inventory optimization, and predictive demand forecasting.",
    image: "/supply-chain-management.png",
  },
  {
    name: "Educational Learning Platform",
    description:
      "Interactive e-learning platform with video streaming, progress tracking, and AI-powered personalized learning paths for students.",
    image: "/online-learning-platform.png",
  },
]
