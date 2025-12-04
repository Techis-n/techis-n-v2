type Founder = {
  name: string
  role: string
  image: string
  description: string
}

export const founders: Founder[] = [
  {
    name: "John Doe",
    role: "CEO & Co-Founder",
    image: "/professional-ceo-portrait.png",
    description:
      "With over 15 years of experience in technology leadership, John drives our vision of delivering innovative solutions that transform businesses.",
  },
  {
    name: "Jane Smith",
    role: "CTO & Co-Founder",
    image: "/professional-cto-portrait.png",
    description:
      "Jane brings deep technical expertise and a passion for emerging technologies, leading our engineering teams to build cutting-edge solutions.",
  },
]
