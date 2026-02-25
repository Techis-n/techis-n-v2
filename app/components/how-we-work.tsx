'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Zap, Code2, TestTube2, Rocket, Wrench } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Discovery & Planning',
    description: 'We analyze your vision, define requirements, and create a comprehensive project roadmap that aligns with your business goals.',
    icon: CheckCircle2,
  },
  {
    number: 2,
    title: 'Design (UX/UI + Technical Architecture)',
    description: 'Our designers craft intuitive interfaces while engineers plan scalable systems architecture for optimal performance.',
    icon: Zap,
  },
  {
    number: 3,
    title: 'Development (Coding & Implementation)',
    description: 'Our developers bring designs to life with clean, maintainable code following industry best practices and standards.',
    icon: Code2,
  },
  {
    number: 4,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures every feature works flawlessly. We validate functionality, performance, and user experience.',
    icon: TestTube2,
  },
  {
    number: 5,
    title: 'Deployment & Release',
    description: 'We deploy your solution to production with careful planning to ensure a smooth, seamless launch.',
    icon: Rocket,
  },
  {
    number: 6,
    title: 'Maintenance & Support',
    description: 'Ongoing support keeps your system running optimally. We monitor performance and implement improvements as needed.',
    icon: Wrench,
  },
]

export function HowWeWork() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleSteps.includes(index)) {
              setVisibleSteps((prev) => [...prev, index])
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [visibleSteps])

  return (
    <section className="w-full  py-20 px-4  md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
            How We Work
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A structured, collaborative process designed to deliver exceptional results on every project.
          </p>
        </div>

        {/* Steps Container */}
        <div ref={containerRef} className="relative overflow-hidden">
          {/* Vertical Progress Line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-accent/30 md:left-1/2 md:-translate-x-1/2"
            style={{
              height: `${(visibleSteps.length / steps.length) * 100}%`,
              transition: 'height 0.3s ease-out',
            }}
          />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isVisible = visibleSteps.includes(index)

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  className="relative"
                >
                  {/* Step Content */}
                  <div
                    className={`ml-20 md:ml-0 md:flex md:items-center md:gap-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } transition-all duration-700 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {/* Content */}
                    <div className="md:flex-1">
                      <div className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-accent" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    {/* <div className="absolute left-2 top-6 md:relative md:left-auto md:top-auto md:w-12 md:h-12 md:flex md:items-center md:justify-center">
                      <div
                        className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                          isVisible
                            ? 'bg-accent border-accent text-accent-foreground scale-100'
                            : 'bg-white border-border text-foreground scale-75'
                        }`}
                      >
                        {step.number}
                      </div> */}
                    {/* </div> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Collaboration Statement */}
        <div className="mt-20 bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8 md:p-10">
          <p className="text-foreground text-lg leading-relaxed text-pretty">
            <span className="font-semibold text-accent">We host regular update sessions</span>{' '}
            throughout design and development to share progress, gather feedback, and ensure your project stays aligned with your goals. This collaborative rhythm helps us refine the work early and adapt quickly as needs evolve.
          </p>
        </div>
      </div>
    </section>
  )
}
