type Service = {
  id: string
  logo: string
  image: string
  p1: string
  p2: string
  icon:any
}

export const services: Service[] = [
  {
    id: "Software Solutions",
    icon:"💻",
    logo: "/software-development-icon.jpg",
    image: "/software-development-workspace.png",
    p1: "We provide tailored software development services to meet your business needs. Whether you need custom web applications, mobile apps, or enterprise solutions, our team ensures user-friendly, scalable, and secure software to streamline your operations and drive growth.",
    p2: "Our approach involves understanding your unique challenges and opportunities, designing intuitive interfaces, and leveraging the latest technologies to create solutions that align with your goals. From ideation to deployment, we ensure a seamless development process, ongoing support, and the flexibility to scale as your business evolves.",
  },
  {
  id: "Automation Services",
  icon:"⚙️",
  logo: "/automation1.jpg",
  image: "/automation2.jpg",
  p1: "Streamline your business processes with our automation services. We design and implement intelligent automation solutions that increase efficiency, reduce errors, and save time across your operations.",
  p2: "Our approach combines process analysis, workflow optimization, and advanced automation tools to create scalable, reliable systems. From repetitive task automation to complex business process automation, we ensure smooth, consistent performance that enhances productivity and drives measurable results."
},

  {
    id: "AI Solutions",
    icon:"🤖",
    logo: "/artificial-intelligence-icon.png",
    image: "/ai-neural-network.png",
    p1: "Unlock the power of Artificial Intelligence with our cutting-edge solutions. From chatbots to predictive analytics and automation, we design AI systems to enhance efficiency, improve decision-making, and deliver a competitive edge for your business.",
    p2: "Our AI services are designed to integrate seamlessly into your operations, whether through machine learning models, natural language processing, or intelligent process automation. We provide end-to-end support, from data preparation and model training to deployment and continuous improvement, ensuring your AI tools deliver measurable value.",
  },
  {
    id: "Cloud Services",
    icon:"☁️",
    logo: "/cloud-computing-icon.png",
    image: "/cloud-infrastructure-network.jpg",
    p1: "Unlock the power of the cloud with scalable, secure, and cost-effective solutions tailored to your business needs.",
    p2: "Our cloud services cover everything from migration and deployment to optimization and ongoing management. Whether you're moving to the cloud for the first time or looking to improve your existing infrastructure, we provide end-to-end support. We ensure high availability, data security, and seamless integration with your systems—helping you reduce costs, increase agility, and drive innovation in a constantly evolving digital landscape.",
  },
  {
    id: "Data Analytics",
    icon:"📊",
    logo: "/data-analytics-icon.png",
    image: "/data-visualization-dashboard.png",
    p1: "Transform your data into actionable insights. Our data analytics services help you identify trends, optimize processes, and make informed decisions. We specialize in data visualization, predictive analytics, and business intelligence tools to maximize your performance.",
    p2: "We work closely with you to understand your data challenges and provide solutions tailored to your objectives. Whether it's building interactive dashboards, implementing advanced analytics models, or setting up real-time monitoring, our goal is to empower your team with the insights they need to drive success.",
  },
 
  // {
  //   id: "Software Testing and QA",
  //   icon:"🔍",
  //   logo: "/quality-assurance-icon.jpg",
  //   image: "/software-testing-process.jpg",
  //   p1: "Ensure your software works seamlessly with our comprehensive testing and quality assurance services. We offer functional, performance, and security testing to identify and resolve issues, delivering reliable and high-quality software to your users.",
  //   p2: "Our testing process includes both manual and automated approaches to ensure your software is robust and user-friendly. We identify potential vulnerabilities, verify compliance with industry standards, and provide detailed reporting to keep you informed every step of the way, ensuring a flawless user experience.",
  // },
]
// { icon: "⛓️", label: "Blockchain" }